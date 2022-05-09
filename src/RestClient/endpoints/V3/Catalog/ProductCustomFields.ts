import { AxiosInstance } from 'axios';

import { AxiosPromise } from '../../../../types';

import { getProductsPath } from './Products';
import type { ProductCustomField } from './types';

class ProductCustomFields {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Gets a list of custom fields for a given product
   *
   * @param id A valid product ID
   * @param params Query parameters used to filter the response
   * @returns Promise resolving to a list of product custom fields
   */
  list(id: number, params?: ProductCustomField['ListFilters']): ProductCustomField['ListResponse'] {
    return this.client.get(`${getProductsPath(id)}/custom-fields`, { params });
  }

  /**
   * Creates a new product custom field
   *
   * @param id A valid product ID
   * @param data Data used to create a new product custom field
   * @returns Promise resolving to the newly created product custom field
   */
  create(id: number, data: ProductCustomField['CreateRequest']): ProductCustomField['CreateResponse'] {
    return this.client.post(`${getProductsPath(id)}/custom-fields`, data);
  }

  /**
   * Gets a single product custom field
   *
   * @param productId A valid product ID
   * @param customFieldId A valid custom field ID
   * @param params Query parameters to filter the response
   * @returns Promise resolving to a single product custom field
   */
  get(
    productId: number,
    customFieldId: number,
    params?: ProductCustomField['GetFilters'],
  ): ProductCustomField['GetResponse'] {
    return this.client.get(`${getProductsPath(productId)}/custom-fields/${customFieldId}`, { params });
  }

  /**
   * Updates a single product custom field
   *
   * @param productId A valid product ID
   * @param customFieldId A valid custom field ID
   * @param data Data used to update the custom field
   * @returns Promise resolving to the updated custom field
   */
  update(
    productId: number,
    customFieldId: number,
    data: ProductCustomField['UpdateRequest'],
  ): ProductCustomField['UpdateResponse'] {
    return this.client.put(`${getProductsPath(productId)}/custom-fields/${customFieldId}`, data);
  }

  /**
   * Deletes a single product custom field
   *
   * @param productId A valid product ID
   * @param customFieldId A valid custom field ID
   * @returns Promise resolving to a 204 No Content response
   */
  delete(productId: number, customFieldId: number): AxiosPromise<string> {
    return this.client.delete(`${getProductsPath(productId)}/custom-fields/${customFieldId}`);
  }
}

export default ProductCustomFields;
