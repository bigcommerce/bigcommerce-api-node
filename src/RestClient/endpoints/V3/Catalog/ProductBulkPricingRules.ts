import { AxiosInstance } from 'axios';

import { AxiosPromise } from '../../../../types';

import { getProductsPath } from './Products';
import type { ProductBulkPricingRule } from './types';

class ProductBulkPricingRules {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Returns a list of bulk pricing rules for a product
   *
   * @param id A valid product ID
   * @param params Query parameters used to filter the response
   * @returns Promise resolving to a list of bulk pricing rules for a product
   */
  list(id: number, params?: ProductBulkPricingRule['ListFilters']): ProductBulkPricingRule['ListResponse'] {
    return this.client.get(`${getProductsPath(id)}/bulk-pricing-rules`, { params });
  }

  /**
   * Creates a new bulk pricing rule for a product
   *
   * @param id A valid product ID
   * @param data Data used to create the bulk pricing rule
   * @param params Query parameters used to filter the response
   * @returns Promise resolving to the newly created bulk pricing rule
   */
  create(
    id: number,
    data: ProductBulkPricingRule['CreateRequest'],
    params?: ProductBulkPricingRule['CreateFilters'],
  ): ProductBulkPricingRule['CreateResponse'] {
    return this.client.post(`${getProductsPath(id)}/bulk-pricing-rules`, data, { params });
  }

  /**
   * Gets a single bulk pricing rule for a product
   *
   * @param productId A valid product ID
   * @param ruleId A valid bulk pricing rule ID
   * @param params Query parameters used to filter the response
   * @returns Promise resolving to a single bulk pricing rule
   */
  get(
    productId: number,
    ruleId: number,
    params?: ProductBulkPricingRule['GetFilters'],
  ): ProductBulkPricingRule['GetResponse'] {
    return this.client.get(`${getProductsPath(productId)}/bulk-pricing-rules/${ruleId}`, { params });
  }

  /**
   * Updates a single bulk pricing rule for a product
   *
   * @param productId A valid product ID
   * @param ruleId A valid bulk pricing rule ID
   * @param data Data used to update the bulk pricing rule
   * @returns Promise resolving to the updated bulk pricing rule
   */
  update(
    productId: number,
    ruleId: number,
    data: ProductBulkPricingRule['UpdateRequest'],
  ): ProductBulkPricingRule['UpdateResponse'] {
    return this.client.put(`${getProductsPath(productId)}/bulk-pricing-rules/${ruleId}`, data);
  }

  /**
   * Deletes a single bulk pricing rule for a product
   *
   * @param productId A valid product ID
   * @param ruleId A valid bulk pricing rule ID
   * @returns Promise resolving to a 204 No Content response
   */
  delete(productId: number, ruleId: number): AxiosPromise<string> {
    return this.client.delete(`${getProductsPath(productId)}/bulk-pricing-rules/${ruleId}`);
  }
}

export default ProductBulkPricingRules;
