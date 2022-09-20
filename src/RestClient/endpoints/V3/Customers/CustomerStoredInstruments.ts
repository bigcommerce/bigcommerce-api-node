import { AxiosInstance } from 'axios';

import { getCustomersPath } from './Customers';
import { CustomerInstrument } from './types';

class CustomerStoredInstruments {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Returns a list of all available store instruments for a customer
   *
   * @customerId A valid customer id
   * @return Promise resolving to a list of all available store instruments
   */
  list(customerId: string): CustomerInstrument['ListResponse'] {
    return this.client.get(`${getCustomersPath(customerId)}/stored-instruments`);
  }
}

export default CustomerStoredInstruments;
