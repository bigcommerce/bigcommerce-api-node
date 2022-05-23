import { AxiosInstance } from 'axios';

import { AxiosPromise } from '../../../../types';

import { getProductsPath } from './Products';
import type { CategoryAssignments } from './types';

class ProductsCategoryAssignments {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Gets a list of products category assignments
   *
   * @param params Query parameters used to filter the response
   * @returns Promise resolving to a list of product category assignments
   */
  list(params?: CategoryAssignments['ListFilters']): CategoryAssignments['ListResponse'] {
    return this.client.get(`${getProductsPath()}/category-assignments`, { params });
  }

  /**
   * Creates products category assignments
   *
   * @param data Data used to create a new product category assignment
   * @returns Promise resolving to a 204 No Content response
   */
  create(data: CategoryAssignments['CreateRequest']): AxiosPromise<string> {
    return this.client.put(`${getProductsPath()}/category-assignments`, data);
  }

  /**
   * Deletes products category assignments
   *
   * @param params Query parameters used to filter the response
   * @returns Promise resolving to a 204 No Content response
   */
  delete(params?: CategoryAssignments['DeleteFilters']): AxiosPromise<string> {
    return this.client.delete(`${getProductsPath()}/category-assignments`, { params });
  }
}

export default ProductsCategoryAssignments;
