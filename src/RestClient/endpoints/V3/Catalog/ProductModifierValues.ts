import { AxiosInstance } from 'axios';

import { AxiosPromise } from '../../../../types';

import { getProductsPath } from './Products';
import type { ProductModifierValue } from './types';

class ProductModifierValues {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Gets a list of product modifier values
   *
   * @param productId A valid product ID
   * @param modifierId A valid product modifier ID
   * @param params Query parameters used to filter the response
   * @returns Promise resolving to the list of product modifier values
   */
  list(
    productId: number,
    modifierId: number,
    params?: ProductModifierValue['ListFilters'],
  ): ProductModifierValue['ListResponse'] {
    return this.client.get(`${getProductsPath(productId)}/modifiers/${modifierId}/values`, { params });
  }

  /**
   * Creates a new product modifier value
   *
   * @param productId A valid product ID
   * @param modifierId A valid product modifier ID
   * @param data Data used to create the product modifier value
   * @returns Promise resolving to the newly created product modifier value
   */
  create(
    productId: number,
    modifierId: number,
    data: ProductModifierValue['CreateRequest'],
  ): ProductModifierValue['CreateResponse'] {
    return this.client.post(`${getProductsPath(productId)}/modifiers/${modifierId}/values`, data);
  }

  /**
   * Gets a single product modifier value
   *
   * @param productId A valid product ID
   * @param modifierId A valid product modifier ID
   * @param valueId A valid product modifier value ID
   * @param params Query parameters used to filter the response
   * @returns Promise resolving to the product modifier value
   */
  get(
    productId: number,
    modifierId: number,
    valueId: number,
    params?: ProductModifierValue['GetFilters'],
  ): ProductModifierValue['GetResponse'] {
    return this.client.get(`${getProductsPath(productId)}/modifiers/${modifierId}/values/${valueId}`, { params });
  }

  /**
   * Updates a single product modifier value
   *
   * @param productId A valid product ID
   * @param modifierId A valid product modifier ID
   * @param valueId A valid product modifier value ID
   * @param data Data used to update the product modifier value
   * @returns Promise resolving to a product modifier value
   */
  update(
    productId: number,
    modifierId: number,
    valueId: number,
    data: ProductModifierValue['UpdateRequest'],
  ): ProductModifierValue['UpdateResponse'] {
    return this.client.put(`${getProductsPath(productId)}/modifiers/${modifierId}/values/${valueId}`, data);
  }

  /**
   * Deletes a single product modifier value
   *
   * @param productId A valid product ID
   * @param modifierId A valid product modifier ID
   * @param valueId A valid product modifier value ID
   * @returns Promise resolving to a 204 No Content response
   */
  delete(productId: number, modifierId: number, valueId: number): AxiosPromise<string> {
    return this.client.delete(`${getProductsPath(productId)}/modifiers/${modifierId}/values/${valueId}`);
  }
}

export default ProductModifierValues;
