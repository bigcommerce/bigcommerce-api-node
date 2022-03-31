import { AxiosInstance } from 'axios';

import { AxiosPromise, V2OrderFiltersBase, V2OrderProductsResponseBase } from '../../../../types';
import { paginateById } from '../../../../utils/paginate';

import { getOrdersPath } from './index';

class OrderProducts {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Lists products associated with an order
   *
   * @param orderId A valid order ID
   * @param params Query parameters used to filter response
   * @returns Promise resolving to a response containing the list of products associated with an order
   */
  list(orderId: number, params?: V2OrderFiltersBase): AxiosPromise<V2OrderProductsResponseBase[]> {
    return this.client.get(`${getOrdersPath(orderId)}/products`, { params });
  }

  /**
   * Returns an iterator object allowing you to paginate through all products on an order, one product at a time
   *
   * @example
   * for await (const product of bcRest.orderProducts.listAll(orderId)) {
   *   console.log(product);
   * }
   *
   * @param params Query parameters used to filter response
   * @returns Promise resolving to an order product list iterator object
   */
  listAll(orderId: number, params?: V2OrderFiltersBase): AsyncGenerator<V2OrderProductsResponseBase, void, unknown> {
    return paginateById((id: number, args?: V2OrderFiltersBase) => this.list(id, args), orderId, params);
  }

  /**
   * Gets a single order product
   *
   * @param orderId The order ID
   * @param productId The order product ID
   * @returns Promise resolving to a response containing the single order product data
   */
  get(orderId: number, productId: number): AxiosPromise<V2OrderProductsResponseBase> {
    return this.client.get(`${getOrdersPath(orderId)}/products/${productId}`);
  }
}

export default OrderProducts;
