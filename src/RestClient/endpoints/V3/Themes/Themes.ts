import { AxiosInstance } from 'axios';

import { AxiosPromise } from '../../../../types';

import type { Theme } from './types';

export const themesPath = 'v3/themes';

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
   * @param uuid A valid store theme UUID
   * @returns Promsie resolving to a single theme
   */
  get(uuid: number): Theme['GetResponse'] {
    return this.client.get(`${themesPath}/${uuid}`);
  }
  /**
   * Deletes a  single store theme by UUID
   *
   * @param uuid A valid store theme UUID
   * @returns Promise resolving to a 204 No Content response
   */
  delete(uuid: number): AxiosPromise<string> {
    return this.client.delete(`${themesPath}/${uuid}`);
  }
}

export default Themes;
