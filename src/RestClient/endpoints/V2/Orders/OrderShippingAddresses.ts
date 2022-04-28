import { AxiosInstance } from 'axios';

import { paginateById } from '../../../../utils/paginate';

import type { Addresses } from './types';

import { getOrdersPath } from './index';

class OrderShippingAddresses {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Gets all shipping addresses on an order using the order ID
   *
   * @param orderId A valid order ID
   * @returns Promise resolving to a response containing the collection of shipping addresses
   */
  list(orderId: number, params?: Addresses['ListFilters']): Addresses['ListResponse'] {
    return this.client.get(`${getOrdersPath(orderId)}/shipping_addresses`, { params });
  }

  /**
   * Returns an iterator object allowing you to paginate through all shipping addresses on an order,
   * one address at a time
   *
   * @example
   * for await (const shippingAddress of bcRest.orderShippingAddresses.listAll(orderId)) {
   *   console.log(shippingAddress);
   * }
   *
   * @param params Query parameters used to filter response
   * @returns Promise resolving to an order shipping address list iterator object
   */
  listAll(orderId: number, params?: Addresses['ListFilters']): Addresses['ListAllResponse'] {
    return paginateById((id: number, args?: Addresses['ListFilters']) => this.list(id, args), orderId, params);
  }

  /**
   * Gets a shipping address associated with an order
   *
   * @param orderId A valid order ID
   * @param addressId A valid shipping address ID
   * @returns Promise resolving to a response containing the shipping address data
   */
  get(orderId: number, addressId: number): Addresses['GetResponse'] {
    return this.client.get(`${getOrdersPath(orderId)}/shipping_addresses/${addressId}`);
  }

  /**
   * Updates a shipping address associated with an order
   *
   * @param orderId A valid order ID
   * @param addressId A valid shipping address ID
   * @param data The data to update the shipping address on the order
   * @returns Promise resolving to a response containing the updated shipping address data
   */
  update(orderId: number, addressId: number, data: Addresses['UpdateRequest']): Addresses['UpdateResponse'] {
    return this.client.put(`${getOrdersPath(orderId)}/shipping_addresses/${addressId}`, data);
  }
}

export default OrderShippingAddresses;
