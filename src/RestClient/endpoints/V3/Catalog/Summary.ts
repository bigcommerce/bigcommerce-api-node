import { AxiosInstance } from 'axios';

import type { CatSummary } from './types';

const summaryPath = '/v3/catalog/summary';

class Summary {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Returns a lightweight inventory summary from the BigCommerce Catalog
   *
   * @returns Promise resolving to a catalog summary object
   */
  get(): CatSummary['GetResponse'] {
    return this.client.get(summaryPath);
  }
}

export default Summary;
