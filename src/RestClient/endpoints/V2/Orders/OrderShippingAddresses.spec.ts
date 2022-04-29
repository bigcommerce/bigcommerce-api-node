import mockAxios from 'jest-mock-axios';

import { paginateById } from '../../../../utils/paginate';

import OrderShippingAddresses from './OrderShippingAddresses';

jest.mock('../../../../utils/paginate');

const mockClient = mockAxios.create();

describe('OrderShippingAddresses', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  describe('OrderShippingAddresses REST Methods', () => {
    // @ts-expect-error testing ordersV2 constructor
    const orderShippingAddresses = new OrderShippingAddresses(mockClient);
    const thenFn = jest.fn();
    const catchFn = jest.fn();

    describe('list', () => {
      it('should perform a get request to the order shipping addresses endpoint without parameters', () => {
        const orderId = 100;

        void orderShippingAddresses.list(orderId);

        expect(mockClient.get).toHaveBeenCalledWith(`/v2/orders/${orderId}/shipping_addresses`, { params: undefined });
      });

      it('should perform a get request to the order shipping addresses endpoint with parameters', () => {
        const orderId = 100;
        const filters = { limit: 5 };

        void orderShippingAddresses.list(orderId, filters);

        expect(mockClient.get).toHaveBeenCalledWith(`/v2/orders/${orderId}/shipping_addresses`, { params: filters });
      });

      it('should return a promise that resolves to the response data for order shipping addresses', () => {
        const orderId = 100;
        const shippingAddressId = 150;

        orderShippingAddresses.list(orderId).then(thenFn).catch(catchFn);

        const response = {
          config: {},
          headers: {},
          status: 200,
          statusText: 'OK',
          data: [{ id: shippingAddressId }],
        };

        mockClient.mockResponse(response);

        expect(thenFn).toHaveBeenCalledWith(response);

        expect(catchFn).not.toHaveBeenCalled();
      });
    });

    describe('listAll', () => {
      it('should call paginateById with the provided order id', () => {
        const orderId = 100;

        orderShippingAddresses.listAll(orderId);

        expect(paginateById).toHaveBeenCalledTimes(1);
      });
    });

    describe('get', () => {
      it('should perform a get request to the order shipping address endpoint', () => {
        const orderId = 100;
        const shippingAddressId = 150;

        void orderShippingAddresses.get(orderId, shippingAddressId);

        expect(mockClient.get).toHaveBeenCalledWith(`/v2/orders/${orderId}/shipping_addresses/${shippingAddressId}`);
      });

      it('should return a promise that resolves to the response data for an order shipping address', () => {
        const orderId = 100;
        const shippingAddressId = 150;

        orderShippingAddresses.get(orderId, shippingAddressId).then(thenFn).catch(catchFn);

        const response = {
          config: {},
          headers: {},
          status: 200,
          statusText: 'OK',
          data: { id: shippingAddressId },
        };

        mockClient.mockResponse(response);

        expect(thenFn).toHaveBeenCalledWith(response);

        expect(catchFn).not.toHaveBeenCalled();
      });
    });

    describe('update', () => {
      it('should perform a put request to the order shipping address endpoint with user supplied data', () => {
        const orderId = 100;
        const shippingAddressId = 150;
        const data = {
          first_name: 'John Doe',
        };

        void orderShippingAddresses.update(orderId, shippingAddressId, data);

        expect(mockClient.put).toHaveBeenCalledWith(
          `/v2/orders/${orderId}/shipping_addresses/${shippingAddressId}`,
          data,
        );
      });

      it('should return a promise that resolves to the response data for an updated shipping address', () => {
        const orderId = 100;
        const shippingAddressId = 150;
        const data = {
          first_name: 'John Doe',
        };

        orderShippingAddresses.update(orderId, shippingAddressId, data).then(thenFn).catch(catchFn);

        const response = {
          config: {},
          headers: {},
          status: 200,
          statusText: 'OK',
          data: { id: shippingAddressId },
        };

        mockClient.mockResponse(response);

        expect(thenFn).toHaveBeenCalledWith(response);

        expect(catchFn).not.toHaveBeenCalled();
      });
    });
  });
});
