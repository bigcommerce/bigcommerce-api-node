import { AxiosInstance } from 'axios';

import { AxiosPromise } from '../../../../types';

import type { CartSettingsChannel } from './types';

const channelSettingsPath = '/v3/carts/settings/channel';

export const getCartSettingsChannelPath = (channelId: string): string => `${channelSettingsPath}/${channelId}`;

export default class CartSettingsChannelEndpoint {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  public get(channelId: string): AxiosPromise<CartSettingsChannel> {
    return this.client.get(getCartSettingsChannelPath(channelId));
  }

  public update(channelId: string, data: CartSettingsChannel['UpdateRequest']): CartSettingsChannel['UpdateResponse'] {
    return this.client.put(getCartSettingsChannelPath(channelId), data);
  }
}
