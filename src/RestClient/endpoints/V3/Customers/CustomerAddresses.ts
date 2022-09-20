import { AxiosInstance } from 'axios';

import { AxiosPromise } from '../../../../types';

import { getCustomersPath } from './Customers';
import type { CustomerAddress } from './types';

class CustomerAddresses {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Returns a list of customer addresses
   *
   * @param params Query paramaters used to filter response
   * @returns Promise resolving to a list of customer addresses
   */
  list(params?: CustomerAddress['ListFilters']): CustomerAddress['ListResponse'] {
    return this.client.get(`${getCustomersPath()}/addresses`, {
      params,
    });
  }

  /**
   * Creates a customer address
   *
   * @param data Data used to create the customer address
   * @returns Promise resolving to a newly created customer address
   */
  create(data: CustomerAddress['CreateRequest']): CustomerAddress['CreateResponse'] {
    return this.client.post(`${getCustomersPath()}/addresses`, data);
  }

  /**
   * Updates a customer address
   *
   * @data Data used to update a customer address
   * @returns Promise resolving to the updated customer address
   */
  update(data: CustomerAddress['UpdateRequest']): CustomerAddress['UpdateResponse'] {
    return this.client.put(`${getCustomersPath()}/addresses`, data);
  }

  /**
   * Deletes a single customer address
   *
   * @param params Query params used to a delete customer address
   * @returns Promise resolving to a 204 No Content Response
   */
  delete(params: CustomerAddress['DeleteRequest']): AxiosPromise<string> {
    return this.client.delete(`${getCustomersPath()}/addresses`, {
      params,
    });
  }
}

export default CustomerAddresses;
