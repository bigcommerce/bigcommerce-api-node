import { AxiosInstance } from 'axios';

import CatalogV3 from './Catalog';

class V3 {
  private client: AxiosInstance;

  public catalog: CatalogV3;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.catalog = new CatalogV3(this.client);
  }
}

export default V3;
