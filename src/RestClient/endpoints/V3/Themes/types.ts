import { operations } from '../../../../generate/generated/themes.v3';
import { AxiosPromise } from '../../../../types';

export interface Theme {
  ListResponse: AxiosPromise<operations['getStoreThemes']['responses']['200']['content']['application/json']>;
  CreateRequest: operations['uploadTheme']['requestBody']['content']['multipart/form-data']['file'];
  CreateResponse: AxiosPromise<operations['uploadTheme']['responses']['201']['content']['application/json']>;
  GetResponse: AxiosPromise<operations['getStoreTheme']['responses']['200']['content']['application/json']>;
}
