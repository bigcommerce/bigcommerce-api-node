import { AxiosInstance } from 'axios';

import { getCustomersPath } from './Customers';
import { CustomerConsent } from './types';

class CustomersConsent {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Gets the status of a single customer's consent
   *
   * @param customerId A valid Customer ID
   * @returns Promise resolving to single customer consent status
   */
  get(customerId: string): CustomerConsent['GetResponse'] {
    return this.client.get(`${getCustomersPath(customerId)}/consent`);
  }

  /**
   * Updates the status of a customer's consent
   * @param customerId A valid Customer ID
   * @data Data used to udpate a customer's consent
   * @returns Promise resolving to the updated customer consent
   */
  update(customerId: string, data: CustomerConsent['UpdateRequest']): CustomerConsent['UpdateResponse'] {
    return this.client.put(`${getCustomersPath(customerId)}/consent`, data);
  }
}

export default CustomersConsent;
