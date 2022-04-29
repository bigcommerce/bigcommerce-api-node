import { AxiosInstance } from 'axios';

import OrdersV2 from './Orders';

class V2 {
  private client: AxiosInstance;

  public orders: OrdersV2;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.orders = new OrdersV2(this.client);
  }
}

export default V2;
