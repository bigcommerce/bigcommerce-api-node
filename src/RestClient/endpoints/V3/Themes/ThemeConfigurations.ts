import { AxiosInstance } from 'axios';

import { themesPath } from './Themes';
import type { ThemeConfiguration } from './types';

class ThemeConfigurations {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Returns a list of theme configurations
   *
   * @param uuid A valid Theme UUID
   * @param params Query paramaters used to filter response
   * @returns Promise resolving to a list of customer addresses
   */
  list(uuid: number, params?: ThemeConfiguration['ListFilters']): ThemeConfiguration['ListResponse'] {
    return this.client.get(`${themesPath}/${uuid}/configurations`, {
      params,
    });
  }
  /**
   * Validates a Theme Configuration
   *
   * @param uuid A valid Theme UUID
   * @returns Promsie resolving to a single custom theme template
   */
  get(uuid: number): ThemeConfiguration['GetResponse'] {
    return this.client.post(`${themesPath}/${uuid}/configurations/validate`);
  }
}

export default ThemeConfigurations;
