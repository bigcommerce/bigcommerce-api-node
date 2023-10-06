import { AxiosInstance } from 'axios';

import { AxiosPromise } from '../../../../types';

import type { CartSettingsGlobal } from './types';

const cartSettingsGlobalPath = '/v3/carts/settings';

export const getCartSettingsGlobalPath = (): string => `${cartSettingsGlobalPath}`;

export default class CartSettingsGlobalEndpoint {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  public get(): AxiosPromise<CartSettingsGlobal> {
    return this.client.get(getCartSettingsGlobalPath());
  }

  public update(data: CartSettingsGlobal['UpdateRequest']): CartSettingsGlobal['UpdateResponse'] {
    return this.client.put(getCartSettingsGlobalPath(), data);
  }
}
