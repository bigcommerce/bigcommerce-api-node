import axios, { AxiosResponse } from 'axios';
import { JwtPayload, verify } from 'jsonwebtoken';

import { AuthCallbackQueryParams, AuthResponsePayload, OAuthConfig } from '../types';
import { assertIsError } from '../utils/assertIsError';

class OAuth {
  private config;

  constructor(config: OAuthConfig) {
    if (!config.clientId || !config.clientSecret || !config.authCallback) {
      throw new Error('Config must contain a clientId, clientSecret, and authCallback');
    }

    this.config = config;
  }

  /**
   * Sends a POST request to the BigCommerce /oauth2/token endpoint
   * to exchange the temporary access code provided by app installation
   * for a permanent access_token that can be used to communicate with
   * the BigCommerce API.
   *
   * @param {Object} query Required properties are code, scope, and context
   * @param {string} query.code Temporary code to exchange for access_token
   * @param {string} query.context Store hash, e.g., stores/{STORE_HASH}
   * @param {string} query.scope List of scopes authorized by the user
   * @returns {Promise<AuthResponsePayload>} Object containing access_token to use
   *     for API requests
   */
  async authorize(query: AuthCallbackQueryParams): Promise<AuthResponsePayload> {
    if (!query.code || !query.context || !query.scope) {
      throw new Error('Query must contain a code, context and scope');
    }

    const { code, context, scope } = query;
    const { clientId, clientSecret, authCallback } = this.config;
    const loginHost = this.config.loginHost ?? 'login.bigcommerce.com';

    const payload = {
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: authCallback,
      grant_type: 'authorization_code',
      code,
      scope,
      context,
    };

    try {
      const { data } = await axios.post<AuthResponsePayload, AxiosResponse<AuthResponsePayload>>(
        `https://${loginHost}/oauth2/token`,
        payload,
      );

      return data;
    } catch (error) {
      assertIsError(error);

      throw new Error('Authorize request returned an error', { cause: error });
    }
  }

  /**
   * Verify signed_payload_jwt from load/uninstall/remove user callbacks
   *
   * @param {string} signedPayloadJWT JWT provided in callback query params
   * @returns {JwtPayload} Decoded JWT containing store hash, user,
   *     and owner information
   */
  verifyJWT(signedPayloadJWT: string): JwtPayload {
    const { clientSecret, clientId } = this.config;

    const decoded = verify(signedPayloadJWT, clientSecret, {
      algorithms: ['HS256'],
      audience: clientId,
    });

    if (typeof decoded === 'string') {
      throw new Error('Signed payload must be of an object type');
    }

    return decoded;
  }
}

export default OAuth;
