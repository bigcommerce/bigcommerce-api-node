import { AxiosInstance } from 'axios';

import { AxiosPromise } from '../../../../types';

import type { Product } from './types';

const PRODUCTS_PATH = '/v3/catalog/products';

/**
 * Builds a base Products API path given an optional product ID
 *
 * @param id Optional Product ID
 * @returns Either '/v3/catalog/products/:productId' or '/v3/catalog/products'
 */
export const getProductsPath = (id?: number): string => `${PRODUCTS_PATH}${id ? `/${id}` : ''}`;

class Products {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Gets a list of products from a store's catalog
   *
   * @param params Query parameters used to filter the response
   * @returns Promise resolving to a list of products
   */
  list(params?: Product['ListFilters']): Product['ListResponse'] {
    return this.client.get(getProductsPath(), { params });
  }

  /**
   * Updates a batch of products in a store's catalog
   *
   * @param data Data used to update a batch of products
   * @param params Query parameters used to filter the response
   * @returns Promise resolving to a list of updated products
   */
  updateBatch(
    data: Product['UpdateBatchRequest'],
    params?: Product['UpdateBatchFilters'],
  ): Product['UpdateBatchResponse'] {
    return this.client.put(getProductsPath(), data, { params });
  }

  /**
   * Creates a new product in a store's catalog
   *
   * @param data Data used to create a product
   * @param params Query parameters used to filter the response
   * @returns Promise resolving to the newly created product
   */
  create(data: Product['CreateRequest'], params?: Product['CreateFilters']): Product['CreateResponse'] {
    return this.client.post(getProductsPath(), data, { params });
  }

  /**
   * Deletes products from a store's catalog
   *
   * @param params Query parameters used to filter the products to delete
   * @returns Promise resolving to a 204 No Content response
   */
  deleteMany(params?: Product['DeleteManyFilters']): AxiosPromise<string> {
    return this.client.delete(getProductsPath(), { params });
  }

  /**
   * Gets a single product by ID
   *
   * @param id A valid product ID
   * @param params Query parameters used to filter the response
   * @returns Promise resolving to a single product
   */
  get(id: number, params?: Product['GetFilters']): Product['GetResponse'] {
    return this.client.get(getProductsPath(id), { params });
  }

  /**
   * Updates a single product by ID
   *
   * @param id A valid product ID
   * @param data Data used to update the product
   * @param params Query parameters used to filter the response
   * @returns Promise resolving to the updated product
   */
  update(id: number, data: Product['UpdateRequest'], params?: Product['UpdateFilters']): Product['UpdateResponse'] {
    return this.client.put(getProductsPath(id), data, { params });
  }

  /**
   * Deletes a single product by ID
   *
   * @param id A valid product ID
   * @returns Promise resolving to a 204 No Content response
   */
  delete(id: number): AxiosPromise<string> {
    return this.client.delete(getProductsPath(id));
  }
}

export default Products;
