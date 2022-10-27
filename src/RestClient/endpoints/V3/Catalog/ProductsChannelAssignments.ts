import { AxiosInstance } from 'axios';

import { AxiosPromise } from '../../../../types';

import { getProductsPath } from './Products';
import type { ChannelAssignments } from './types';

class ProductsChannelAssignments {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Gets a list of products channel assignments
   *
   * @param params Query parameters to filter the response
   * @returns Promise resolving to a list of product channel assignments
   */
  list(params?: ChannelAssignments['ListFilters']): ChannelAssignments['ListResponse'] {
    return this.client.get(`${getProductsPath()}/channel-assignments`, { params });
  }

  /**
   * Creates products channel assignments
   *
   * @param data Data used to create a product channel assignment
   * @returns Promise resolving to a 204 No Content response
   */
  create(data: ChannelAssignments['CreateRequest']): AxiosPromise<string> {
    return this.client.put(`${getProductsPath()}/channel-assignments`, data);
  }

  /**
   * Deletes products channel assignments
   * @param params Query parameters to filter the response
   * @returns Promise resolving to a 204 No Content response
   */
  delete(params?: ChannelAssignments['DeleteFilters']): AxiosPromise<string> {
    return this.client.delete(`${getProductsPath()}/channel-assignments`, { params });
  }
}

export default ProductsChannelAssignments;
