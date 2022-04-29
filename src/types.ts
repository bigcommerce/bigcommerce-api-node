import { AxiosResponse } from 'axios';

export interface OAuthConfig {
  clientId: string;
  clientSecret: string;
  authCallback: string;
  loginHost?: string;
}

export interface RestClientConfig {
  storeHash: string;
  accessToken: string;
  apiHost?: string;
  rateLimitConfig?: RateLimitConfig;
}

export interface RateLimitStatus {
  msToReset: number;
  nextWindowTime: Date;
  windowSize: number;
  requestsRemaining: number;
  requestsQuota: number;
}

type CallbackParams = {
  [key: string]: unknown;
};

export interface RateLimitConfig {
  minRequestsRemaining: number;
  enableWait: boolean;
  callbackParams?: CallbackParams;
  callback?(params?: CallbackParams): void;
}

export interface AuthCallbackQueryParams {
  code: string;
  scope: string;
  context: string;
}

export interface AuthResponsePayload {
  access_token: string;
  scope: string;
  user: User;
  context: string;
  account_uuid: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
}

export interface VerifiedJwt {
  aud: string;
  iss: string;
  iat: number;
  nbf: number;
  exp: number;
  jti: string;
  sub: string;
  user: {
    id: number;
    email: string;
  };
  owner: {
    id: number;
    email: string;
  };
  url: string;
}

export type AxiosPromise<T> = Promise<AxiosResponse<T>>;

interface FormField {
  name: string;
  value: string;
}

interface OrderProduct {
  name: string;
  name_customer?: string;
  name_merchant?: string;
  quantity: number;
  price_inc_tax: number;
  price_ex_tax: number;
  upc?: string;
  sku?: string;
}

interface OrderProductOptions {
  id?: number;
  value?: string;
  display_name?: string;
  display_name_customer?: string;
  display_name_merchant?: string;
  display_value?: string;
  display_value_merchant?: string;
  display_value_customer?: string;
}

interface OrderProductsProductOptions extends Required<OrderProductOptions> {
  option_id: number;
  order_product_id: number;
  product_option_id: number;
  type: string;
  name: string;
  display_style: string;
}

interface OrderProductsAppliedDiscounts {
  id: string;
  amount: string;
  name: string;
  code: string | null;
  target: string;
}

type OrderProductsUpdate = Partial<Omit<OrderProduct, 'sku'>> & {
  id?: number;
  product_id?: number;
  product_options?: OrderProductOptions[];
  variant_id?: number;
  wrapping_name?: string;
  wrapping_message?: string;
  wrapping_cost_ex_tax?: number;
  wrapping_cost_inc_tax?: number;
};

interface OrderBillingAddress {
  first_name?: string;
  last_name?: string;
  company?: string;
  street_1?: string;
  street_2?: string;
  city?: string;
  state?: string;
  zip: string;
  country?: string;
  country_iso2?: string;
  phone?: string;
  email?: string;
  form_fields?: FormField[];
}

interface OrderShipmentItem {
  order_product_id: number;
  product_id: number;
  quantity: number;
}

interface LinkedResource {
  url: string;
  resource: string;
}

interface OrderStatus extends V2OrderCountResponseBase {
  id: number;
  name: string;
  system_label: string;
  custom_label: string;
  system_description: string;
  sort_order: number;
}
export interface OrderShippingAddress {
  first_name?: string;
  last_name?: string;
  company?: string;
  street_1?: string;
  street_2?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  country_iso2?: string;
  phone?: string;
  email?: string;
  shipping_method?: string;
}
export interface V2OrderResponseBase {
  id: number;
  date_modified: string;
  date_shipped: string;
  cart_id: string;
  status: string;
  subtotal_tax: string;
  shipping_cost_tax: string;
  shipping_cost_tax_class_id: number;
  handling_cost_tax: string;
  handling_cost_tax_class_id: number;
  wrapping_cost_tax: string;
  wrapping_cost_tax_class_id: number;
  payment_status: string;
  store_credit_amount: string;
  gift_certificate_amount: string;
  currency_id: number;
  currency_code: string;
  currency_exchange_rate: string;
  default_currency_id: number;
  default_currency_code: string;
  store_default_currency_code: string;
  store_default_to_transactional_exchange_rate: string;
  coupon_discount: string;
  shipping_address_count: number;
  is_email_opt_in: boolean;
  order_source: string;
  products: LinkedResource;
  shipping_addresses: LinkedResource;
  coupons: LinkedResource;
  status_id: number;
  base_handling_cost: string;
  base_shipping_cost: string;
  base_wrapping_cost: string;
  billing_address: Required<OrderBillingAddress>;
  channel_id: number;
  customer_id: number;
  customer_message: string;
  date_created: string;
  discount_amount: string;
  ebay_order_id: string;
  external_id: string;
  external_merchant_id: string;
  external_source: string;
  geoip_country: string;
  geoip_country_iso2: string;
  handling_cost_ex_tax: string;
  handling_cost_inc_tax: string;
  ip_address: string;
  ip_address_v6: string;
  is_deleted: boolean;
  items_shipped: number;
  items_total: number;
  order_is_digital: boolean;
  payment_method: string;
  payment_provider_id: string | number;
  refunded_amount: string;
  shipping_cost_ex_tax: string;
  shipping_cost_inc_tax: string;
  staff_notes: string;
  subtotal_ex_tax: string;
  subtotal_inc_tax: string;
  tax_provider_id: string;
  customer_locale: string;
  total_ex_tax: string;
  total_inc_tax: string;
  wrapping_cost_ex_tax: string;
  wrapping_cost_inc_tax: string;
}

export interface V2OrderRequestBase {
  products: OrderProduct[];
  shipping_addresses?: OrderShippingAddress[];
  base_handling_cost?: string;
  base_shipping_cost?: string;
  base_wrapping_cost?: string;
  billing_address: OrderBillingAddress;
  channel_id?: number;
  customer_id?: number;
  customer_message?: string;
  date_created?: string;
  default_currency_code?: string;
  discount_amount?: string;
  ebay_order_id?: string;
  external_id?: string;
  external_merchant_id?: string;
  external_source?: string;
  geoip_country?: string;
  geoip_country_iso2?: string;
  handling_cost_ex_tax?: string;
  handling_cost_inc_tax?: string;
  ip_address?: string;
  ip_address_v6?: string;
  is_deleted?: boolean;
  items_shipped?: number;
  items_total?: number;
  order_is_digital?: boolean;
  payment_method?: string;
  payment_provider_id?: string;
  refunded_amount?: string;
  shipping_cost_ex_tax?: string;
  shipping_cost_inc_tax?: string;
  staff_notes?: string;
  status_id?: number;
  subtotal_ex_tax?: string;
  subtotal_inc_tax?: string;
  tax_provider_id?: string;
  customer_locale?: string;
  total_ex_tax?: string;
  total_inc_tax?: string;
  wrapping_cost_ex_tax?: string;
  wrapping_cost_inc_tax?: string;
}

export type V2OrderUpdateRequest = Partial<Omit<V2OrderRequestBase, 'products' | 'billing_address'>> & {
  products?: Partial<OrderProductsUpdate[]>;
  billing_address?: Partial<OrderBillingAddress>;
};

export interface V2OrderFiltersBase {
  [key: string]: unknown;
  limit?: number;
  page?: number;
}

export interface V2OrdersListFilters extends V2OrderFiltersBase {
  cart_id?: string;
  channel_id?: number;
  customer_id?: number;
  email?: string;
  is_deleted?: boolean;
  max_date_created?: string;
  max_date_modified?: string;
  max_id?: number;
  max_total?: number;
  min_date_created?: string;
  min_date_modified?: string;
  min_id?: number;
  min_total?: number;
  payment_method?: string;
  sort?: string;
  status_id?: number;
}

export interface V2OrderTaxesListFilters extends V2OrderFiltersBase {
  details?: string;
}

export interface V2OrderMessagesListFilters extends V2OrderFiltersBase {
  customer_id?: number;
  is_flagged?: boolean;
  max_date_created?: string;
  max_id?: number;
  min_date_created?: string;
  min_id?: number;
  status?: string;
}

export interface V2OrderCountResponseBase {
  count: number;
}

export interface V2OrderCountResponse extends V2OrderCountResponseBase {
  statuses: OrderStatus[];
}

export interface V2OrderShipmentsResponseBase {
  id: number;
  order_id: number;
  customer_id: number;
  order_address_id: number;
  date_created: string;
  tracking_number: string;
  shipping_method: string;
  shipping_provider: string;
  tracking_carrier: string;
  tracking_link: string;
  comments: string;
  billing_address: Required<OrderBillingAddress>;
  shipping_address: Required<OrderShippingAddress>;
  items: OrderShipmentItem[];
}

export interface V2OrderShippingAddressesResponseBase extends Required<OrderShippingAddress> {
  id: number;
  order_id: number;
  items_total: number;
  items_shipped: number;
  base_cost: string;
  cost_ex_tax: string;
  cost_inc_tax: string;
  cost_tax: string;
  cost_tax_class_id: number;
  base_handling_cost: string;
  handling_cost_ex_tax: string;
  handling_cost_inc_tax: string;
  handling_cost_tax: string;
  handling_cost_tax_class_id: number;
  shipping_zone_id: number;
  shipping_zone_name: string;
  form_fields: FormField[];
  shipping_quotes: LinkedResource;
}

export interface V2OrderProductsResponseBase {
  id: number;
  order_id: number;
  product_id: number;
  order_address_id: number;
  name: string;
  sku: string;
  type: string;
  base_price: string;
  price_ex_tax: string;
  price_inc_tax: string;
  price_tax: string;
  base_total: string;
  total_ex_tax: string;
  total_inc_tax: string;
  total_tax: string;
  quantity: number;
  base_cost_price: string;
  cost_price_inc_tax: string;
  cost_price_ex_tax: string;
  weight: number | string;
  cost_price_tax: string;
  is_refunded: boolean;
  refunded_amount: string;
  return_id: number;
  wrapping_name: string;
  base_wrapping_cost: string;
  wrapping_cost_ex_tax: string;
  wrapping_cost_inc_tax: string;
  wrapping_cost_tax: string;
  wrapping_message: string;
  quantity_shipped: number;
  event_name: string;
  event_date: string;
  fixed_shipping_cost: string;
  ebay_item_id: string;
  ebay_transaction_id: string;
  option_set_id: number;
  parent_order_product_id: number;
  is_bundled_product: boolean;
  bin_picking_number: string;
  applied_discounts: OrderProductsAppliedDiscounts[];
  product_options: OrderProductsProductOptions[];
  external_id: string;
  upc: string;
  variant_id: number;
  name_customer: string;
  name_merchant: string;
}

export interface V2OrderStatusResponseBase {
  id: number;
  name: string;
  system_label: string;
  custom_label: string;
  system_description: string;
}

export interface V2OrderShipmentsRequestBodyBase {
  order_address_id: number;
  tracking_number?: string;
  shiping_method?: string;
  shipping_provider?: string;
  tracking_carrier?: string;
  comments?: string;
  items: Omit<OrderShipmentItem, 'product_id'>[];
}

export type V2OrderShipmentsUpdateRequest = Partial<Omit<V2OrderShipmentsRequestBodyBase, 'items'>>;

export interface V2OrderCouponsResponseBase {
  id: number;
  coupon_id: number;
  order_id: number;
  code: string | null;
  amount: string | number;
  type: number;
  discount: number;
}

export interface V2OrderTaxesResponseBase {
  id: number;
  order_id: number;
  order_address_id: number;
  tax_rate_id: number;
  tax_class_id: number;
  name: string;
  class: string;
  rate: string;
  priority: number;
  priority_amount: number;
  line_amount: string;
  order_product_id: string;
  line_item_type: 'item' | 'shipping' | 'handling' | 'gift-wrapping';
}

export interface V2OrderMessagesResponseBase {
  id: number;
  order_id: number;
  staff_id: number;
  customer_id: number;
  type: string;
  subject: string;
  message: string;
  status: string;
  is_flagged: boolean;
  date_created: string;
  customer: unknown;
}
export interface V2OrderShippingQuotesResponseBase {
  id: string;
  uuid: string;
  timestamp: string;
  shipping_provider_id: string;
  shipping_provider_quote: [] | Record<string, unknown>[];
  provider_code: string;
  carrier_code: string;
  rate_code: string;
  rate_id: string;
  method_id: number;
}
