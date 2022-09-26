import { AxiosInstance } from 'axios';

import { AxiosPromise } from '../../../../types';

import type { Customer } from './types';

const customersPath = '/v3/customers';

/**
 * Builds a base Customers API path given an optional customer ID
 *
 * @param id Optional filter parameters
 * @returns Returns either '/v3/customers' or '/v3/customers/:customerId
 */

export const getCustomersPath = (id?: number): string => `${customersPath}/${id ?? ''}`;

class Customers {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Gets a list of all customers in a store
   *
   * @param params Query parameters used to filter the response
   * @returns Promise resolving to a list of categories
   */
  list(params?: Customer['ListFilters']): Customer['ListResponse'] {
    return this.client.get(getCustomersPath(), {
      params,
    });
  }

  /**
   * Creates a new customer
   *
   * @param data Data used to create the customer
   * @returns Promise resolving to a newly created customer
   */
  create(data: Customer['CreateRequest']): Customer['CreateResponse'] {
    return this.client.post(getCustomersPath(), data);
  }

  /**
   * Updates customers.
   *
   * @data Data used to update customers
   * @returns Promise resolving to the updated customers
   */
  update(data: Customer['UpdateRequest']): Customer['UpdateResponse'] {
    return this.client.put(getCustomersPath(), data);
  }

  /**
   * Deletes a  single customer by ID
   *
   * @param params Query params used to delete customer
   * @returns Promise resolving to a 204 No Content response
   */
  delete(params: Customer['DeleteRequest']): AxiosPromise<string> {
    return this.client.delete(getCustomersPath(), {
      params,
    });
  }
}

export default Customers;
