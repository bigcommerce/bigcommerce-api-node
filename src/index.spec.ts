import OAuth from './OAuth';
import RestClient from './RestClient';
import OrdersV2 from './RestClient/endpoints/V2/Orders';

import BigCommerce from './index';

describe('BigCommerce API Client', () => {
  describe('OAuth', () => {
    const auth = new BigCommerce.Auth({
      clientId: '123456789',
      clientSecret: '987654321',
      authCallback: 'https://yourapplication.com/auth',
    });

    it('should be a class', () => {
      expect(auth).toBeInstanceOf(OAuth);
    });
  });
});

describe('BigCommerce REST', () => {
  const rest = new BigCommerce.Rest({
    storeHash: 'abcdefgh1i',
    accessToken: '987654321',
  });

  it('should be a class', () => {
    expect(rest).toBeInstanceOf(RestClient);
  });

  it('should instantiate and expose a V2 property containing orders object', () => {
    expect(rest.v2.orders).toBeInstanceOf(OrdersV2);
  });
});
