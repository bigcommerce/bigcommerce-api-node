import { components, operations } from '../../../../generate/generated/orders.v2.oas2';
import { AxiosPromise } from '../../../../types';

export interface Orders {
  OrderResponse: components['schemas']['order_Resp'];
  UpdateRequest: components['schemas']['order_Put'];
  CreateRequest: components['schemas']['order_Post'];
  ListFilters: operations['getAllOrders']['parameters']['query'];
  CountResponse: AxiosPromise<components['schemas']['ordersCount_Full']>;
  GetResponse: AxiosPromise<Orders['OrderResponse']>;
  UpdateResponse: AxiosPromise<Orders['OrderResponse']>;
  CreateResponse: AxiosPromise<Orders['OrderResponse']>;
  ListResponse: AxiosPromise<Orders['OrderResponse'][]>;
  ListAllResponse: AsyncGenerator<Orders['OrderResponse'], void, unknown>;
}

export interface Coupons {
  OrderCouponsBase: components['schemas']['orderCoupons_Base'];
  ListFilters: operations['getAllOrderCoupons']['parameters']['query'];
  ListResponse: AxiosPromise<Coupons['OrderCouponsBase'][]>;
  ListAllResponse: AsyncGenerator<Coupons['OrderCouponsBase'], void, unknown>;
}

export interface Messages {
  OrderMessage: {
    id?: number;
    order_id?: number;
    staff_id?: number;
    customer_id?: number;
    type?: string;
    subject?: string;
    message?: string;
    status?: string;
    is_flagged?: boolean;
    date_created?: string;
    customer?: { [key: string]: unknown };
  };
  ListFilters: operations['getOrderMessages']['parameters']['query'];
  ListResponse: AxiosPromise<components['schemas']['orderMessages']>;
  ListAllResponse: AsyncGenerator<Messages['OrderMessage'], void, unknown>;
}

export interface Products {
  OrderProductsBase: components['schemas']['orderProducts'];
  ListFilters: operations['getAllOrderProducts']['parameters']['query'];
  GetResponse: AxiosPromise<Products['OrderProductsBase']>;
  ListResponse: AxiosPromise<Products['OrderProductsBase'][]>;
  ListAllResponse: AsyncGenerator<Products['OrderProductsBase'], void, unknown>;
}

export interface Shipments {
  UpdateRequest: components['schemas']['orderShipment_Put'];
  OrderShipmentBase: components['schemas']['orderShipment'];
  CreateRequest: components['schemas']['orderShipment_Post'];
  CountResponse: AxiosPromise<components['schemas']['orderCount']>;
  ListFilters: operations['getAllOrderShipments']['parameters']['query'];

  GetResponse: AxiosPromise<Shipments['OrderShipmentBase']>;
  ListResponse: AxiosPromise<Shipments['OrderShipmentBase'][]>;
  CreateResponse: AxiosPromise<Shipments['OrderShipmentBase']>;
  UpdateResponse: AxiosPromise<Shipments['OrderShipmentBase']>;
  ListAllResponse: AsyncGenerator<Shipments['OrderShipmentBase'], void, unknown>;
}

export interface Addresses {
  UpdateRequest: components['schemas']['shippingAddress_Base'];
  OrderShippingAddressBase: components['schemas']['orderShippingAddress'];
  ListFilters: operations['getAllShippingAddresses']['parameters']['query'];

  GetResponse: AxiosPromise<Addresses['OrderShippingAddressBase']>;
  ListResponse: AxiosPromise<Addresses['OrderShippingAddressBase'][]>;
  UpdateResponse: AxiosPromise<Addresses['OrderShippingAddressBase']>;
  ListAllResponse: AsyncGenerator<Addresses['OrderShippingAddressBase'], void, unknown>;
}

export interface Quotes {
  ListResponse: AxiosPromise<components['schemas']['shippingQuotes_Base']>;
}

export interface Status {
  GetResponse: AxiosPromise<components['schemas']['orderStatus_Base']>;
  ListResponse: AxiosPromise<components['schemas']['orderStatus_Base'][]>;
}

export interface Taxes {
  ListFilters: operations['getOrderTaxes']['parameters']['query'];
  ListResponse: AxiosPromise<components['schemas']['orderTaxes_Base'][]>;
  ListAllResponse: AsyncGenerator<components['schemas']['orderTaxes_Base'], void, unknown>;
}
