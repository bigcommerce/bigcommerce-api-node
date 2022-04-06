import { AxiosInstance } from 'axios';

import {
  AxiosPromise,
  V2OrderCountResponseBase,
  V2OrderFiltersBase,
  V2OrderShipmentsRequestBodyBase,
  V2OrderShipmentsResponseBase,
  V2OrderShipmentsUpdateRequest,
} from '../../../../types';
import { paginateById } from '../../../../utils/paginate';

import { getOrdersPath } from './index';

class OrderShipments {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Gets a list of all shipments on an order
   *
   * @param orderId A valid order ID
   * @param params Query parameters used to filter response
   * @returns Promise resolving to a response containing the collection of shipments
   */
  list(orderId: number, params?: V2OrderFiltersBase): AxiosPromise<V2OrderShipmentsResponseBase[]> {
    return this.client.get(`${getOrdersPath(orderId)}/shipments`, { params });
  }

  /**
   * Returns an iterator object allowing you to paginate through all shipments on an order, one shipment at a time
   *
   * @example
   * for await (const shipment of bcRest.orderShipments.listAll(orderId)) {
   *   console.log(shipment);
   * }
   *
   * @param params Query parameters used to filter response
   * @returns Promise resolving to an order shipment list iterator object
   */
  listAll(orderId: number, params?: V2OrderFiltersBase): AsyncGenerator<V2OrderShipmentsResponseBase, void, unknown> {
    return paginateById((id: number, args?: V2OrderFiltersBase) => this.list(id, args), orderId, params);
  }

  /**
   * Creates a single shipment on an order
   *
   * @param orderId A valid order ID
   * @param data The data to create the order shipment
   * @returns Promise resolving to a response containing the created shipment data
   */
  create(orderId: number, data: V2OrderShipmentsRequestBodyBase): AxiosPromise<V2OrderShipmentsResponseBase> {
    return this.client.post(`${getOrdersPath(orderId)}/shipments`, data);
  }

  /**
   * Deletes all shipments associated with an order
   *
   * @param orderId A valid order ID
   * @returns Promise resolving to a '204 No Content' response if successful
   */
  deleteAll(orderId: number): AxiosPromise<string> {
    return this.client.delete(`${getOrdersPath(orderId)}/shipments`);
  }

  /**
   * Gets a count of the number of shipments that have been made for a single order
   *
   * @param orderId A valid order ID
   * @returns Promise resolving to a response containing the shipment count response data for an order
   */
  count(orderId: number): AxiosPromise<V2OrderCountResponseBase> {
    return this.client.get(`${getOrdersPath(orderId)}/shipments/count`);
  }

  /**
   * Gets an order shipment by ID
   *
   * @param orderId A valid order ID
   * @param shipmentId A valid shipment ID
   * @returns Promise resolving to a response containing the shipment data
   */
  get(orderId: number, shipmentId: number): AxiosPromise<V2OrderShipmentsResponseBase> {
    return this.client.get(`${getOrdersPath(orderId)}/shipments/${shipmentId}`);
  }

  /**
   * Updates an existing shipment associated with an order
   *
   * @param orderId A valid order ID
   * @param shipmentId A valid shipment ID
   * @param data The data to update the order shipment
   * @returns Promise resolving to a response containing the updated shipment data
   */
  update(
    orderId: number,
    shipmentId: number,
    data: V2OrderShipmentsUpdateRequest,
  ): AxiosPromise<V2OrderShipmentsResponseBase> {
    return this.client.put(`${getOrdersPath(orderId)}/shipments/${shipmentId}`, data);
  }

  /**
   * Deletes a shipment associated with an order
   *
   * @param orderId A valid order ID
   * @param shipmentId A valid shipment ID
   * @returns Promise resolving to a '204 No Content' response if successful
   */
  delete(orderId: number, shipmentId: number): AxiosPromise<null> {
    return this.client.delete(`${getOrdersPath(orderId)}/shipments/${shipmentId}`);
  }
}

export default OrderShipments;
