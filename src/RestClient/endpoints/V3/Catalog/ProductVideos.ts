import { AxiosInstance } from 'axios';

import { AxiosPromise } from '../../../../types';

import { getProductsPath } from './Products';
import type { Videos } from './types';

class ProductVideos {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Gets a list of product videos
   *
   * @param productId A valid product ID
   * @param params Query parameters used to filter the response
   * @returns Promise resolving to a list of product videos
   */
  list(productId: number, params?: Videos['ListFilters']): Videos['ListResponse'] {
    return this.client.get(`${getProductsPath(productId)}/videos`, { params });
  }

  /**
   * Creates a new product video
   *
   * @param productId A valid product ID
   * @param data Data used to create a new product video
   * @returns Promise resolving to a newly created product video
   */
  create(productId: number, data: Videos['CreateRequest']): Videos['CreateResponse'] {
    return this.client.post(`${getProductsPath(productId)}/videos`, data);
  }

  /**
   * Gets a single product video
   *
   * @param productId A valid product ID
   * @param videoId A valid product video ID
   * @param params Query parameters used to filter the response
   * @returns Promise resolving to a product video
   */
  get(productId: number, videoId: number, params?: Videos['GetFilters']): Videos['GetResponse'] {
    return this.client.get(`${getProductsPath(productId)}/videos/${videoId}`, { params });
  }

  /**
   * Updates a single product video
   *
   * @param productId A valid product ID
   * @param videoId A valid product video ID
   * @param data Data used to update a product video
   * @returns Promise resolving to an updated product video
   */
  update(productId: number, videoId: number, data: Videos['UpdateRequest']): Videos['UpdateResponse'] {
    return this.client.put(`${getProductsPath(productId)}/videos/${videoId}`, data);
  }

  /**
   * Deletes a single product video
   *
   * @param productId A valid product ID
   * @param videoId A valid product video ID
   * @returns Promise resolving to a 204 No Content response
   */
  delete(productId: number, videoId: number): AxiosPromise<string> {
    return this.client.delete(`${getProductsPath(productId)}/videos/${videoId}`);
  }
}

export default ProductVideos;
