import { AxiosInstance } from 'axios';

import { AxiosPromise } from '../../../../types';

import { getProductsPath } from './Products';
import type { ProductImage } from './types';

class ProductImages {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Gets a list of product images for a given product
   *
   * @param id A valid product ID
   * @param params Query parameters used to filter the response
   * @returns Promise resolving to a list of product images
   */
  list(id: number, params?: ProductImage['ListFilters']): ProductImage['ListResponse'] {
    return this.client.get(`${getProductsPath(id)}/images`, { params });
  }

  /**
   * Creates a new product image
   *
   * @param productId A valid product ID
   * @param data Data used to create a new product image
   * @returns Promise resolving to a newly created product image
   */
  create(productId: number, data: ProductImage['CreateRequest']): ProductImage['CreateResponse'] {
    return this.client.post(`${getProductsPath(productId)}/images`, data);
  }

  /**
   * Gets a single product image
   *
   * @param productId A valid product ID
   * @param imageId A valid product image ID
   * @param params Query parameters used to filter the response
   * @returns Promise resolving to a single product image
   */
  get(productId: number, imageId: number, params?: ProductImage['GetFilters']): ProductImage['GetResponse'] {
    return this.client.get(`${getProductsPath(productId)}/images/${imageId}`, { params });
  }

  /**
   * Updates a single product image
   *
   * @param productId A valid product ID
   * @param imageId A valid product image ID
   * @param data Data used to update the product image
   * @returns Promise resolving to the updated product image
   */
  update(productId: number, imageId: number, data: ProductImage['UpdateRequest']): ProductImage['UpdateResponse'] {
    return this.client.put(`${getProductsPath(productId)}/images/${imageId}`, data);
  }

  /**
   * Deletes a single product image
   *
   * @param productId A valid product ID
   * @param imageId A valid product image ID
   * @returns Promise resolving to a 204 No Content response
   */
  delete(productId: number, imageId: number): AxiosPromise<string> {
    return this.client.delete(`${getProductsPath(productId)}/images/${imageId}`);
  }
}

export default ProductImages;
