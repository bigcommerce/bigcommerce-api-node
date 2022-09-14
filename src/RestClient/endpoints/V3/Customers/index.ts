import { AxiosInstance } from 'axios';
import Customers from './Customers';
import CustomerAddresses from './CustomerAddresses';

class CustomersV3 {
  public customers: Customers;
  public customerAddresses : CustomerAddresses;

  constructor(client: AxiosInstance) {
    this.customers = new Customers(client);
    this.customerAddresses = new CustomerAddresses(client);
  }
}

export default CustomersV3;
