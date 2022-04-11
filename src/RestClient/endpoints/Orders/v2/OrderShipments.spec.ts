import mockAxios from 'jest-mock-axios';

import { paginateById } from '../../../../utils/paginate';

import OrderShipments from './OrderShipments';

jest.mock('../../../../utils/paginate');

const mockClient = mockAxios.create();

describe('OrderShipments', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  describe('OrderShipments REST Methods', () => {
    // @ts-expect-error testing ordersV2 constructor
    const orderShipments = new OrderShipments(mockClient);
    const thenFn = jest.fn();
    const catchFn = jest.fn();

    describe('list', () => {
      it('should perform a get request to the order shipments endpoint without parameters', () => {
        const orderId = 100;

        void orderShipments.list(orderId);

        expect(mockClient.get).toHaveBeenCalledWith(`/v2/orders/${orderId}/shipments`, { params: undefined });
      });

      it('should perform a get request to the order shipments endpoint with parameters', () => {
        const orderId = 100;
        const filters = { limit: 5 };

        void orderShipments.list(orderId, filters);

        expect(mockClient.get).toHaveBeenCalledWith(`/v2/orders/${orderId}/shipments`, { params: filters });
      });

      it('should return a promise that resolves to the response data for order shipments', () => {
        const orderId = 100;
        const shipmentId = 150;

        orderShipments.list(orderId).then(thenFn).catch(catchFn);

        const response = {
          config: {},
          headers: {},
          status: 200,
          statusText: 'OK',
          data: [{ id: shipmentId }],
        };

        mockClient.mockResponse(response);

        expect(thenFn).toHaveBeenCalledWith(response);

        expect(catchFn).not.toHaveBeenCalled();
      });
    });

    describe('listAll', () => {
      it('should call paginateById with the provided order id', () => {
        const orderId = 100;

        orderShipments.listAll(orderId);

        expect(paginateById).toHaveBeenCalledTimes(1);
      });
    });

    describe('create', () => {
      it('should perform a post request to the order shipments endpoint with user supplied data', () => {
        const orderId = 100;
        const data = {
          order_address_id: 1,
          items: [
            {
              order_product_id: 1,
              quantity: 1,
            },
          ],
        };

        void orderShipments.create(orderId, data);

        expect(mockClient.post).toHaveBeenCalledWith(`/v2/orders/${orderId}/shipments`, data);
      });

      it('should return a promise that resolves to the response data for a new shipment', () => {
        const orderId = 100;
        const shipmentId = 150;
        const data = {
          order_address_id: 1,
          items: [
            {
              order_product_id: 1,
              quantity: 1,
            },
          ],
        };

        orderShipments.create(orderId, data).then(thenFn).catch(catchFn);

        const response = {
          config: {},
          headers: {},
          status: 200,
          statusText: 'OK',
          data: { id: shipmentId },
        };

        mockClient.mockResponse(response);

        expect(thenFn).toHaveBeenCalledWith(response);

        expect(catchFn).not.toHaveBeenCalled();
      });
    });

    describe('deleteAll', () => {
      it('should perform a delete request to the order shipments endpoint', () => {
        const orderId = 100;

        void orderShipments.deleteAll(orderId);

        expect(mockClient.delete).toHaveBeenCalledWith(`/v2/orders/${orderId}/shipments`);
      });

      it('should return a promise that resolves to a 204 No Content response', () => {
        const orderId = 100;

        orderShipments.deleteAll(orderId).then(thenFn).catch(catchFn);

        const response = {
          config: {},
          headers: {},
          status: 204,
          statusText: 'No Content',
          data: '',
        };

        mockClient.mockResponse(response);

        expect(thenFn).toHaveBeenCalledWith(response);

        expect(catchFn).not.toHaveBeenCalled();
      });
    });

    describe('count', () => {
      it('should perform a get request to the order shipments count endpoint', () => {
        const orderId = 100;

        void orderShipments.count(orderId);

        expect(mockClient.get).toHaveBeenCalledWith(`/v2/orders/${orderId}/shipments/count`);
      });

      it('should return a promise that resolves to the response data for a shipment count', () => {
        const orderId = 100;
        const numOrders = 150;

        orderShipments.count(orderId).then(thenFn).catch(catchFn);

        const response = {
          config: {},
          headers: {},
          status: 200,
          statusText: 'OK',
          data: { count: numOrders },
        };

        mockClient.mockResponse(response);

        expect(thenFn).toHaveBeenCalledWith(response);

        expect(catchFn).not.toHaveBeenCalled();
      });
    });

    describe('get', () => {
      it('should perform a get request to the order shipment endpoint', () => {
        const orderId = 100;
        const shipmentId = 150;

        void orderShipments.get(orderId, shipmentId);

        expect(mockClient.get).toHaveBeenCalledWith(`/v2/orders/${orderId}/shipments/${shipmentId}`);
      });

      it('should return a promise that resolves to the response data for a shipment', () => {
        const orderId = 100;
        const shipmentId = 150;

        orderShipments.get(orderId, shipmentId).then(thenFn).catch(catchFn);

        const response = {
          config: {},
          headers: {},
          status: 200,
          statusText: 'OK',
          data: { id: shipmentId },
        };

        mockClient.mockResponse(response);

        expect(thenFn).toHaveBeenCalledWith(response);

        expect(catchFn).not.toHaveBeenCalled();
      });
    });

    describe('update', () => {
      it('should perform a put request to the order shipment endpoint with user supplied data', () => {
        const orderId = 100;
        const shipmentId = 150;
        const data = { tracking_number: '12345' };

        void orderShipments.update(orderId, shipmentId, data);

        expect(mockClient.put).toHaveBeenCalledWith(`/v2/orders/${orderId}/shipments/${shipmentId}`, data);
      });

      it('should return a promise that resolves to the response data for an updated shipment', () => {
        const orderId = 100;
        const shipmentId = 150;
        const data = { tracking_number: '12345' };

        orderShipments.update(orderId, shipmentId, data).then(thenFn).catch(catchFn);

        const response = {
          config: {},
          headers: {},
          status: 200,
          statusText: 'OK',
          data: { id: shipmentId },
        };

        mockClient.mockResponse(response);

        expect(thenFn).toHaveBeenCalledWith(response);

        expect(catchFn).not.toHaveBeenCalled();
      });
    });

    describe('delete', () => {
      it('should perform a delete request to the order shipment endpoint', () => {
        const orderId = 100;
        const shipmentId = 150;

        void orderShipments.delete(orderId, shipmentId);

        expect(mockClient.delete).toHaveBeenCalledWith(`/v2/orders/${orderId}/shipments/${shipmentId}`);
      });

      it('should return a promise that resolves to a 204 No Content response', () => {
        const orderId = 100;
        const shipmentId = 150;

        orderShipments.delete(orderId, shipmentId).then(thenFn).catch(catchFn);

        const response = {
          config: {},
          headers: {},
          status: 204,
          statusText: 'No Content',
          data: '',
        };

        mockClient.mockResponse(response);

        expect(thenFn).toHaveBeenCalledWith(response);

        expect(catchFn).not.toHaveBeenCalled();
      });
    });
  });
});
