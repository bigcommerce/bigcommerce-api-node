import { AxiosInstance } from 'axios';

import { AxiosPromise } from '../../../../types';

import type { Theme } from './types';

const themesPath = 'v3/themes';

class Themes {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Gets a list of all customers in a store
   *
   * @returns Promise resolving to a list of categories
   */
  list(): Theme['ListResponse'] {
    return this.client.get(themesPath);
  }

  /**
   * Uploads a new theme to your BigCommerce store.
   *
   * @param file The theme file
   * @returns Promise resolving to a newly created store theme
   */
  create(file: string): Theme['CreateResponse'] {
    return this.client.post(themesPath, {
      file,
    });
  }
  /**
   * Returns a store Theme.
   *
   * @param themeUUID A valid store theme UUID
   * @returns Promsie resolving to a single theme
   */
  get(themeUUID: number): Theme['GetResponse'] {
    return this.client.get(`${themesPath}/${themeUUID}`);
  }
  /**
   * Deletes a  single store theme by UUID
   *
   * @param themeUUID A valid
   * @returns Promise resolving to a 204 No Content response
   */
  delete(themeUUID: number): AxiosPromise<string> {
    return this.client.delete(`${themesPath}/${themeUUID}`);
  }
}

export default Themes;
