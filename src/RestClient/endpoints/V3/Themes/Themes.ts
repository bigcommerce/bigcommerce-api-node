import { AxiosInstance } from 'axios';

import { AxiosPromise } from '../../../../types';
import { buildMultipartBody } from '../../../../utils/buildMultipartBody';

import type { Theme } from './types';

export const themesPath = '/v3/themes';

class Themes {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Gets a list of store themes
   *
   * @returns Promise resolving to a list of store themes
   */
  list(): Theme['ListResponse'] {
    return this.client.get(themesPath);
  }

  /**
   * Uploads a new theme to your BigCommerce store.
   *
   * @param themePath An absolute path to the theme file
   * @returns Promise resolving with the job ID processing the theme upload
   */
  create(themePath: string): Theme['CreateResponse'] {
    const themeForm = buildMultipartBody('file', themePath);

    return this.client.post(themesPath, themePath, {
      headers: { ...themeForm.getHeaders() },
    });
  }

  /**
   * Returns a store theme.
   *
   * @param uuid A valid store theme UUID
   * @returns Promise resolving to a single theme
   */
  get(uuid: string): Theme['GetResponse'] {
    return this.client.get(`${themesPath}/${uuid}`);
  }

  /**
   * Deletes a  single store Theme by UUID
   *
   * @param uuid A valid store theme UUID
   * @returns Promise resolving to a 204 No Content response
   */
  delete(uuid: string): AxiosPromise<string> {
    return this.client.delete(`${themesPath}/${uuid}`);
  }
}

export default Themes;
