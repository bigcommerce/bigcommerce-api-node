import { AxiosInstance } from 'axios';

import { AxiosPromise } from '../../../../types';

import { getProductsPath } from './Products';
import type { VariantMetafields } from './types';

class ProductVariantsMetafields {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Gets a list of product variant metafields
   *
   * @param productId A valid product ID
   * @param variantId A valid product variant ID
   * @param params Query parameters to filter the response
   * @returns Promise resolving to a list of product variant metafields
   */
  list(
    productId: number,
    variantId: number,
    params?: VariantMetafields['ListFilters'],
  ): VariantMetafields['ListResponse'] {
    return this.client.get(`${getProductsPath(productId)}/variants/${variantId}/metafields`, { params });
  }

  /**
   * Create a new product variant metafield
   *
   * @param productId A valid product ID
   * @param variantId A valid product variant ID
   * @param data Data to create a new product variant metafield
   * @returns Promise resolving to the newly created product variant metafield
   */
  create(
    productId: number,
    variantId: number,
    data: VariantMetafields['CreateRequest'],
  ): VariantMetafields['CreateResponse'] {
    return this.client.post(`${getProductsPath(productId)}/variants/${variantId}/metafields`, data);
  }

  /**
   * Gets a single product variant metafield
   *
   * @param productId A valid product ID
   * @param variantId A valid product variant ID
   * @param metafieldId A valid product variant metafield ID
   * @param params Query parameters used to filter the response
   * @returns Promise resolving to a product variant metafield
   */
  get(
    productId: number,
    variantId: number,
    metafieldId: number,
    params?: VariantMetafields['GetFilters'],
  ): VariantMetafields['GetResponse'] {
    return this.client.get(`${getProductsPath(productId)}/variants/${variantId}/metafields/${metafieldId}`, { params });
  }

  /**
   * Updates a single product variant metafield
   *
   * @param productId A valid product ID
   * @param variantId A valid product variant ID
   * @param metafieldId A valid product variant metafield ID
   * @param data Data to update the product variant metafield
   * @returns Promise resolving to the updated product variant metafield
   */
  update(
    productId: number,
    variantId: number,
    metafieldId: number,
    data: VariantMetafields['UpdateRequest'],
  ): VariantMetafields['UpdateResponse'] {
    return this.client.put(`${getProductsPath(productId)}/variants/${variantId}/metafields/${metafieldId}`, data);
  }

  /**
   * Deletes a single product variant metafield
   *
   * @param productId A valid product ID
   * @param variantId A valid product variant ID
   * @param metafieldId A valid product variant metafield ID
   * @returns Promise resolving to a 204 No Content response
   */
  delete(productId: number, variantId: number, metafieldId: number): AxiosPromise<string> {
    return this.client.delete(`${getProductsPath(productId)}/variants/${variantId}/metafields/${metafieldId}`);
  }
}

export default ProductVariantsMetafields;
