import mockAxios from 'jest-mock-axios';

import OAuth from './index';

const payload = { foo: 'bar' };

jest.mock('jsonwebtoken', () => ({
  ...jest.requireActual('jsonwebtoken'),
  verify: jest.fn().mockReturnValue({ foo: 'bar' }).mockReturnValueOnce('invalid'),
}));

afterEach(() => {
  mockAxios.reset();
});

describe('OAuth', () => {
  describe('constructor', () => {
    it('should throw error for missing clientId', () => {
      const bigcommerceAuth = () =>
        // @ts-expect-error testing missing clientId param
        new OAuth({ clientSecret: '987654321', authCallback: 'https://yourapplication.com/auth' });
      expect(bigcommerceAuth).toThrow('clientId');
    });

    it('should throw error for missing clientSecret', () => {
      const bigcommerceAuth = () =>
        // @ts-expect-error testing missing clientSecret param
        new OAuth({ clientId: '123456789', authCallback: 'https://yourapplication.com/auth' });
      expect(bigcommerceAuth).toThrow('clientSecret');
    });

    it('should throw error for missing authCallback', () => {
      // @ts-expect-error testing missing clientSecret param
      const bigcommerceAuth = () => new OAuth({ clientId: '123456789', clientSecret: '987654321' });
      expect(bigcommerceAuth).toThrow('authCallback');
    });
  });

  describe('authorize', () => {
    const auth = new OAuth({
      clientId: '123456789',
      clientSecret: '987654321',
      authCallback: 'https://yourapplication.com/auth',
    });

    it('should throw error for missing code', async () => {
      await expect(() =>
        // @ts-expect-error testing missing code param
        auth.authorize({ context: 'stores/12345', scope: 'read_content' }),
      ).rejects.toThrow('code');
    });

    it('should throw error for missing context', async () => {
      // @ts-expect-error testing missing context param
      await expect(() => auth.authorize({ code: '12345', scope: 'read_content' })).rejects.toThrow('context');
    });

    it('should throw error for missing scope', async () => {
      // @ts-expect-error testing missing scope param
      await expect(() => auth.authorize({ code: '12345', context: 'stores/12345' })).rejects.toThrow('scope');
    });

    it('should return payload when called with correct params', async () => {
      const promise = auth.authorize({ code: '12345', context: 'stores/12345', scope: 'read_content' });

      expect(mockAxios.post).toHaveBeenCalledWith('https://login.bigcommerce.com/oauth2/token', {
        client_id: '123456789',
        client_secret: '987654321',
        redirect_uri: 'https://yourapplication.com/auth',
        grant_type: 'authorization_code',
        code: '12345',
        scope: 'read_content',
        context: 'stores/12345',
      });

      mockAxios.mockResponse({ data: payload });

      const result = await promise;
      expect(result).toEqual(payload);
    });

    it('should throw error when called with invalid token', async () => {
      const error = new Error('Authorize request returned an error');
      const promise = auth.authorize({ code: '12345', context: 'stores/12345', scope: 'read_content' });

      mockAxios.mockError(error);

      await expect(promise).rejects.toThrow();
    });

    it('should use passed loginHost', () => {
      const thenFn = jest.fn();
      const catchFn = jest.fn();
      const defaultLoginHostAuth = new OAuth({
        clientId: '123456789',
        clientSecret: '987654321',
        authCallback: 'https://yourapplication.com/auth',
        loginHost: 'login.yourapplication.com',
      });

      defaultLoginHostAuth
        .authorize({ code: '12345', context: 'stores/12345', scope: 'read_content' })
        .then(thenFn)
        .catch(catchFn);

      expect(mockAxios.post).toHaveBeenCalledWith('https://login.yourapplication.com/oauth2/token', {
        client_id: '123456789',
        client_secret: '987654321',
        redirect_uri: 'https://yourapplication.com/auth',
        grant_type: 'authorization_code',
        code: '12345',
        scope: 'read_content',
        context: 'stores/12345',
      });
    });
  });

  describe('verifyJWT', () => {
    const auth = new OAuth({
      clientId: '123456789',
      clientSecret: '987654321',
      authCallback: 'https://yourapplication.com/auth',
    });

    it('should throw error for invalid signedPayloadJWT', () => {
      expect(() => auth.verifyJWT('')).toThrow('Signed payload must be of an object type');
    });

    it('should return JWT payload', () => {
      expect(auth.verifyJWT('signed_payload_jwt')).toEqual(payload);
    });
  });
});
