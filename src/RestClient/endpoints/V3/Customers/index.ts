import { AxiosInstance } from 'axios';
import Customers from './Customers';

class CustomersV3 {
  public customers: Customers;

  constructor(client: AxiosInstance) {
    this.customers = new Customers(client);
  }
}

export default CustomersV3;
