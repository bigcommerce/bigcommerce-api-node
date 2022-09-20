import { AxiosInstance } from 'axios';

import { AxiosPromise } from '../../../../types';

import { getCustomersPath } from './Customers';
import type { CustomerAttribute } from './types';

class CustomerAttributes {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Returns a list of customer attributes
   *
   * @param params Query parameters used to filter response
   * @return Promise resolving to a list of customer attributes
   */
  list(params?: CustomerAttribute['ListFilters']): CustomerAttribute['ListResponse'] {
    return this.client.get(`${getCustomersPath()}/attributes`, {
      params,
    });
  }

  /**
   * Creates a customer attribute
   *
   * @param data Data used to create the customer attribute
   * @returns Promise resolving to a newly created customer attribute
   */
  create(data: CustomerAttribute['CreateRequest']): CustomerAttribute['CreateResponse'] {
    return this.client.post(`${getCustomersPath()}/attributes`, data);
  }

  /**
   * Updates a customer attribute
   *
   * @data Data used to update a customer attribute
   * @returns Promise resolving to the updated customer attribute
   */
  update(data: CustomerAttribute['UpdateRequest']): CustomerAttribute['UpdateResponse'] {
    return this.client.put(`${getCustomersPath()}/attributes`, data);
  }

  /**
   * Deletes a single customer attribute
   *
   * @param params Query params used to delete a customer attribute
   * @returns Promise resolving to a 204 No Content Response
   */
  delete(params: CustomerAttribute['DeleteRequest']): AxiosPromise<string> {
    return this.client.delete(`${getCustomersPath()}/attributes`, {
      params,
    });
  }
}

export default CustomerAttributes;
