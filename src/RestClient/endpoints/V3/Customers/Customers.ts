import { AxiosInstance } from 'axios';
import type { ICustomers } from './types';
import { AxiosPromise } from '../../../../types';

const customersPath = '/v3/customers';

/**
 * Builds a base Customers API path given an optional customer ID
 *
 * @param id Optional filter parameters
 * @returns Returns either '/v3/customers' or '/v3/customers/:customerId
 */

export const getCustomersPath = (id?: any): string => `${customersPath}${id ? `/${id}}` : ''}`;

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

  list(params?: ICustomers['ListFilters']): ICustomers['ListResponse'] {
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
  create(data: ICustomers['CreateRequest']): ICustomers['CreateResponse'] {
    return this.client.post(getCustomersPath(), data);
  }

  /**
   * Updates customers.
   *
   * @data Data used to update customers
   * @returns Promise resolving to the updated customers
   */

  update(data: ICustomers['UpdateRequest']): ICustomers['UpdateResponse'] {
    return this.client.put(getCustomersPath(), data);
  }

  /**
   * Deletes a  single customer by ID
   *
   * @param params Query params used to delete customer
   * @returns Promise resolving to a 204 No Content response
   */

  delete(params: ICustomers['DeleteRequest']): AxiosPromise<string> {
    return this.client.delete(getCustomersPath(), {
      params,
    });
  }
}

export default Customers;
