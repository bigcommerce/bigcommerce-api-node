import { AxiosInstance } from 'axios';

import { AxiosPromise } from '../../../../types';

import { getProductsPath } from './Products';
import type { ProductComplexRule } from './types';

class ProductComplexRules {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Gets a list of all product complex rules
   *
   * @param id A valid product ID
   * @param params Query parameters used to filter the response
   * @returns Promise resolving to a list of product complex rules
   */
  list(id: number, params?: ProductComplexRule['ListFilters']): ProductComplexRule['ListResponse'] {
    return this.client.get(`${getProductsPath(id)}/complex-rules`, { params });
  }

  /**
   * Creates a new product complex rule
   *
   * @param id A valid product ID
   * @param data Data used to create a complex rule
   * @returns Promise resolving to the newly created product complex rule
   */
  create(id: number, data: ProductComplexRule['CreateRequest']): ProductComplexRule['CreateResponse'] {
    return this.client.post(`${getProductsPath(id)}/complex-rules`, data);
  }

  /**
   * Gets a single product complex rule
   *
   * @param productId A valid product ID
   * @param ruleId A valid complex rule ID
   * @param params Query parameters used to filter the response
   * @returns Promise resolving to a single product complex rule
   */
  get(productId: number, ruleId: number, params?: ProductComplexRule['GetFilters']): ProductComplexRule['GetResponse'] {
    return this.client.get(`${getProductsPath(productId)}/complex-rules/${ruleId}`, { params });
  }

  /**
   * Updates a single product complex rule
   *
   * @param productId A valid product ID
   * @param ruleId A valid complex rule ID
   * @param data Data used to update a complex rule
   * @returns Promise resolving to the updated product complex rule
   */
  update(
    productId: number,
    ruleId: number,
    data: ProductComplexRule['UpdateRequest'],
  ): ProductComplexRule['UpdateResponse'] {
    return this.client.put(`${getProductsPath(productId)}/complex-rules/${ruleId}`, data);
  }

  /**
   * Deletees a single product complex rule
   *
   * @param productId A valid product ID
   * @param ruleId A valid complex rule ID
   * @returns Promise resolving to a 204 No Content response
   */
  delete(productId: number, ruleId: number): AxiosPromise<string> {
    return this.client.delete(`${getProductsPath(productId)}/complex-rules/${ruleId}`);
  }
}

export default ProductComplexRules;
