# Bigcommerce for Node.js

A node module for authentication and communication with the BigCommerce API.

## Installation (In Development)

1. Clone this repository: `git clone git@github.com:bigcommerce/bigcommerce-api-node.git`
2. Navigate into the cloned repository: `cd bigcommerce-api-node`
3. Run [npm link](https://docs.npmjs.com/cli/v8/commands/npm-link): `npm link`

Now, you can navigate into the directory of some other package (e.g., [sample-app-nodejs](https://github.com/bigcommerce/sample-app-nodejs)) and run `npm link bigcommerce-api-node` which will then allow you to use and test this package as if it was downloaded from NPM.

## Usage

First, import the package into your project:

```js
import BigCommerce from 'bigcommerce-api-node';
```

Then, create a BigCommerce object with configuration options relevant to your use case.
### The BigCommerce Object

The main `BigCommerce` import is an object that contains properties for different use cases of the BigCommerce Node Client. The properties available are described below:

* `Auth`: This class can be instantiated and used to handle the OAuth flow that begins when a merchant clicks **Install** on a single-click app. 

## OAuth

The `bigcommerce-api-node` package can be used to handle the OAuth flow that begins when a merchant clicks **Install** on a single-click app.

First, create a BigCommerce object with `clientId`, `clientSecret`, and `authCallback` as required configuration options:

```js
const bigcommerceAuth = new BigCommerce.Auth({
  clientId: "YOUR_CLIENT_ID",
  clientSecret: "YOUR_CLIENT_SECRET",
  authCallback: "https://yourapplication.com/auth",
});
```

The `bigcommerceAuth` object created above exposes two public methods: `authorize` and `verifyJWT`.

The `authorize` method takes one parameter — an object containing string values for `code`, `scope`, and `context`, which are provided by the GET request to your store when a merchant installs your app.

```js
const payload = await bigcommerceAuth.authorize({code, scope, context});
```

The object stored in the `payload` variable above will contain the following key/value pairs:

```js
{
  access_token: '123abc',
  scope: 'store_v2_orders etc.',
  user: {
    id: 12345,
    username: 'user.email@example.com',
    email: 'user.email@example.com',
  },
  context: 'stores/{STORE_HASH}',
  account_uuid: 'uuid-string'
}
```

The `verifyJWT` method can be used to verify and return the payload returned by the `load`, `uninstall`, and `remove User` callbacks. Each event triggers a GET request from BigCommerce to your app's callback endpoints containing a `signed_payload_jwt` as a query parameter. Once you parse the `signed_payload_jwt` from the request parameters, you can pass it to the `verifyJWT` method as follows:

```js
const payload = bigcommerceAuth.verifyJWT(signed_payload_jwt);
```

The object stored in the `payload` variable above will contain the following key/value pairs:

```js
{
  aud: 'YOUR_CLIENT_ID',
  iss: 'bc',
  iat: 1646844813,
  nbf: 1646844808,
  exp: 1646931213,
  jti: 'uuid-value',
  sub: 'stores/{STORE_HASH}',
  user: { id: 1470672, email: 'user.email@example.com' },
  owner: { id: 1470672, email: 'owner.email@example.com' },
  url: '/'
}
```

## REST API Resources

The `bigcommerce-api-node` package can be used to communicate with the BigCommerce Public REST API.

```js
const bigcommerceRest = new BigCommerce.Rest({
  storeHash: 'yourStoreHash',
  accessToken: 'yourStoreAccessToken'
})

// bigcommerceRest.<resource_name>.<method_name>
```

Each method returns a `Promise` that resolves to a response containing the resource data.

```js
bigcommerceRest.ordersV2
  .list({ limit: 5 })
  .then(orders => console.log(orders))
  .catch(err => console.error(err));
```

Some resources contain a `listAll()` method which returns an [Iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#iterators) allowing you to loop through every single resource available, with pagination handled for you.

```js
for await (const order of bigcommerceRest.ordersV2.listAll()) {
  console.log(order);
}
```

### Available Resources and Methods
* ordersV2
  * `get(orderId)`: Get an Order
  * `update(orderId, data)`: Update an Order
  * `archive(orderId)`: Archive an Order
  * `count()`: Get a Count of Orders
  * `list([params])`: Get All Orders
  * `listAll([params])`: Get All Orders (Paginated)
  * `create(data)`: Create an Order
  * `archiveAll()`: Archive All Orders
* ordersV2.orderCoupons
  * `list(orderId[, params])`: List Order Coupons
  * `listAll(orderId[, params])`: List Order Coupons (Paginated)
* ordersV2.orderProducts
  * `list(orderId[, params])`: List Order Products
  * `listAll(orderId[, params])`: List Order Products (Paginated)
  * `get(orderId, productId)`: Get an Order Product
* ordersV2.orderTaxes
  * `list(orderId[, params])`: Get All Order Taxes
  * `listAll(orderId[, params])`: Get All Order Taxes (Paginated)
* ordersV2.orderStatus
  * `list()`: Get All Order Statuses
  * `get(statusId)`: Get a Single Order Status
* ordersV2.orderShipments
  * `list(orderId[, params])`: Get Order Shipments
  * `listAll(orderId[, params])`: Get Order Shipments (Paginated)
  * `create(orderId, data)`: Create Order Shipment
  * `deleteAll(orderId)`: Delete All Order Shipments
  * `count(orderId)`Get a Count of Order Shipments
  * `get(orderId, shipmentId)`: Get a Shipment
  * `update(orderId, shipmentId, data)`: Update a Shipment
  * `delete(orderId, shipmentId)`: Delete an Order Shipment
* ordersV2.orderShippingAddresses
  * `list(orderId[, params])`: Get Order Shipping Addresses
  * `listAll(orderId[, params])`: Get Order Shipping Addresses (Paginated)
  * `get(orderId, addressId)`: Get a Shipping Address
  * `update(orderId, addressId, data)`: Update a Shipping Address
* ordersV2.orderMessages
  * `list(orderId[, params])`: Get Order Messages
  * `listAll(orderId[, params])`: Get Order Messages (Paginated)
* ordersV2.orderShippingQuotes
  * `list(orderId, addressId)`: Get Order Shipping Quotes