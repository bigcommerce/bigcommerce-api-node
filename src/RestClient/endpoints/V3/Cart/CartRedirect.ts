import { AxiosInstance } from 'axios';

import { AxiosPromise } from '../../../../types';

import type { CartRedirect } from './types';

const cartRedirectPath = '/v3/carts';

export const getCartRedirectPath = (cartId: string): string => `${cartRedirectPath}/${cartId}/redirect_urls`;

export default class CartSettingsGlobalEndpoint {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  public get(cartId: string): AxiosPromise<CartRedirect> {
    return this.client.get(getCartRedirectPath(cartId));
  }
}
