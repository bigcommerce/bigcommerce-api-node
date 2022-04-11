import mockAxios from 'jest-mock-axios';

import OrderShippingQuotes from './OrderShippingQuotes';

const mockClient = mockAxios.create();

describe('OrderShippingQuotes', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  describe('OrderShippingQuotes REST Methods', () => {
    // @ts-expect-error testing ordersV2 constructor
    const orderShippingQuotes = new OrderShippingQuotes(mockClient);
    const thenFn = jest.fn();
    const catchFn = jest.fn();

    describe('list', () => {
      it('should perform a get request to the order shipping quotes endpoint', () => {
        const orderId = 100;
        const shippingAddressId = 150;

        void orderShippingQuotes.list(orderId, shippingAddressId);

        expect(mockClient.get).toHaveBeenCalledWith(
          `/v2/orders/${orderId}/shipping_addresses/${shippingAddressId}/shipping_quotes`,
        );
      });

      it('should return a promise that resolves to the response data for order shipping quotes', () => {
        const orderId = 100;
        const shippingAddressId = 150;
        const shippingQuoteId = 200;

        orderShippingQuotes.list(orderId, shippingAddressId).then(thenFn).catch(catchFn);

        const response = {
          config: {},
          headers: {},
          status: 200,
          statusText: 'OK',
          data: { id: shippingQuoteId },
        };

        mockClient.mockResponse(response);

        expect(thenFn).toHaveBeenCalledWith(response);

        expect(catchFn).not.toHaveBeenCalled();
      });
    });
  });
});
