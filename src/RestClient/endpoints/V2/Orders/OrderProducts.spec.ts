import mockAxios from 'jest-mock-axios';

import { paginateById } from '../../../../utils/paginate';

import OrderProducts from './OrderProducts';

jest.mock('../../../../utils/paginate');

const mockClient = mockAxios.create();

describe('OrderProducts', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  describe('OrderProducts REST Methods', () => {
    // @ts-expect-error testing ordersV2 constructor
    const orderProducts = new OrderProducts(mockClient);
    const thenFn = jest.fn();
    const catchFn = jest.fn();

    describe('list', () => {
      it('should perform a get request to the order products endpoint without parameters', () => {
        const orderId = 100;

        void orderProducts.list(orderId);

        expect(mockClient.get).toHaveBeenCalledWith(`/v2/orders/${orderId}/products`, { params: undefined });
      });

      it('should perform a get request to the order products endpoint with parameters', () => {
        const orderId = 100;
        const filters = { limit: 5 };

        void orderProducts.list(orderId, filters);

        expect(mockClient.get).toHaveBeenCalledWith(`/v2/orders/${orderId}/products`, { params: filters });
      });

      it('should return a promise that resolves to the response data for order products', () => {
        const orderId = 100;
        const productId = 150;

        orderProducts.list(orderId).then(thenFn).catch(catchFn);

        const response = {
          config: {},
          headers: {},
          status: 200,
          statusText: 'OK',
          data: [{ id: productId }],
        };

        mockClient.mockResponse(response);

        expect(thenFn).toHaveBeenCalledWith(response);

        expect(catchFn).not.toHaveBeenCalled();
      });
    });

    describe('listAll', () => {
      it('should call paginateById with the provided order id', () => {
        const orderId = 100;

        orderProducts.listAll(orderId);

        expect(paginateById).toHaveBeenCalledTimes(1);
      });
    });

    describe('get', () => {
      it('should perform a get request to the order products endpoint', () => {
        const orderId = 100;
        const productId = 150;

        void orderProducts.get(orderId, productId);

        expect(mockClient.get).toHaveBeenCalledWith(`/v2/orders/${orderId}/products/${productId}`);
      });

      it('should return a promise that resolves to the response data for an order product', () => {
        const orderId = 100;
        const productId = 150;

        orderProducts.get(orderId, productId).then(thenFn).catch(catchFn);

        const response = {
          config: {},
          headers: {},
          status: 200,
          statusText: 'OK',
          data: { id: productId },
        };

        mockClient.mockResponse(response);

        expect(thenFn).toHaveBeenCalledWith(response);

        expect(catchFn).not.toHaveBeenCalled();
      });
    });
  });
});
