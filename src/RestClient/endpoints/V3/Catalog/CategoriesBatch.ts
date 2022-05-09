import { AxiosInstance } from 'axios';

import { getCategoryTreesPath } from './CategoryTrees';
import type { CategoryBatch } from './types';

class CategoriesBatch {
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
  list(params?: CategoryBatch['ListFilters']): CategoryBatch['ListResponse'] {
    return this.client.get(`${getCategoryTreesPath()}/categories`, { params });
  }

  /**
   * Creates new categories in a store's catalog
   *
   * @param data Data used to create categories
   * @returns Promise resolving to a list of new categories
   */
  create(data: CategoryBatch['CreateRequest']): CategoryBatch['CreateResponse'] {
    return this.client.post(`${getCategoryTreesPath()}/categories`, data);
  }

  /**
   * Updates existing categories in a store's catalog
   *
   * @param data Data used to create new categories
   * @returns Promise resolving to a list of updated categories
   */
  update(data: CategoryBatch['UpdateRequest']): CategoryBatch['UpdateResponse'] {
    return this.client.put(`${getCategoryTreesPath()}/categories`, data);
  }

  /**
   * Deletes categories in a store's catalog
   *
   * @param params Query parameters used to delete categories
   * @returns Promise resolving to a meta object with data about the deleted categories
   */
  delete(params?: CategoryBatch['DeleteFilters']): CategoryBatch['DeleteResponse'] {
    return this.client.delete(`${getCategoryTreesPath()}/categories`, { params });
  }
}

export default CategoriesBatch;
