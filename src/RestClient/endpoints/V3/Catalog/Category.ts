import { AxiosInstance } from 'axios';

import { AxiosPromise } from '../../../../types';

import type { Categories } from './types';

const CATEGORY_PATH = '/v3/catalog/categories';

/**
 * Builds a base Category API path given an optional category ID
 *
 * @param id Optional Category ID
 * @returns Either '/v3/catalog/categories/:categoryId' or '/v3/catalog/categories'
 */
export const getCategoryPath = (id?: number): string => `${CATEGORY_PATH}${id ? `/${id}` : ''}`;

class Category {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Gets a list of categories in a store's catalog
   *
   * @param params Query parameters used to filter the response
   * @returns Promise resolving to a list of categories
   */
  list(params?: Categories['ListFilters']): Categories['ListResponse'] {
    return this.client.get(getCategoryPath(), {
      params,
    });
  }

  /**
   * Creates a new category in a store's catalog
   *
   * @param data Data used to create a new category
   * @returns Promise resolving to the newly created category
   */
  create(data: Categories['CreateRequest']): Categories['CreateResponse'] {
    return this.client.post(getCategoryPath(), data);
  }

  /**
   * Deletes categories in a store's catalog
   *
   * @param params Query parameters used to filter which categories should be deleted
   * @returns Promise resolving to a 204 No Content response
   */
  deleteMany(params?: Categories['DeleteManyFilters']): AxiosPromise<string> {
    return this.client.delete(getCategoryPath(), {
      params,
    });
  }

  /**
   * Gets a single category in a store's catalog
   *
   * @param id A valid category ID
   * @param params Query filters used to filter the response
   * @returns Promise resolving to a response for a single category
   */
  get(id: number, params?: Categories['GetFilters']): Categories['GetResponse'] {
    return this.client.get(getCategoryPath(id), {
      params,
    });
  }

  /**
   * Updates a single category in a store's catalog
   *
   * @param id A valid category ID
   * @param data Data used to update a category
   * @returns Promise resolving to the updated category
   */
  update(id: number, data: Categories['UpdateRequest']): Categories['UpdateResponse'] {
    return this.client.put(getCategoryPath(id), data);
  }

  /**
   * Deletes a single category in a store's catalog
   *
   * @param id A valid category ID
   * @returns Promise resolving to a 204 No Content response
   */
  delete(id: number): AxiosPromise<string> {
    return this.client.delete(getCategoryPath(id));
  }
}

export default Category;
