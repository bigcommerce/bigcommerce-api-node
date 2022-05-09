import { AxiosInstance } from 'axios';

import { AxiosPromise } from '../../../../types';

import { getProductsPath } from './Products';
import type { ProductReview } from './types';

class ProductReviews {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Gets a list of product reviews
   *
   * @param productId A valid product ID
   * @param params Query parameters to filter the response
   * @returns Promise resolving to a list of product metafields
   */
  list(productId: number, params?: ProductReview['ListFilters']): ProductReview['ListResponse'] {
    return this.client.get(`${getProductsPath(productId)}/reviews`, { params });
  }

  /**
   * Creates a new product review
   *
   * @param productId A valid product ID
   * @param data Data to create a new product review
   * @returns Promise resolving to a newly created product review
   */
  create(productId: number, data: ProductReview['CreateRequest']): ProductReview['CreateResponse'] {
    return this.client.post(`${getProductsPath(productId)}/reviews`, data);
  }

  /**
   * Gets a single product review
   *
   * @param productId A valid product ID
   * @param reviewId A valid product review ID
   * @param params Query parameters to filter the response
   * @returns Promise resolving to a single product review
   */
  get(productId: number, reviewId: number, params?: ProductReview['GetFilters']): ProductReview['GetResponse'] {
    return this.client.get(`${getProductsPath(productId)}/reviews/${reviewId}`, { params });
  }

  /**
   * Updates a single product review
   *
   * @param productId A valid product ID
   * @param reviewId A valid product review ID
   * @param data Data to update the product review
   * @returns Promise resolving to a single updated product review
   */
  update(productId: number, reviewId: number, data: ProductReview['UpdateRequest']): ProductReview['UpdateResponse'] {
    return this.client.put(`${getProductsPath(productId)}/reviews/${reviewId}`, data);
  }

  /**
   * Deletes a single product review
   *
   * @param productId A valid product ID
   * @param reviewId A valid product review ID
   * @returns Promise resolving to a 204 No Content response
   */
  delete(productId: number, reviewId: number): AxiosPromise<string> {
    return this.client.delete(`${getProductsPath(productId)}/reviews/${reviewId}`);
  }
}

export default ProductReviews;
