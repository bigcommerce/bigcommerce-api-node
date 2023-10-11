import { AxiosInstance } from 'axios';

import { AxiosPromise } from '../../../../types';

import { getCartsPath } from './Carts';
import type { CartLineItem } from './types';

const cartLineItemsPath = 'items';

const getItemPath = (itemId?: string): string => (itemId ? `${cartLineItemsPath}/${itemId}` : cartLineItemsPath);
/**
 * Builds a base CartLineItems API path given an optional cartLineItem ID
 *
 * @param cartId The cart ID
 * @param id Optional filter parameters
 * @returns Returns either '/v3/cart/:cartId/items' or '/v3/cart/:cartId/items/:itemId
 */
export const getCartLineItemsPath = (cartId: string, id?: string): string =>
  `${getCartsPath(cartId)}/${getItemPath(id)}`;

class CartLineItems {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Creates a new cartLineItem
   *
   * @param cartId The cart ID
   * @param data Data used to create the cartLineItem
   * @returns Promise resolving to a newly created cartLineItem
   */
  create(cartId: string, data: CartLineItem['CreateRequest']): CartLineItem['CreateResponse'] {
    return this.client.post(getCartLineItemsPath(cartId), data);
  }

  /**
   * Updates an existing cartLineItem
   *
   * @param cartId The cart ID
   * @param id The cartLineItem ID
   * @param data Data used to update the cartLineItem
   * @returns Promise resolving to an updated cartLineItem
   */
  update(cartId: string, id: string, data: CartLineItem['UpdateRequest']): CartLineItem['UpdateResponse'] {
    return this.client.put(getCartLineItemsPath(cartId, id), data);
  }

  /**
   * Deletes a single cartLineItem by ID
   *
   * @param cartId The cart ID
   * @param id The cartLineItem ID
   * @param params Query params used to delete cartLineItem
   * @returns Promise resolving to a 204 No Content response
   */
  delete(cartId: string, id: string, params?: CartLineItem['DeleteRequest']): AxiosPromise<string> {
    return this.client.delete(getCartLineItemsPath(cartId, id), {
      params,
    });
  }
}

export default CartLineItems;
