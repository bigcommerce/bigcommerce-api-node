import { BigCommerceConfigProperties } from '../types';

export class BigCommerceConfigurationError extends Error {
  missing: string | undefined;

  constructor(missing?: BigCommerceConfigProperties) {
    if (!missing) {
      super('Required configuration object is missing');
    } else {
      super(`Missing required configuration property: ${missing}`);
      this.missing = missing;
    }

    this.name = 'BigCommerceConfigurationError';
  }
}
