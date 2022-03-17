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

Then, create your BigCommerce object with configuration options relevant to your use case:

```js
const bigcommerce = new BigCommerce({
  clientId: "YOUR_CLIENT_ID",
  clientSecret: "YOUR_CLIENT_SECRET",
  authCallback: "https://yourapplication.com/auth",
  // ...etc.
});
```
### Configuration Object

These are the available properties that can be passed into the BigCommerce constructor when instantiating it:

```js
{
  // Client ID (optional): Found in the BigCommerce DevTools dashboard when you create an app.
  // Required to call the `authorize` method.
  clientId: '123abc',

  // Client Secret (optional): Found in the BigCommerce DevTools dashboard when you create an app.
  // Required to call the `authorize` and `verifyJWT` methods.
  clientSecret: '789xyz',

  // Auth Callback (optional): URL used as the `redirect_uri` in the POST request to /oauth2/token.
  // Required to call the `authorize` method.
  authCallback: 'https://yourapplication.com/auth',

  // API Host (optional): Defaults to 'api.bigcommerce.com'. You probably don't want to change this, 
  // this option is here for internal BigCommerce employees mainly.
  apiHost: 'api.bigcommerce.com',

  // Login Host (optional): Defaults to 'login.bigcommerce.com'. You probably don't want to change this, 
  // this option is here for internal BigCommerce employees mainly.
  loginHost: 'login.bigcommerce.com',
}
```

While all of the configuration properties above are labelled as 'optional', a subset of properties may be required depending on how you're using the BigCommerce client. For example, the section below on [Authentication](#authentication) requires that the BigCommerce configuration contains non-null values for `clientId`, `clientSecret`, and `authCallback`. 

In the event that a method does not have values for required configuration properties, a `BigCommerceConfigurationError` will be thrown.

## Authentication

The `bigcommerce-api-node` package can be used to handle the OAuth flow that begins when a merchant clicks **Install** on a single-click app.

First, create a BigCommerce object with `clientId`, `clientSecret`, and `authCallback` as configuration options:

```js
const bigcommerce = new BigCommerce({
  clientId: "YOUR_CLIENT_ID",
  clientSecret: "YOUR_CLIENT_SECRET",
  authCallback: "https://yourapplication.com/auth",
});
```

The `authorize` method takes one parameter — an object containing values for `code`, `scope`, and `context`, which are provided by the GET request to your store when a merchant installs your app.

```js
const session = await bigcommerce.authorize({code, scope, context});
```

The object stored in the `session` variable above will have the following shape:

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

The `bigcommerce-api-node` package also ships with a `verifyJWT` method that can be used to verify and return the payload returned by the `load`, `uninstall`, and `remove User` callbacks. Each event triggers a GET request from BigCommerce to your app's callback endpoints containing a `signed_payload_jwt` as a query parameter. Once you parse the `signed_payload_jwt` from the request parameters, you can pass it to the `verifyJWT` method as follows:

```js
const session = bigcommerce.verifyJWT(signed_payload_jwt);
```

The object stored in the `session` variable above will have the following shape:

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
