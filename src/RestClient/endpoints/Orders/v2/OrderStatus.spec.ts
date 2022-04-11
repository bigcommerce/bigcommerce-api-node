import mockAxios from '../../../../__mocks__/axios';

import OrderStatus from './OrderStatus';

const mockClient = mockAxios.create();

describe('OrderStatus', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  describe('OrderStatus REST Methods', () => {
    // @ts-expect-error testing ordersV2 constructor
    const orderStatus = new OrderStatus(mockClient);
    const thenFn = jest.fn();
    const catchFn = jest.fn();

    describe('list', () => {
      it('should perform a get request to the order status endpoint', () => {
        void orderStatus.list();

        expect(mockClient.get).toHaveBeenCalledWith('/v2/order_statuses/');
      });

      it('should return a promise that resolves to the response data for store order statuses', () => {
        const orderStatusId = 0;

        orderStatus.list().then(thenFn).catch(catchFn);

        const response = {
          config: {},
          headers: {},
          status: 200,
          statusText: 'OK',
          data: [{ id: orderStatusId }],
        };

        mockClient.mockResponse(response);

        expect(thenFn).toHaveBeenCalledWith(response);

        expect(catchFn).not.toHaveBeenCalled();
      });
    });

    describe('get', () => {
      it('should perform a get request to the order statuses endpoint', () => {
        const orderStatusId = 0;

        void orderStatus.get(orderStatusId);

        expect(mockClient.get).toHaveBeenCalledWith(`/v2/order_statuses/${orderStatusId}`);
      });

      it('should return a promise that resolves to the response data for a single order status in a store', () => {
        const orderStatusId = 0;

        orderStatus.get(orderStatusId).then(thenFn).catch(catchFn);

        const response = {
          config: {},
          headers: {},
          status: 200,
          statusText: 'OK',
          data: { id: orderStatusId },
        };

        mockClient.mockResponse(response);

        expect(thenFn).toHaveBeenCalledWith(response);

        expect(catchFn).not.toHaveBeenCalled();
      });
    });
  });
});
