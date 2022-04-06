import OAuth from './OAuth';
import RestClient from './RestClient';

const BigCommerce = {
  Auth: OAuth,
  Rest: RestClient,
};

export default BigCommerce;
export * from './types';
