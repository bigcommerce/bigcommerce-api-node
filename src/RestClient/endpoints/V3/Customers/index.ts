import { AxiosInstance } from 'axios';

import CustomerAddresses from './CustomerAddresses';
import CustomerAttributes from './CustomerAttributes';
import CustomerAttributesValues from './CustomerAttributeValues';
import CustomersConsent from './CustomerConsent';
import CustomerFormFieldValues from './CustomerFormFieldValues';
import Customers from './Customers';
import CustomerStoredInstruments from './CustomerStoredInstruments';

class CustomersV3 {
  public customers: Customers;
  public customerAddresses: CustomerAddresses;
  public customerAttributes: CustomerAttributes;
  public customerAttributesValues: CustomerAttributesValues;
  public customerFormFieldsValues: CustomerFormFieldValues;
  public customerConsent: CustomersConsent;
  public customerStoredInstruments: CustomerStoredInstruments;

  constructor(client: AxiosInstance) {
    this.customers = new Customers(client);
    this.customerAddresses = new CustomerAddresses(client);
    this.customerAttributes = new CustomerAttributes(client);
    this.customerAttributesValues = new CustomerAttributesValues(client);
    this.customerFormFieldsValues = new CustomerFormFieldValues(client);
    this.customerConsent = new CustomersConsent(client);
    this.customerStoredInstruments = new CustomerStoredInstruments(client);
  }
}

export default CustomersV3;
