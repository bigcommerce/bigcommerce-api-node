import { AxiosInstance } from 'axios';

import { getCustomersPath } from './Customers';
import { CustomerFormFieldValue } from './types';

class CustomerFormFieldValues {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Returns a list of form field values for the customer or customer address object
   *
   * @param params Query parameters used to filter response
   * @return Promise resolving to a list of form field values
   */
  list(params?: CustomerFormFieldValue['ListFilters']): CustomerFormFieldValue['ListResponse'] {
    return this.client.get(`${getCustomersPath()}/form-field-values`, {
      params,
    });
  }

  /**
   * Updates form field values on the customer or customer address objects
   *
   * @data Data used to update the attribute values on the customer
   * @returns Promise resolving to the updated attribute values on the customer
   */
  update(data: CustomerFormFieldValue['UpdateRequest']): CustomerFormFieldValue['UpdateResponse'] {
    return this.client.put(`${getCustomersPath()}/form-field-values`, data);
  }
}

export default CustomerFormFieldValues;
