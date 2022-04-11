import mockAxios from 'jest-mock-axios';

import { paginateById } from '../../../../utils/paginate';

import OrderMessages from './OrderMessages';

jest.mock('../../../../utils/paginate');

const mockClient = mockAxios.create();

describe('OrderMessages', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  describe('OrderMessages REST Methods', () => {
    // @ts-expect-error testing ordersV2 constructor
    const orderMessages = new OrderMessages(mockClient);
    const thenFn = jest.fn();
    const catchFn = jest.fn();

    describe('list', () => {
      it('should perform a get request to the order messages endpoint without parameters', () => {
        const orderId = 100;

        void orderMessages.list(orderId);

        expect(mockClient.get).toHaveBeenCalledWith(`/v2/orders/${orderId}/messages`, { params: undefined });
      });

      it('should perform a get request to the order messages endpoint without parameters', () => {
        const orderId = 100;
        const filters = { limit: 5 };

        void orderMessages.list(orderId, filters);

        expect(mockClient.get).toHaveBeenCalledWith(`/v2/orders/${orderId}/messages`, { params: filters });
      });

      it('should return a promise that resolves to the response data for order messages', () => {
        const orderId = 100;
        const messageId = 150;

        orderMessages.list(orderId).then(thenFn).catch(catchFn);

        const response = {
          config: {},
          headers: {},
          status: 200,
          statusText: 'OK',
          data: [{ id: messageId }],
        };

        mockClient.mockResponse(response);

        expect(thenFn).toHaveBeenCalledWith(response);

        expect(catchFn).not.toHaveBeenCalled();
      });
    });

    describe('listAll', () => {
      it('should call paginateById with the provided order id', () => {
        const orderId = 100;

        orderMessages.listAll(orderId);

        expect(paginateById).toHaveBeenCalledTimes(1);
      });
    });
  });
});
