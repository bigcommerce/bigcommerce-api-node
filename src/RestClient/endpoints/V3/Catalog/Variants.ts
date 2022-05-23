import { AxiosInstance } from 'axios';

import type { Variant } from './types';

const VARIANTS_PATH = '/v3/catalog/variants';

/**
 * Builds a base Variants API path given an optional variant ID
 *
 * @param id Optional Variant ID
 * @returns Either '/v3/catalog/variants/:variantId' or '/v3/catalog/variants'
 */
export const getVariantsPath = (id?: number): string => `${VARIANTS_PATH}${id ? `/${id}` : ''}`;

class Variants {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  list(params?: Variant['ListFilters']): Variant['ListResponse'] {
    return this.client.get(getVariantsPath(), { params });
  }

  /**
   * Creates new product variants in batch
   *
   * @param data Data to create new variants
   * @returns Promise resolving to the newly created variants
   */
  updateBatch(data: Variant['UpdateBatchRequest']): Variant['UpdateBatchResponse'] {
    return this.client.put(getVariantsPath(), data);
  }
}

export default Variants;
