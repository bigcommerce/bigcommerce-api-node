import { AxiosInstance } from 'axios';

import { AxiosPromise } from '../../../../types';

import type { CategoryTree } from './types';

const CATEGORY_TREES_PATH = '/v3/catalog/trees';

/**
 * Builds a base Category Trees API path given an optional tree ID
 *
 * @param id Optional Tree ID
 * @returns Either '/v3/catalog/trees/:treeId' or '/v3/catalog/trees'
 */
export const getCategoryTreesPath = (id?: number): string => `${CATEGORY_TREES_PATH}${id ? `/${id}` : ''}`;

class CategoryTrees {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Gets a list of category trees
   *
   * @param params Query parameters to filter the response
   * @returns Promise resolving to a list of category trees
   */
  list(params?: CategoryTree['ListFilters']): CategoryTree['ListResponse'] {
    return this.client.get(getCategoryTreesPath(), { params });
  }

  /**
   * Upserts category trees
   *
   * @param data Data used to upsert new category trees
   * @returns Promise resolving to the list of upserted category trees
   */
  upsert(data: CategoryTree['UpsertRequest']): CategoryTree['UpsertResponse'] {
    return this.client.post(getCategoryTreesPath(), data);
  }

  /**
   * Deletes category trees
   *
   * @param params Query parameters used to filter the response
   * @returns Promise resolving to a 204 No Content response
   */
  delete(params?: CategoryTree['DeleteFilters']): AxiosPromise<string> {
    return this.client.delete(getCategoryTreesPath(), { params });
  }

  /**
   * Gets a single category tree
   *
   * @param treeId A valid category tree ID
   * @param params Query parameters used to filter the response
   * @returns Promise resolving to a single category tree
   */
  get(treeId: number, params?: CategoryTree['GetFilters']): CategoryTree['GetResponse'] {
    return this.client.get(`${getCategoryTreesPath(treeId)}/categories`, { params });
  }
}

export default CategoryTrees;
