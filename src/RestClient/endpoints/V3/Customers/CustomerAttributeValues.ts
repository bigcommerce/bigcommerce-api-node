import { AxiosInstance } from 'axios';

import { AxiosPromise } from '../../../../types';

import { getCustomersPath } from './Customers';
import { CustomerAttributeValue } from './types';

class CustomerAttributesValues {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Returns a list of customer attribute values
   *
   * @param params Query parameters used to filter response
   * @return Promise resolving to a list of customer attributes values
   */
  list(params?: CustomerAttributeValue['ListFilters']): CustomerAttributeValue['ListResponse'] {
    return this.client.get(`${getCustomersPath()}/attribute-values`, {
      params,
    });
  }

  /**
   * Upserts Customer Attribute Values
   *
   * @data Data used to update the attribute values on the customer
   * @returns Promise resolving to the updated attribute values on the customer
   */
  update(data: CustomerAttributeValue['UpdateRequest']): CustomerAttributeValue['UpdateResponse'] {
    return this.client.put(`${getCustomersPath()}/attribute-values`, data);
  }

  /**
   * Deletes a single customer attribute value
   *
   * @param params Data used to delete the attribute value from the customer
   * @returns Promise resolving to a 204 No Content Response
   */
  delete(params: CustomerAttributeValue['DeleteRequest']): AxiosPromise<string> {
    return this.client.delete(`${getCustomersPath()}/attribute-values`, {
      params,
    });
  }
}

export default CustomerAttributesValues;
