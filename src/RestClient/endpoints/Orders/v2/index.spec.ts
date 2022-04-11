import mockAxios from 'jest-mock-axios';

import { paginate } from '../../../../utils/paginate';

import OrderCoupons from './OrderCoupons';
import OrderMessages from './OrderMessages';
import OrderProducts from './OrderProducts';
import OrderShipments from './OrderShipments';
import OrderShippingAddresses from './OrderShippingAddresses';
import OrderShippingQuotes from './OrderShippingQuotes';
import OrderStatus from './OrderStatus';
import OrderTaxes from './OrderTaxes';

import OrdersV2 from './index';

jest.mock('../../../../utils/paginate');

const mockClient = mockAxios.create();

describe('OrdersV2', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  // @ts-expect-error testing OrdersV2 constructor
  const ordersV2 = new OrdersV2(mockClient);

  it('should instantiate and expose V2 order properties', () => {
    expect(ordersV2.orderCoupons).toBeInstanceOf(OrderCoupons);
    expect(ordersV2.orderProducts).toBeInstanceOf(OrderProducts);
    expect(ordersV2.orderTaxes).toBeInstanceOf(OrderTaxes);
    expect(ordersV2.orderStatus).toBeInstanceOf(OrderStatus);
    expect(ordersV2.orderShipments).toBeInstanceOf(OrderShipments);
    expect(ordersV2.orderShippingAddresses).toBeInstanceOf(OrderShippingAddresses);
    expect(ordersV2.orderMessages).toBeInstanceOf(OrderMessages);
    expect(ordersV2.orderShippingQuotes).toBeInstanceOf(OrderShippingQuotes);
  });

  describe('OrdersV2 REST Methods', () => {
    const thenFn = jest.fn();
    const catchFn = jest.fn();

    describe('get', () => {
      it('should perform a get request to the orders endpoint', () => {
        const orderId = 100;

        void ordersV2.get(orderId);

        expect(mockClient.get).toHaveBeenCalledWith(`/v2/orders/${orderId}`);
      });

      it('should return a promise that resolves to the response data for a single order', () => {
        const orderId = 100;

        ordersV2.get(orderId).then(thenFn).catch(catchFn);

        const response = {
          config: {},
          headers: {},
          status: 200,
          statusText: 'OK',
          data: {
            id: orderId,
          },
        };

        mockClient.mockResponse(response);

        expect(thenFn).toHaveBeenCalledWith(response);

        expect(catchFn).not.toHaveBeenCalled();
      });
    });

    describe('update', () => {
      it('should perform a put request to the orders update endpoint', () => {
        const orderId = 100;
        const customerId = 200;

        void ordersV2.update(orderId, { customer_id: customerId });

        expect(mockClient.put).toHaveBeenCalledWith(`/v2/orders/${orderId}`, { customer_id: customerId });
      });

      it('should return a promise that resolves to the response data for a single order update', () => {
        const orderId = 100;
        const customerId = 200;

        ordersV2.update(orderId, { customer_id: customerId }).then(thenFn).catch(catchFn);

        const response = {
          config: {},
          headers: {},
          status: 200,
          statusText: 'OK',
          data: {
            id: orderId,
            customer_id: customerId,
          },
        };

        mockClient.mockResponse(response);

        expect(thenFn).toHaveBeenCalledWith(response);

        expect(catchFn).not.toHaveBeenCalled();
      });
    });

    describe('archive', () => {
      it('should perform a delete request to the orders delete endpoint', () => {
        const orderId = 100;

        void ordersV2.archive(orderId);

        expect(mockClient.delete).toHaveBeenCalledWith(`/v2/orders/${orderId}`);
      });

      it('should return a promise that resolves to a 204 No Content response', () => {
        const orderId = 100;

        ordersV2.archive(orderId).then(thenFn).catch(catchFn);

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
      it('should perform a get request to the orders count endpoint', () => {
        void ordersV2.count();

        expect(mockClient.get).toHaveBeenCalledWith('/v2/orders/count');
      });

      it('should return a promise that resolves to the response data for a order count', () => {
        ordersV2.count().then(thenFn).catch(catchFn);

        const response = {
          config: {},
          headers: {},
          status: 200,
          statusText: 'OK',
          data: {
            statuses: [
              {
                id: 0,
                name: 'Incomplete',
                system_label: 'Incomplete',
                custom_label: 'Incomplete',
                system_description:
                  'An incomplete order happens when a shopper reached the payment page, but did not complete the transaction.',
                count: 18,
                sort_order: 0,
              },
            ],
            count: 150,
          },
        };

        mockClient.mockResponse(response);

        expect(thenFn).toHaveBeenCalledWith(response);

        expect(catchFn).not.toHaveBeenCalled();
      });
    });

    describe('list', () => {
      it('should perform a get request to the orders endpoint without parameters', () => {
        void ordersV2.list();

        expect(mockClient.get).toHaveBeenCalledWith('/v2/orders', { params: undefined });
      });

      it('should perform a get request to the orders endpoint with filter parameters', () => {
        const filters = { limit: 5 };

        void ordersV2.list(filters);

        expect(mockClient.get).toHaveBeenCalledWith('/v2/orders', { params: filters });
      });

      it('should return a promise that resolves to the response data for all orders', () => {
        ordersV2.list().then(thenFn).catch(catchFn);

        const response = {
          config: {},
          headers: {},
          status: 200,
          statusText: 'OK',
          data: [{ id: 100 }, { id: 101 }],
        };

        mockClient.mockResponse(response);

        expect(thenFn).toHaveBeenCalledWith(response);

        expect(catchFn).not.toHaveBeenCalled();
      });
    });

    describe('listAll', () => {
      it('should call paginate', () => {
        ordersV2.listAll();

        expect(paginate).toHaveBeenCalledTimes(1);
      });
    });

    describe('create', () => {
      it('should perform a post request to the orders create endpoint with user supplied data', () => {
        const data = {
          billing_address: { zip: '12345' },
          products: [{ name: 'test', price_ex_tax: 10, price_inc_tax: 10, quantity: 1 }],
        };

        void ordersV2.create(data);

        expect(mockClient.post).toHaveBeenCalledWith('/v2/orders', data);
      });

      it('should return a promise that resolves to the response data for a single created order', () => {
        const data = {
          billing_address: { zip: '12345' },
          products: [{ name: 'test', price_ex_tax: 10, price_inc_tax: 10, quantity: 1 }],
        };

        ordersV2.create(data).then(thenFn).catch(catchFn);

        const response = {
          config: {},
          headers: {},
          status: 200,
          statusText: 'OK',
          data: {
            id: 100,
            billing_address: { zip: '12345' },
          },
        };

        mockClient.mockResponse(response);

        expect(thenFn).toHaveBeenCalledWith(response);

        expect(catchFn).not.toHaveBeenCalled();
      });
    });

    describe('archiveAll', () => {
      it('should perform a delete request to the orders delete endpoint', () => {
        void ordersV2.archiveAll();

        expect(mockClient.delete).toHaveBeenCalledWith('/v2/orders');
      });

      it('should return a promise that resolves to a 204 No Content response', () => {
        ordersV2.archiveAll().then(thenFn).catch(catchFn);

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
