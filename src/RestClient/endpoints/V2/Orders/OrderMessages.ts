import { AxiosInstance } from 'axios';

import { paginateById } from '../../../../utils/paginate';

import type { Messages } from './types';

import { getOrdersPath } from './index';

class OrderMessages {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Gets all messages associated with an order
   *
   * @param orderId A valid order ID
   * @param params Query parameters used to filter response
   * @returns Promise resolving to a response containing the collection of messages on an order
   */
  list(orderId: number, params?: Messages['ListFilters']): Messages['ListResponse'] {
    return this.client.get(`${getOrdersPath(orderId)}/messages`, { params });
  }

  /**
   * Returns an iterator object allowing you to paginate through all messages on an order, one message at a time
   *
   * @example
   * for await (const message of bcRest.orderMessages.listAll(orderId)) {
   *   console.log(message);
   * }
   *
   * @param params Query parameters used to filter response
   * @returns Promise resolving to an order message list iterator object
   */
  listAll(orderId: number, params?: Messages['ListFilters']): Messages['ListAllResponse'] {
    return paginateById((id: number, args?: Messages['ListFilters']) => this.list(id, args), orderId, params);
  }
}

export default OrderMessages;
