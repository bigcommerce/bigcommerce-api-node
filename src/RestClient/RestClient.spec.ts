import mockAxios from 'jest-mock-axios';

import RestClient from './index';

const mockClient = mockAxios.create();

describe('RestClient', () => {
  beforeEach(() => {
    mockAxios.reset();
  });

  describe('constructor', () => {
    it('should throw error for missing storeHash', () => {
      const bigcommerceRest = () =>
        // @ts-expect-error testing missing storeHash param
        new RestClient({ accessToken: '987654321' });
      expect(bigcommerceRest).toThrow('storeHash');
    });

    it('should throw error for missing accessToken', () => {
      const bigcommerceRest = () =>
        // @ts-expect-error testing missing accessToken param
        new RestClient({ storeHash: 'abcdefgh1i' });
      expect(bigcommerceRest).toThrow('accessToken');
    });

    it('should allow apiHost to be overridden', () => {
      const config = {
        storeHash: 'abcdefgh1i',
        accessToken: '987654321',
        apiHost: 'api.custom.com',
      };

      new RestClient(config);

      expect(mockAxios.create).toHaveBeenCalledWith({
        baseURL: `https://${config.apiHost}/stores/${config.storeHash}`,
        headers: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          'X-Auth-Token': config.accessToken,
        },
      });
    });
  });

  describe('interceptors', () => {
    it('should initilize axios request and response interceptors', () => {
      new RestClient({
        storeHash: 'abcdefgh1i',
        accessToken: '987654321',
        rateLimitConfig: {
          enableWait: false,
          minRequestsRemaining: 16101495,
        },
      });

      expect(mockClient.interceptors.request.use).toHaveBeenCalled();
      expect(mockClient.interceptors.response.use).toHaveBeenCalled();
    });
  });

  describe('rateLimitManager', () => {
    it('should be initialized with the rate limit config', () => {
      const rateLimitConfig = {
        enableWait: false,
        minRequestsRemaining: 16101495,
      };

      const bigcommerceRest = new RestClient({
        storeHash: 'abcdefgh1i',
        accessToken: '987654321',
        rateLimitConfig,
      });

      expect(bigcommerceRest.rateLimitManager.rateLimitConfig).toEqual(rateLimitConfig);
    });

    it('should be initialized with the default rate limit config if not provided', () => {
      const bigcommerceRest = new RestClient({
        storeHash: 'abcdefgh1i',
        accessToken: '987654321',
      });

      expect(bigcommerceRest.rateLimitManager.rateLimitConfig).toEqual({
        enableWait: false,
        minRequestsRemaining: 1,
      });
    });
  });
});
