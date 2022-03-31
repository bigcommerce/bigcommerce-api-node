import { AxiosInstance } from 'axios';

import { AxiosPromise, V2OrderTaxesListFilters, V2OrderTaxesResponseBase } from '../../../../types';
import { paginateById } from '../../../../utils/paginate';

import { getOrdersPath } from './index';

class OrderTaxes {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Gets all order taxes using order ID
   *
   * @param orderId A valid order ID
   * @param params Query parameters used to filter response
   * @returns Promise resolving to a response containing the list of taxes associated with an order
   */
  list(orderId: number, params?: V2OrderTaxesListFilters): AxiosPromise<V2OrderTaxesResponseBase[]> {
    return this.client.get(`${getOrdersPath(orderId)}/taxes`, { params });
  }

  /**
   * Returns an iterator object allowing you to paginate through all taxes on an order, one tax at a time
   *
   * @example
   * for await (const tax of bcRest.orderTaxes.listAll(orderId)) {
   *   console.log(tax);
   * }
   *
   * @param params Query parameters used to filter response
   * @returns Promise resolving to an order tax list iterator object
   */
  listAll(orderId: number, params?: V2OrderTaxesListFilters): AsyncGenerator<V2OrderTaxesResponseBase, void, unknown> {
    return paginateById((id: number, args?: V2OrderTaxesListFilters) => this.list(id, args), orderId, params);
  }
}

export default OrderTaxes;
