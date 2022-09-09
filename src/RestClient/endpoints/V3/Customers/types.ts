import { operations } from '../../../../generate/generated/customers.v3';
import { AxiosPromise } from '../../../../types';

export interface ICustomers {
  ListFilters: AxiosPromise<operations['CustomersGet']['parameters']['query']>;
  ListResponse: AxiosPromise<operations['CustomersGet']['responses']['200']['content']['application/json']>;
  CreateRequest: operations['CustomersPost']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<operations['CustomersPost']['responses']['200']['content']['application/json']>;
  UpdateRequest: operations['CustomersPut']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<operations['CustomersPut']['responses']['200']['content']['application/json']>;
  DeleteRequest: operations['CustomersDelete']['parameters']['query'];
}