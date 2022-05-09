import { AxiosInstance } from 'axios';

import { AxiosPromise } from '../../../../types';

import { getProductsPath } from './Products';
import type { VariantOptionValues } from './types';

class ProductVariantOptionValues {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Gets a list of product variant option values
   *
   * @param productId A valid product ID
   * @param optionId A valid product option ID
   * @param params Query parameters used to filter the response
   * @returns Promise resolving to a list of product variant option values
   */
  list(
    productId: number,
    optionId: number,
    params?: VariantOptionValues['ListFilters'],
  ): VariantOptionValues['ListResponse'] {
    return this.client.get(`${getProductsPath(productId)}/options/${optionId}/values`, { params });
  }

  /**
   * Creates a single product variant option value
   *
   * @param productId A valid product ID
   * @param optionId A valid product option ID
   * @param data Data used to create a new product variant option value
   * @returns Promise resolving to the newly created product variant option value
   */
  create(
    productId: number,
    optionId: number,
    data: VariantOptionValues['CreateRequest'],
  ): VariantOptionValues['CreateResponse'] {
    return this.client.post(`${getProductsPath(productId)}/options/${optionId}/values`, data);
  }

  /**
   * Gets a single product variant option value
   *
   * @param productId A valid product ID
   * @param optionId A valid product option ID
   * @param valueId A valid product variant option value ID
   * @param params Query parameters used to filter the response
   * @returns Promise resolving to a single product variant option value
   */
  get(
    productId: number,
    optionId: number,
    valueId: number,
    params?: VariantOptionValues['GetFilters'],
  ): VariantOptionValues['GetResponse'] {
    return this.client.get(`${getProductsPath(productId)}/options/${optionId}/values/${valueId}`, { params });
  }

  /**
   * Updates a single product variant option value
   *
   * @param productId A valid product ID
   * @param optionId A valid product option ID
   * @param valueId A valid product variant option value ID
   * @param data Data used to update a product variant option value
   * @returns Promise resolving to the updated product variant option value
   */
  update(
    productId: number,
    optionId: number,
    valueId: number,
    data: VariantOptionValues['UpdateRequest'],
  ): VariantOptionValues['UpdateResponse'] {
    return this.client.put(`${getProductsPath(productId)}/options/${optionId}/values/${valueId}`, data);
  }

  /**
   * Deletes a single product variant option value
   *
   * @param productId A valid product ID
   * @param optionId A valid product option ID
   * @param valueId A valid product variant option value ID
   * @returns Promise resolving to a 204 No Content response
   */
  delete(productId: number, optionId: number, valueId: number): AxiosPromise<string> {
    return this.client.delete(`${getProductsPath(productId)}/options/${optionId}/values/${valueId}`);
  }
}

export default ProductVariantOptionValues;
