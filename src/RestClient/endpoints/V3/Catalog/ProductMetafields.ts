import { AxiosInstance } from 'axios';

import { AxiosPromise } from '../../../../types';

import { getProductsPath } from './Products';
import type { ProductMetafield } from './types';

class ProductMetafields {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Gets a list of product metafields
   *
   * @param productId A valid product ID
   * @param params Query parameters to filter the response
   * @returns Promise resolving to a list of product metafields
   */
  list(productId: number, params?: ProductMetafield['ListFilters']): ProductMetafield['ListResponse'] {
    return this.client.get(`${getProductsPath(productId)}/metafields`, { params });
  }

  /**
   * Creates a new product metafield
   *
   * @param productId A valid product ID
   * @param data Data used to create a new product metafield
   * @returns Promise resolving to the newly created product metafield
   */
  create(productId: number, data: ProductMetafield['CreateRequest']): ProductMetafield['CreateResponse'] {
    return this.client.post(`${getProductsPath(productId)}/metafields`, data);
  }

  /**
   * Gets a single product metafield by ID
   *
   * @param productId A valid product ID
   * @param metafieldId A valid product metafield ID
   * @param params Query parameters used to filter the response
   * @returns Promise resolving to a single product metafield
   */
  get(
    productId: number,
    metafieldId: number,
    params?: ProductMetafield['GetFilters'],
  ): ProductMetafield['GetResponse'] {
    return this.client.get(`${getProductsPath(productId)}/metafields/${metafieldId}`, { params });
  }

  /**
   * Updates a single product metafield
   *
   * @param productId A valid product ID
   * @param metafieldId A valid product metafield ID
   * @param data Data used to update the product metafield
   * @returns Promise resolving to the updated product metafield
   */
  update(
    productId: number,
    metafieldId: number,
    data: ProductMetafield['UpdateRequest'],
  ): ProductMetafield['UpdateResponse'] {
    return this.client.put(`${getProductsPath(productId)}/metafields/${metafieldId}`, data);
  }

  /**
   * Deletes a single product metafield
   *
   * @param productId A valid product ID
   * @param metafieldId A valid product metafield ID
   * @returns Promise resolving to the deleted product metafield
   */
  delete(productId: number, metafieldId: number): AxiosPromise<string> {
    return this.client.delete(`${getProductsPath(productId)}/metafields/${metafieldId}`);
  }
}

export default ProductMetafields;
