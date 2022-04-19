/* eslint-disable @typescript-eslint/naming-convention */
import mockAxios from 'jest-mock-axios';

import { wait } from '../utils/wait';

import RateLimitManager from './index';

const mockClient = mockAxios.create();

jest.mock('../utils/wait', () => ({
  wait: jest.fn(),
}));

const headers = {
  'x-rate-limit-time-reset-ms': '123',
  'x-rate-limit-time-window-ms': '456',
  'x-rate-limit-requests-left': '10',
  'x-rate-limit-requests-quota': '101112',
};

describe('RateLimitManager', () => {
  describe('constructor', () => {
    it('should initialize the rate limit manager', () => {
      // @ts-expect-error testing RateLimitManager constructor
      const rateLimitManager = new RateLimitManager(mockClient, {
        enableWait: true,
        minRequestsRemaining: 1,
      });

      expect(rateLimitManager.rateLimitConfig).toEqual({
        enableWait: true,
        minRequestsRemaining: 1,
      });
      expect(rateLimitManager.status).toBeNull();
    });
  });

  describe('setStatus', () => {
    it('should set the rate limit status from the response headers', () => {
      const dateSpy = jest.spyOn(global, 'Date'); // spy on Date
      // @ts-expect-error testing RateLimitManager constructor
      const rateLimitManager = new RateLimitManager(mockClient, {
        enableWait: true,
        minRequestsRemaining: 1,
      });

      rateLimitManager.setStatus(headers);

      const date = dateSpy.mock.instances[0];

      expect(rateLimitManager.status).toEqual({
        msToReset: 123,
        nextWindowTime: date,
        windowSize: 456,
        requestsRemaining: 10,
        requestsQuota: 101112,
      });
    });
  });

  describe('backoff', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('should wait until the next rate limit window when remaining requests are less than the minimum', async () => {
      // @ts-expect-error testing RateLimitManager constructor
      const rateLimitManager = new RateLimitManager(mockClient, {
        enableWait: true,
        minRequestsRemaining: 10,
      });

      rateLimitManager.setStatus(headers);

      await rateLimitManager.backoff();

      expect(wait).toHaveBeenCalledWith(123);
    });

    it('should not wait if the rate limit is not enabled', async () => {
      // @ts-expect-error testing RateLimitManager constructor
      const rateLimitManager = new RateLimitManager(mockClient, {
        enableWait: false,
        minRequestsRemaining: 1,
      });

      rateLimitManager.setStatus(headers);

      await rateLimitManager.backoff();

      expect(wait).not.toHaveBeenCalled();
    });

    it('should not wait if the remaining requests are greater than the minimum', async () => {
      // @ts-expect-error testing RateLimitManager constructor
      const rateLimitManager = new RateLimitManager(mockClient, {
        enableWait: true,
        minRequestsRemaining: 1,
      });

      rateLimitManager.setStatus(headers);

      await rateLimitManager.backoff();

      expect(wait).not.toHaveBeenCalled();
    });

    it('should not wait if status is not set', async () => {
      // @ts-expect-error testing RateLimitManager constructor
      const rateLimitManager = new RateLimitManager(mockClient, {
        enableWait: true,
        minRequestsRemaining: 1,
      });

      await rateLimitManager.backoff();

      expect(wait).not.toHaveBeenCalled();
    });

    it('should run the callback function if provided', async () => {
      // @ts-expect-error testing RateLimitManager constructor
      const rateLimitManager = new RateLimitManager(mockClient, {
        enableWait: true,
        minRequestsRemaining: 10,
        callbackParams: { foo: 'bar' },
        callback: jest.fn(),
      });

      rateLimitManager.setStatus(headers);

      await rateLimitManager.backoff();

      expect(rateLimitManager.rateLimitConfig.callback).toHaveBeenCalledWith(
        rateLimitManager.rateLimitConfig.callbackParams,
      );
    });
  });

  describe('requestSuccessInterceptor', () => {
    it('should call backoff if the rate limit is enabled', async () => {
      // @ts-expect-error testing RateLimitManager constructor
      const rateLimitManager = new RateLimitManager(mockClient, {
        enableWait: true,
        minRequestsRemaining: 10,
      });

      rateLimitManager.setStatus(headers);

      const requestConfig = {};

      await rateLimitManager.requestSuccessInterceptor(requestConfig);

      expect(wait).toHaveBeenCalled();
    });
  });

  describe('responseSuccessInterceptor', () => {
    it('should update the rate limit status from the response headers', () => {
      // @ts-expect-error testing RateLimitManager constructor
      const rateLimitManager = new RateLimitManager(mockClient, {
        enableWait: true,
        minRequestsRemaining: 1,
      });

      const response = {
        data: '',
        status: 200,
        statusText: 'OK',
        headers,
        config: {},
      };

      rateLimitManager.responseSuccessInterceptor(response);

      expect(rateLimitManager.status).toEqual({
        msToReset: 123,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        nextWindowTime: expect.any(Date),
        windowSize: 456,
        requestsRemaining: 10,
        requestsQuota: 101112,
      });
    });
  });

  describe('responseErrorInterceptor', () => {
    it('should throw error for 429 response code', () => {
      // @ts-expect-error testing RateLimitManager constructor
      const rateLimitManager = new RateLimitManager(mockClient, {
        enableWait: true,
        minRequestsRemaining: 1,
      });

      const response = {
        data: '',
        status: 429,
        statusText: 'Too Many Requests',
        headers,
        config: {},
      };

      const responseError = {
        name: 'ResponseError',
        message: '',
        config: {},
        response,
        isAxiosError: true,
        toJSON: () => ({}),
      };

      expect(() => rateLimitManager.responseErrorInterceptor(responseError)).toThrow('Rate limit exceeded');
    });

    it('should not throw error if response object missing from error', () => {
      // @ts-expect-error testing RateLimitManager constructor
      const rateLimitManager = new RateLimitManager(mockClient, {
        enableWait: true,
        minRequestsRemaining: 1,
      });

      const responseError = {
        name: 'ResponseError',
        message: '',
        config: {},
        isAxiosError: true,
        toJSON: () => ({}),
      };

      expect(() => rateLimitManager.responseErrorInterceptor(responseError)).not.toThrow();
    });

    it('should return error', () => {
      // @ts-expect-error testing RateLimitManager constructor
      const rateLimitManager = new RateLimitManager(mockClient, {
        enableWait: true,
        minRequestsRemaining: 1,
      });

      const response = {
        data: '',
        status: 500,
        statusText: 'Internal Server Error',
        headers,
        config: {},
      };

      const responseError = {
        name: 'ResponseError',
        message: '',
        config: {},
        response,
        isAxiosError: true,
        toJSON: () => ({}),
      };

      expect(rateLimitManager.responseErrorInterceptor(responseError)).toEqual(responseError);
    });
  });
});
