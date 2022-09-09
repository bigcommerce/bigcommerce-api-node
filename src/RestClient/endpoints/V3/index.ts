import { AxiosInstance } from 'axios';

import CatalogV3 from './Catalog';
import CustomersV3 from './Customers';

class V3 {
  private client: AxiosInstance;

  public catalog: CatalogV3;
  public customers: CustomersV3;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.catalog = new CatalogV3(this.client);
    this.customers = new CustomersV3(this.client);
  }
}

export default V3;
