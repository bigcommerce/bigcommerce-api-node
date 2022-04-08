import OAuth from './OAuth';

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
