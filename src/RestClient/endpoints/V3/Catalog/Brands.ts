import { AxiosInstance } from 'axios';

import { AxiosPromise } from '../../../../types';

import type { Brand } from './types';

const BRANDS_PATH = '/v3/catalog/brands';

/**
 * Builds a base Brands API path given an optional brand ID
 *
 * @param id Optional Brand ID
 * @returns Either '/v3/catalog/brands/:brandId' or '/v3/catalog/brands'
 */
export const getBrandsPath = (id?: number): string => `${BRANDS_PATH}${id ? `/${id}` : ''}`;

class Brands {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * List all brands in a store's catalog
   *
   * @param params Query parameters used to filter response
   * @returns Promise resolving to a list of brands
   */
  list(params?: Brand['ListFilters']): Brand['ListResponse'] {
    return this.client.get(getBrandsPath(), { params });
  }

  /**
   * Creates a new brand in a store's catalog
   *
   * @param data Data used to create the brand
   * @returns Promise resolving to the newly created brand
   */
  create(data: Brand['CreateRequest']): Brand['CreateResponse'] {
    return this.client.post(getBrandsPath(), data);
  }

  /**
   * Deletes all brand objects in a store's catalog
   *
   * @param params Comma-separated list of brand names or page titles
   * @returns Promise resolving to a 204 No Content response
   */
  deleteMany(params: Brand['DeleteManyFilters']): AxiosPromise<string> {
    return this.client.delete(getBrandsPath(), { params });
  }

  /**
   * Retrieves a single brand in a store's catalog
   *
   * @param id A valid Brand ID
   * @returns Promise resolving to a single brand
   */
  get(id: number): Brand['GetResponse'] {
    return this.client.get(getBrandsPath(id));
  }

  /**
   * Updates a single brand in a store's catalog
   *
   * @param id A valid Brand ID
   * @param data Data used to update the brand
   * @returns Promise resolving to the updated brand
   */
  update(id: number, data: Brand['UpdateRequest']): Brand['UpdateResponse'] {
    return this.client.put(getBrandsPath(id), data);
  }

  /**
   * Deletes a single brand in a store's catalog
   *
   * @param id A valid Brand ID
   * @returns Promise resolving to a 204 No Content response
   */
  delete(id: number): AxiosPromise<string> {
    return this.client.delete(getBrandsPath(id));
  }
}

export default Brands;
