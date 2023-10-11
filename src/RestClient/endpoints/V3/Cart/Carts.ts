import { AxiosInstance } from 'axios';

import { AxiosPromise } from '../../../../types';

import type { Cart } from './types';

const cartsPath = '/v3/carts';

/**
 * Builds a base Carts API path given an optional cart ID
 *
 * @param id Optional filter parameters
 * @returns Returns either '/v3/carts' or '/v3/carts/:cartId
 */

export const getCartsPath = (id?: string): string => (id ? `${cartsPath}/${id}` : cartsPath);

class Carts {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Creates a new cart
   *
   * @param data Data used to create the cart
   * @returns Promise resolving to a newly created cart
   */
  create(data: Cart['CreateRequest']): Cart['CreateResponse'] {
    return this.client.post(getCartsPath(), data);
  }

  /**
   * Gets a single cart by ID
   *
   * @param id The cart ID
   * @param params Query params used to get cart
   * @returns Promise resolving to a cart
   */
  get(id: string, params?: Cart['GetRequest']): Cart['GetResponse'] {
    return this.client.get(getCartsPath(id), {
      params,
    });
  }

  /**
   * Deletes a  single cart by ID
   *
   * @param id The cart ID
   * @param params Query params used to delete cart
   * @returns Promise resolving to a 204 No Content response
   */
  delete(id: string, params?: Cart['DeleteRequest']): AxiosPromise<string> {
    return this.client.delete(getCartsPath(id), {
      params,
    });
  }
}

export default Carts;
