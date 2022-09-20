import { operations } from '../../../../generate/generated/customers.v3';
import { AxiosPromise } from '../../../../types';

export interface Customer {
  ListFilters: operations['CustomersGet']['parameters']['query'];
  ListResponse: AxiosPromise<operations['CustomersGet']['responses']['200']['content']['application/json']>;
  CreateRequest: operations['CustomersPost']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<operations['CustomersPost']['responses']['200']['content']['application/json']>;
  UpdateRequest: operations['CustomersPut']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<operations['CustomersPut']['responses']['200']['content']['application/json']>;
  DeleteRequest: operations['CustomersDelete']['parameters']['query'];
}

export interface CustomerAddress {
  ListFilters: operations['CustomersAddressesGet']['parameters']['query'];
  ListResponse: AxiosPromise<operations['CustomersAddressesGet']['responses']['200']['content']['application/json']>;
  CreateRequest: operations['CustomersAddressesPost']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<operations['CustomersAddressesPost']['responses']['200']['content']['application/json']>;
  UpdateRequest: operations['CustomersAddressesPut']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<operations['CustomersAddressesPut']['responses']['200']['content']['application/json']>;
  DeleteRequest: operations['CustomersAddressesDelete']['parameters']['query'];
}

export interface CustomerAttribute {
  ListFilters: operations['CustomersAttributesGet']['parameters']['query'];
  ListResponse: AxiosPromise<operations['CustomersAttributesGet']['responses']['200']['content']['application/json']>;
  CreateRequest: operations['CustomersAttributesPost']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<
    operations['CustomersAttributesPost']['responses']['200']['content']['application/json']
  >;
  UpdateRequest: operations['CustomersAttributesPut']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<operations['CustomersAttributesPut']['responses']['200']['content']['application/json']>;
  DeleteRequest: operations['CustomersAttributesDelete']['parameters']['query'];
}

export interface CustomerAttributeValue {
  ListFilters: operations['CustomersAttributeValuesGet']['parameters']['query'];
  ListResponse: AxiosPromise<
    operations['CustomersAttributeValuesGet']['responses']['200']['content']['application/json']
  >;
  UpdateRequest: operations['CustomersAttributeValuesPut']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<
    operations['CustomersAttributeValuesPut']['responses']['200']['content']['application/json']
  >;
  DeleteRequest: operations['CustomersAttributeValuesDelete']['parameters']['query'];
}

export interface CustomerFormFieldValue {
  ListFilters: operations['CustomerFormFieldsGet']['parameters']['query'];
  ListResponse: AxiosPromise<operations['CustomerFormFieldsGet']['responses']['200']['content']['application/json']>;
  UpdateRequest: operations['CustomerFormFieldValuePUT']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<
    operations['CustomerFormFieldValuePUT']['responses']['200']['content']['application/json']
  >;
}

export interface CustomerConsent {
  GetResponse: AxiosPromise<
    operations['CustomersConsentByCustomerId_PUT']['responses']['200']['content']['application/json']
  >;
  UpdateRequest: operations['CustomersConsentByCustomerId_PUT']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<
    operations['CustomersConsentByCustomerId_PUT']['responses']['200']['content']['application/json']
  >;
}

export interface CustomerInstrument {
  ListResponse: AxiosPromise<operations['liststoredinstruments']['responses']['200']['content']['application/json']>;
}
