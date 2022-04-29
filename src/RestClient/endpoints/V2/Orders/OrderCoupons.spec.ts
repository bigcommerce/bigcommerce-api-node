import mockAxios from 'jest-mock-axios';

import { paginateById } from '../../../../utils/paginate';

import OrderCoupons from './OrderCoupons';

jest.mock('../../../../utils/paginate');

const mockClient = mockAxios.create();

describe('OrderCoupons', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  describe('OrderCoupons REST Methods', () => {
    // @ts-expect-error testing ordersV2 constructor
    const orderCoupons = new OrderCoupons(mockClient);
    const thenFn = jest.fn();
    const catchFn = jest.fn();

    describe('list', () => {
      it('should perform a get request to the order coupons endpoint without parameters', () => {
        const orderId = 100;

        void orderCoupons.list(orderId);

        expect(mockClient.get).toHaveBeenCalledWith(`/v2/orders/${orderId}/coupons`, { params: undefined });
      });

      it('should perform a get request to the order coupons endpoint with parameters', () => {
        const orderId = 100;
        const filters = { limit: 5 };

        void orderCoupons.list(orderId, filters);

        expect(mockClient.get).toHaveBeenCalledWith(`/v2/orders/${orderId}/coupons`, { params: filters });
      });

      it('should return a promise that resolves to the response data for order coupons', () => {
        const orderId = 100;

        orderCoupons.list(orderId).then(thenFn).catch(catchFn);

        const response = {
          config: {},
          headers: {},
          status: 200,
          statusText: 'OK',
          data: [{ id: 150, type: 0 }],
        };

        mockClient.mockResponse(response);

        expect(thenFn).toHaveBeenCalledWith(response);

        expect(catchFn).not.toHaveBeenCalled();
      });
    });

    describe('listAll', () => {
      it('should call paginateById with the provided order id', () => {
        const orderId = 100;

        orderCoupons.listAll(orderId);

        expect(paginateById).toHaveBeenCalledTimes(1);
      });
    });
  });
});
