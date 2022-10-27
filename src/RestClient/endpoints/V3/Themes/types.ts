import { operations, paths } from '../../../../generate/generated/themes.v3';
import { AxiosPromise } from '../../../../types';

export interface Theme {
  ListResponse: AxiosPromise<operations['getStoreThemes']['responses']['200']['content']['application/json']>;
  CreateRequest: operations['uploadTheme']['requestBody']['content']['multipart/form-data']['file'];
  CreateResponse: AxiosPromise<operations['uploadTheme']['responses']['201']['content']['application/json']>;
  GetResponse: AxiosPromise<operations['getStoreTheme']['responses']['200']['content']['application/json']>;
}

export interface ThemeAction {
  DownloadRequest: operations['downloadTheme']['requestBody']['content']['application/json'];
  DownloadResponse: AxiosPromise<operations['downloadTheme']['responses']['200']['content']['application/json']>;
  CreateRequest: operations['activateStoreTheme']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<operations['activateStoreTheme']['responses']['204']['content']['application/json']>;
}

export interface ThemeConfiguration {
  ListFilters: paths['/stores/{store_hash}/v3/themes/{uuid}/configurations']['parameters']['query'];
  ListResponse: AxiosPromise<
    paths['/stores/{store_hash}/v3/themes/{uuid}/configurations']['get']['responses']['200']['content']['application/json']
  >;
  CreateResponse: AxiosPromise<
    paths['/stores/{store_hash}/v3/themes/{uuid}/configurations/validate']['post']['responses']['200']['content']['application/json']
  >;
}

export interface ThemeCustomTemplate {
  GetResponse: AxiosPromise<
    operations['get-themes-theme_uuid-custom-templates']['responses']['200']['content']['application/json']
  >;
}

export interface ThemeJob {
  GetResponse: AxiosPromise<operations['getJob']['responses']['200']['content']['application/json']>;
}
