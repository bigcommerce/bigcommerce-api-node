import { AxiosInstance } from 'axios';

import {
  AxiosPromise,
  V2OrderCountResponse,
  V2OrderRequestBase,
  V2OrderResponseBase,
  V2OrdersListFilters,
  V2OrderUpdateRequest,
} from '../../../../types';
import { paginate } from '../../../../utils/paginate';

import OrderCoupons from './OrderCoupons';
import OrderMessages from './OrderMessages';
import OrderProducts from './OrderProducts';
import OrderShipments from './OrderShipments';
import OrderShippingAddresses from './OrderShippingAddresses';
import OrderShippingQuotes from './OrderShippingQuotes';
import OrderStatus from './OrderStatus';
import OrderTaxes from './OrderTaxes';

const ordersPath = '/v2/orders';

/**
 * Builds a base Orders API path given an optional order ID
 *
 * @param id Optional Order ID
 * @returns Either '/v2/orders/:orderId' or '/v2/orders'
 */
export const getOrdersPath = (id?: number): string => `${ordersPath}${id ? `/${id}` : ''}`;

class OrdersV2 {
  private client: AxiosInstance;

  public orderCoupons: OrderCoupons;
  public orderProducts: OrderProducts;
  public orderTaxes: OrderTaxes;
  public orderStatus: OrderStatus;
  public orderShipments: OrderShipments;
  public orderShippingAddresses: OrderShippingAddresses;
  public orderMessages: OrderMessages;
  public orderShippingQuotes: OrderShippingQuotes;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.orderCoupons = new OrderCoupons(client);
    this.orderProducts = new OrderProducts(client);
    this.orderTaxes = new OrderTaxes(client);
    this.orderStatus = new OrderStatus(client);
    this.orderShipments = new OrderShipments(client);
    this.orderShippingAddresses = new OrderShippingAddresses(client);
    this.orderMessages = new OrderMessages(client);
    this.orderShippingQuotes = new OrderShippingQuotes(client);
  }

  /**
   * Gets a single order by ID
   *
   * @param orderId A valid order ID
   * @returns Promise resolving to a response containing the order data
   */
  get(orderId: number): AxiosPromise<V2OrderResponseBase> {
    return this.client.get(getOrdersPath(orderId));
  }

  /**
   * Updates a single order by ID
   *
   * @param orderId A valid order ID
   * @param data The data to update on the order
   * @returns Promise resolving to a response containing the updated order data
   */
  update(orderId: number, data: V2OrderUpdateRequest): AxiosPromise<V2OrderResponseBase> {
    return this.client.put(getOrdersPath(orderId), data);
  }

  /**
   * Archives a single order by ID
   *
   * @param orderId A valid order ID
   * @returns Promise resolving to a '204 No Content' response if successful
   */
  archive(orderId: number): AxiosPromise<string> {
    return this.client.delete(getOrdersPath(orderId));
  }

  /**
   * Gets an array of orders in the store organized by order status
   *
   * @returns Promise resolving to a response containing the order count data
   */
  count(): AxiosPromise<V2OrderCountResponse> {
    return this.client.get(`${getOrdersPath()}/count`);
  }

  /**
   * Gets a list of orders in the store
   *
   * @param params Query parameters used to filter response
   * @returns Promise resolving to a response containing the list of orders
   */
  list(params?: V2OrdersListFilters): AxiosPromise<V2OrderResponseBase[]> {
    return this.client.get(getOrdersPath(), { params });
  }

  /**
   * Returns an iterator object allowing you to paginate through all orders in a store, one order at a time
   *
   * @example
   * for await (const order of bcRest.orders.listAll()) {
   *   console.log(order);
   * }
   *
   * @param params Query parameters used to filter response
   * @returns Promise resolving to an order list iterator object
   */
  listAll(params?: V2OrdersListFilters): AsyncGenerator<V2OrderResponseBase, void, unknown> {
    return paginate((args?: V2OrdersListFilters) => this.list(args), params);
  }

  /**
   * Creates a new order
   *
   * @param data Data used to create the order
   * @returns Promise resolving to a response containing the created order data
   */
  create(data: V2OrderRequestBase): AxiosPromise<V2OrderResponseBase> {
    return this.client.post(getOrdersPath(), data);
  }

  /**
   * Archives all orders in the store
   *
   * @returns Promise resolving to a '204 No Content' response if successful
   */
  archiveAll(): AxiosPromise<string> {
    return this.client.delete(getOrdersPath());
  }
}

export default OrdersV2;
