import axios from 'axios';

import RateLimitManager from '../RateLimitManager';
import { RestClientConfig } from '../types';

import OrdersV2 from './endpoints/Orders/v2';

class RestClient {
  public ordersV2: OrdersV2;
  public rateLimitManager: RateLimitManager;

  constructor(config: RestClientConfig) {
    if (!config.storeHash || !config.accessToken) {
      throw new Error('Config must contain a storeHash and accessToken');
    }

    const apiHost = config.apiHost ?? 'api.bigcommerce.com';

    const client = axios.create({
      baseURL: `https://${apiHost}/stores/${config.storeHash}`,
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'X-Auth-Token': config.accessToken,
      },
    });

    this.rateLimitManager = new RateLimitManager(
      client,
      config.rateLimitConfig ?? { enableWait: false, minRequestsRemaining: 1 },
    );
    this.ordersV2 = new OrdersV2(client);
  }
}

export default RestClient;
