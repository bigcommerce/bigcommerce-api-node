import { operations } from '../../../../generate/generated/carts.v3';
import { AxiosPromise } from '../../../../types';

export interface Cart {
  CreateRequest: operations['createACart']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<operations['createACart']['responses']['201']['content']['application/json']>;
  GetRequest: operations['getACart']['parameters']['path'];
  GetResponse: AxiosPromise<operations['getACart']['responses']['200']['content']['application/json']>;
  DeleteRequest: operations['deleteACart']['parameters']['path'];
  DeleteResponse: AxiosPromise<operations['deleteACart']['responses']['204']['content']['application/json']>;
}

export interface CartLineItem {
  CreateRequest: operations['addCartLineItem']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<operations['addCartLineItem']['responses']['201']['content']['application/json']>;
  UpdateRequest: operations['updateCartLineItem']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<operations['updateCartLineItem']['responses']['200']['content']['application/json']>;
  DeleteRequest: operations['deleteCartLineItem']['parameters']['path'];
  DeleteResponse: AxiosPromise<operations['deleteCartLineItem']['responses']['204']['content']['application/json']>;
}

export interface CartMetaField {
  ListRequest: operations['getAllCartMetafields']['parameters']['path'];
  ListResponse: AxiosPromise<operations['getAllCartMetafields']['responses']['200']['content']['application/json']>;
  GetRequest: operations['getACartMetafield']['parameters']['path'];
  GetResponse: AxiosPromise<operations['getACartMetafield']['responses']['200']['content']['application/json']>;
  CreateRequest: operations['CreateCartMetafieldsByCartId']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<
    operations['CreateCartMetafieldsByCartId']['responses']['200']['content']['application/json']
  >;
  UpdateRequest: operations['UpdateCartMetafieldsByCartId']['parameters']['path'];
  UpdateResponse: AxiosPromise<
    operations['UpdateCartMetafieldsByCartId']['responses']['200']['content']['application/json']
  >;
  DeleteRequest: operations['deleteCartMetafieldById']['parameters']['path'];
  DeleteResponse: AxiosPromise<
    operations['deleteCartMetafieldById']['responses']['204']['content']['application/json']
  >;
}

export interface CartRedirect {
  CreateRequest: operations['createCartRedirectURL']['parameters']['path'];
  CreateResponse: AxiosPromise<operations['createCartRedirectURL']['responses']['201']['content']['application/json']>;
}

export interface CartSettingsGlobal {
  GetResponse: AxiosPromise<operations['getGlobalCartSettings']['responses']['200']['content']['application/json']>;
  UpdateRequest: operations['updateGlobalCartSettings']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<
    operations['updateGlobalCartSettings']['responses']['200']['content']['application/json']
  >;
}

export interface CartSettingsChannel {
  GetRequest: operations['getChannelCartSettings']['parameters']['path'];
  GetResponse: AxiosPromise<operations['getChannelCartSettings']['responses']['200']['content']['application/json']>;
  UpdateRequest: operations['updateChannelCartSettings']['parameters']['path'];
  UpdateResponse: AxiosPromise<
    operations['updateChannelCartSettings']['responses']['200']['content']['application/json']
  >;
}
