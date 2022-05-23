import { AxiosInstance } from 'axios';

import { AxiosPromise } from '../../../../types';

import { getProductsPath } from './Products';
import type { VariantOptions } from './types';

class ProductVariantOptions {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Gets a list of product variant options
   *
   * @param productId A valid product ID
   * @param params Query parameters used to filter the response
   * @returns Promise resolving to a list of product variant options
   */
  list(productId: number, params?: VariantOptions['ListFilters']): VariantOptions['ListResponse'] {
    return this.client.get(`${getProductsPath(productId)}/options`, { params });
  }

  /**
   * Creates a new product variant option
   *
   * @param productId A valid product ID
   * @param data Data used to create a new product variant option
   * @returns Promise resolving to the newly created product variant option
   */
  create(productId: number, data: VariantOptions['CreateRequest']): VariantOptions['CreateResponse'] {
    return this.client.post(`${getProductsPath(productId)}/options`, data);
  }

  /**
   * Gets a single product variant option
   *
   * @param productId A valid product ID
   * @param optionId A valid product variant option ID
   * @param params Query parameters used to filter the response
   * @returns Promise resolving to a single product variant option
   */
  get(productId: number, optionId: number, params?: VariantOptions['GetFilters']): VariantOptions['GetResponse'] {
    return this.client.get(`${getProductsPath(productId)}/options/${optionId}`, { params });
  }

  /**
   * Updates a single product variant option
   *
   * @param productId A valid product ID
   * @param optionId A valid product variant option ID
   * @param data Data used to update a product variant option
   * @returns Promise resolving to the updated product variant option
   */
  update(productId: number, optionId: number, data: VariantOptions['UpdateRequest']): VariantOptions['UpdateResponse'] {
    return this.client.put(`${getProductsPath(productId)}/options/${optionId}`, data);
  }

  /**
   * Deletes a single product variant option
   *
   * @param productId A valid product ID
   * @param optionId A valid product variant option ID
   * @returns Promise resolving to a 204 No Content response
   */
  delete(productId: number, optionId: number): AxiosPromise<string> {
    return this.client.delete(`${getProductsPath(productId)}/options/${optionId}`);
  }
}

export default ProductVariantOptions;
