import { AxiosInstance } from 'axios';

import { AxiosPromise } from '../../../../types';

import { getProductsPath } from './Products';
import type { ProductVariant } from './types';

class ProductVariants {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Gets a list of product variants
   *
   * @param productId A valid product ID
   * @param params Query parameters used to filter the response
   * @returns Promise resolving to a list of product variants
   */
  list(productId: number, params?: ProductVariant['ListFilters']): ProductVariant['ListResponse'] {
    return this.client.get(`${getProductsPath(productId)}/variants`, { params });
  }

  /**
   * Creates a single product variant
   *
   * @param productId A valid product ID
   * @param data Data used to create a new product variant
   * @returns Promise resolving to the newly created product variant
   */
  create(productId: number, data: ProductVariant['CreateRequest']): ProductVariant['CreateResponse'] {
    return this.client.post(`${getProductsPath(productId)}/variants`, data);
  }

  /**
   * Gets a single product variant
   *
   * @param productId A valid product ID
   * @param variantId A valid product variant ID
   * @param params Query parameters used to filter the response
   * @returns Promise resolving to a single product variant
   */
  get(productId: number, variantId: number, params?: ProductVariant['GetFilters']): ProductVariant['GetResponse'] {
    return this.client.get(`${getProductsPath(productId)}/variants/${variantId}`, { params });
  }

  /**
   * Updates a single product variant
   *
   * @param productId A valid product ID
   * @param variantId A valid product variant ID
   * @param data Data used to update a product variant
   * @returns Promise resolving to the updated product variant
   */
  update(
    productId: number,
    variantId: number,
    data: ProductVariant['UpdateRequest'],
  ): ProductVariant['UpdateResponse'] {
    return this.client.put(`${getProductsPath(productId)}/variants/${variantId}`, data);
  }

  /**
   * Deletes a single product variant
   *
   * @param productId A valid product ID
   * @param variantId A valid product variant ID
   * @returns Promise resolving to a 204 No Content response
   */
  delete(productId: number, variantId: number): AxiosPromise<string> {
    return this.client.delete(`${getProductsPath(productId)}/variants/${variantId}`);
  }

  /**
   * Creates a new product variant image
   *
   * @param productId A valid product ID
   * @param variantId A valid product variant ID
   * @param data Data used to create a new product variant image
   * @returns Promise resolving to the newly created product variant image
   */
  createImage(
    productId: number,
    variantId: number,
    data: ProductVariant['CreateImageRequest'],
  ): ProductVariant['CreateImageResponse'] {
    return this.client.post(`${getProductsPath(productId)}/variants/${variantId}/image`, data);
  }
}

export default ProductVariants;
