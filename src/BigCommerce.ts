import axios, { AxiosResponse } from 'axios';
import { JwtPayload, verify } from 'jsonwebtoken';

import { BigCommerceConfigurationError } from './errors/BigCommerceConfigurationError';
import {
  AuthCallbackQueryParams,
  AuthResponsePayload,
  BigCommerceConfig,
  BigCommerceConfigProperties,
} from './types';
import { assertIsError } from './utils/assertIsError';
import { keysToSnakeCase } from './utils/cases';

class BigCommerce {
  private config;

  constructor(config: BigCommerceConfig) {
    if (!Object.keys(config).length) {
      throw new BigCommerceConfigurationError();
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
    if (!Object.keys(query).length) {
      throw new Error('Object must contain string values for code, context, and scope');
    }

    const { code, context, scope } = query;
    const { clientId, clientSecret, authCallback } = this.config;
    const loginHost = this.config.loginHost ?? 'login.bigcommerce.com';

    if (!clientId) {
      throw new BigCommerceConfigurationError(BigCommerceConfigProperties.ClientId);
    }

    if (!clientSecret) {
      throw new BigCommerceConfigurationError(BigCommerceConfigProperties.ClientSecret);
    }

    if (!authCallback) {
      throw new BigCommerceConfigurationError(BigCommerceConfigProperties.AuthCallback);
    }

    const payload = keysToSnakeCase({
      clientId,
      clientSecret,
      redirectUri: authCallback,
      grantType: 'authorization_code',
      code,
      scope,
      context,
    });

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

    if (!clientId) {
      throw new BigCommerceConfigurationError(BigCommerceConfigProperties.ClientId);
    }

    if (!clientSecret) {
      throw new BigCommerceConfigurationError(BigCommerceConfigProperties.ClientSecret);
    }

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

export default BigCommerce;
