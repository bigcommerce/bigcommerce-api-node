import { AxiosInstance } from 'axios';

import { themesPath } from './Themes';
import type { ThemeAction } from './types';

class ThemeActions {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Dowloads a stores Theme.
   *
   * @param uuid valid store theme UUID
   * @returns Promsie resolving to a single theme
   */
  get(uuid: number): ThemeAction['GetResponse'] {
    return this.client.post(`${themesPath}/${uuid}/actions/download`);
  }

  /**
   * Activates a Theme
   *
   * @param data Data used to activate a Theme
   * @returns Promise resolving to a newly created customer
   */
  create(data: ThemeAction['CreateRequest']): ThemeAction['CreateResponse'] {
    return this.client.post(themesPath, data);
  }
}

export default ThemeActions;
