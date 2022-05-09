import { AxiosInstance } from 'axios';

import { getCategoryPath } from './Category';
import type { SortOrder } from './types';

class ProductSortOrder {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Retrieve a list of products sorted by their sort order
   *
   * @param id A valid Category ID
   * @returns Promise resolving to a list of products and their sort order
   */
  list(id: number): SortOrder['ListResponse'] {
    return this.client.get(`${getCategoryPath(id)}/products/sort-order`);
  }

  /**
   * Updates the sort order of a list of products in a category
   *
   * @param id A valid Category ID
   * @param data Data used to update the sort order of products
   * @returns Promise resolving to a list of products and their sort order
   */
  update(id: number, data: SortOrder['UpdateRequest']): SortOrder['ListResponse'] {
    return this.client.put(`${getCategoryPath(id)}/products/sort-order`, data);
  }
}

export default ProductSortOrder;
