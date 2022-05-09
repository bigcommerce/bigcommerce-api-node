import { AxiosInstance } from 'axios';

import { AxiosPromise } from '../../../../types';

import { getCategoryPath } from './Category';
import type { CategoryMetafield } from './types';

class CategoryMetafields {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Gets a list of metafields associated with a category
   *
   * @param id A valid Category ID
   * @param params Query parameters used to filter the response
   * @returns Promise resolving to a list of category metafields
   */
  list(id: number, params?: CategoryMetafield['ListFilters']): CategoryMetafield['ListResponse'] {
    return this.client.get(`${getCategoryPath(id)}/metafields`, { params });
  }

  /**
   * Creates a new metafield for a category
   *
   * @param id A valid Category ID
   * @param data Data used to create a category metafield
   * @returns Promise resolving to a newly created category metafield
   */
  create(id: number, data: CategoryMetafield['CreateRequest']): CategoryMetafield['CreateResponse'] {
    return this.client.post(`${getCategoryPath(id)}/metafields`, data);
  }

  /**
   * Gets a single category metafield
   *
   * @param categoryId A valid Category ID
   * @param metafieldId A valid Category Metafield ID
   * @param params Query parameters used to filter the response
   * @returns Promise resolving to a single category metafield
   */
  get(
    categoryId: number,
    metafieldId: number,
    params?: CategoryMetafield['GetFilters'],
  ): CategoryMetafield['GetResponse'] {
    return this.client.get(`${getCategoryPath(categoryId)}/metafields/${metafieldId}`, { params });
  }

  /**
   * Updates a single category metafield
   *
   * @param categoryId A valid Category ID
   * @param metafieldId A valid Category Metafield ID
   * @param data Data used to update the category metafield
   * @returns Promise resolving to the updated category metafield
   */
  update(
    categoryId: number,
    metafieldId: number,
    data: CategoryMetafield['UpdateRequest'],
  ): CategoryMetafield['UpdateResponse'] {
    return this.client.put(`${getCategoryPath(categoryId)}/metafields/${metafieldId}`, data);
  }

  /**
   * Deletes a single category metafield
   *
   * @param categoryId A valid Category ID
   * @param metafieldId A valid Category Metafield ID
   * @returns Promise resolving to a 204 No Content response
   */
  delete(categoryId: number, metafieldId: number): AxiosPromise<string> {
    return this.client.delete(`${getCategoryPath(categoryId)}/metafields/${metafieldId}`);
  }
}

export default CategoryMetafields;
