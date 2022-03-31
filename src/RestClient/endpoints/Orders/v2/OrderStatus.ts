import { AxiosInstance } from 'axios';

import { AxiosPromise, V2OrderStatusResponseBase } from '../../../../types';

const basePath = '/v2/order_statuses';

/**
 * Builds a base Order Status API path given an optional order status ID
 *
 * @param id Optional Order Status ID
 * @returns Either '/v2/order_statuses/:orderStatusId' or '/v2/order_statuses'
 */
const getBasePath = (id?: number): string => `${basePath}${id ? `/${id}` : ''}`;

class OrderStatus {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Gets a list of order statuses in the store
   *
   * @returns Promise resolving to a response containing the collection of order statuses
   */
  list(): AxiosPromise<V2OrderStatusResponseBase[]> {
    return this.client.get(getBasePath());
  }

  /**
   * Gets a single order status in the store
   *
   * @param statusId Order status ID
   * @returns Promise resolving to a response containing the single order status response
   */
  get(statusId: number): AxiosPromise<V2OrderStatusResponseBase> {
    return this.client.get(getBasePath(statusId));
  }
}

export default OrderStatus;
