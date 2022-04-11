import mockAxios from 'jest-mock-axios';

import RestClient from './index';

describe('RestClient', () => {
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
});
