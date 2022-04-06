import { AxiosInstance } from 'axios';

import { AxiosPromise, V2OrderShippingQuotesResponseBase } from '../../../../types';

import { getOrdersPath } from './index';

class OrderShippingQuotes {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Gets all shipping quotes persisted on an order
   *
   * @param orderId A valid order ID
   * @param addressId A valid shipping address ID
   * @returns Promise resolving to a response containing the collection of shipping quotes on an order
   */
  list(orderId: number, addressId: number): AxiosPromise<V2OrderShippingQuotesResponseBase> {
    return this.client.get(`${getOrdersPath(orderId)}/shipping_addresses/${addressId}/shipping_quotes`);
  }
}

export default OrderShippingQuotes;
