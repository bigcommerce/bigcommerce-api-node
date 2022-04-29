import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosResponseHeaders } from 'axios';

import { RateLimitConfig, RateLimitStatus } from '../types';
import { wait } from '../utils/wait';

class RateLimitManager {
  private client: AxiosInstance;

  public rateLimitConfig: RateLimitConfig;
  public status: RateLimitStatus | null;

  constructor(client: AxiosInstance, config: RateLimitConfig) {
    this.client = client;
    this.status = null;
    this.rateLimitConfig = config;

    this.client.interceptors.request.use(this.requestSuccessInterceptor);
    this.client.interceptors.response.use(this.responseSuccessInterceptor, this.responseErrorInterceptor);
  }

  /**
   * Sets the rate limit status from the response headers
   * @param {AxiosResponseHeaders} headers Headers object from axios response
   * @returns {void}
   */
  public setStatus(headers: AxiosResponseHeaders): void {
    if (headers['x-rate-limit-time-reset-ms']) {
      const now = new Date();
      const msToReset = Number(headers['x-rate-limit-time-reset-ms']);
      this.status = {
        msToReset,
        nextWindowTime: new Date(+now + msToReset),
        windowSize: Number(headers['x-rate-limit-time-window-ms']),
        requestsRemaining: Number(headers['x-rate-limit-requests-left']),
        requestsQuota: Number(headers['x-rate-limit-requests-quota']),
      };
    }
  }

  /**
   * If enabled, waits until the next rate limit window when remaining requests are less than the minimum. Runs a
   * callback function if provided in rateLimitConfig.
   * @returns {Promise<void>}
   */
  public async backoff(): Promise<void> {
    if (this.status) {
      const isAtRequestThreshold = this.status.requestsRemaining <= this.rateLimitConfig.minRequestsRemaining;
      if (this.rateLimitConfig.enableWait && isAtRequestThreshold) {
        await wait(this.status.msToReset);
      }
      if (this.rateLimitConfig.callback && isAtRequestThreshold) {
        this.rateLimitConfig.callback(this.rateLimitConfig.callbackParams);
      }
    }
  }

  /**
   * Callback passed into client request interceptor for rate limiting management.
   * @param {AxiosRequestConfig} req Request config object from axios
   * @returns {Promise<AxiosRequestConfig>} Returns the request config object after backoff runs
   */
  public requestSuccessInterceptor = async (req: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
    await this.backoff();

    return req;
  };

  /**
   * Callback to be passed into client response interceptor for rate limiting management.
   * @param {AxiosResponse} res Response object from axios
   * @returns {AxiosResponse} Returns the response object after setting the rate limit status
   */
  public responseSuccessInterceptor = (res: AxiosResponse): AxiosResponse => {
    this.setStatus(res.headers);

    return res;
  };

  /**
   * Callback to be passed into client response interceptor for better HTTP error handling.
   * @param {AxiosError} error Error object from axios.
   */
  public responseErrorInterceptor = (error: AxiosError): AxiosError => {
    if (error.response?.status === 429) {
      throw new Error(`${error.response.status} - Rate limit exceeded. ${this.status?.msToReset ?? 0}ms to reset.`);
    }

    return error;
  };
}

export default RateLimitManager;
