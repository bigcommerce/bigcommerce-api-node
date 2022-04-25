import mockAxios from 'jest-mock-axios';

import { paginateById } from '../../../../utils/paginate';

import OrderTaxes from './OrderTaxes';

jest.mock('../../../../utils/paginate');

const mockClient = mockAxios.create();

describe('OrderTaxes', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  describe('OrderTaxes REST Methods', () => {
    // @ts-expect-error testing ordersV2 constructor
    const orderTaxes = new OrderTaxes(mockClient);
    const thenFn = jest.fn();
    const catchFn = jest.fn();

    describe('list', () => {
      it('should perform a get request to the order taxes endpoint without parameters', () => {
        const orderId = 100;

        void orderTaxes.list(orderId);

        expect(mockClient.get).toHaveBeenCalledWith(`/v2/orders/${orderId}/taxes`, { params: undefined });
      });

      it('should perform a get request to the order taxes endpoint with parameters', () => {
        const orderId = 100;
        const filters = { limit: 5 };

        void orderTaxes.list(orderId, filters);

        expect(mockClient.get).toHaveBeenCalledWith(`/v2/orders/${orderId}/taxes`, { params: filters });
      });

      it('should return a promise that resolves to the response data for order taxes', () => {
        const orderId = 100;
        const taxObjectId = 150;
        const taxClassId = 1;

        orderTaxes.list(orderId).then(thenFn).catch(catchFn);

        const response = {
          config: {},
          headers: {},
          status: 200,
          statusText: 'OK',
          data: [{ id: taxObjectId, tax_class_id: taxClassId }],
        };

        mockClient.mockResponse(response);

        expect(thenFn).toHaveBeenCalledWith(response);

        expect(catchFn).not.toHaveBeenCalled();
      });
    });

    describe('listAll', () => {
      it('should call paginateById with the provided order id', () => {
        const orderId = 100;

        orderTaxes.listAll(orderId);

        expect(paginateById).toHaveBeenCalledTimes(1);
      });
    });
  });
});
