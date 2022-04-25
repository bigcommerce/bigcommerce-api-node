import axios from 'axios';

import RateLimitManager from '../RateLimitManager';
import { RestClientConfig } from '../types';

import V2 from './endpoints/V2';
import V3 from './endpoints/V3';

class RestClient {
  public rateLimitManager: RateLimitManager;
  public v2: V2;
  public v3: V3;

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

    this.v2 = new V2(client);
    this.v3 = new V3();
  }
}

export default RestClient;
