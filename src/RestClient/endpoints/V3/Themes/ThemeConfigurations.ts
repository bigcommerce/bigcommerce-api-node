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
   * @param uuid A valid theme UUID
   * @param params Query parameters used to filter response, with required site ID
   * @returns Promise resolving to a list of theme configurations
   */
  list(uuid: string, params: ThemeConfiguration['ListFilters']): ThemeConfiguration['ListResponse'] {
    return this.client.get(`${themesPath}/${uuid}/configurations`, {
      params,
    });
  }

  /**
   * Validates a theme configuration against the theme's schema without creating it. Useful for testing schemas before creation
   *
   * @param uuid A valid theme UUID
   * @returns Promise resolving to a 200 OK response representing that the theme passes validation
   */
  validate(uuid: string): ThemeConfiguration['CreateResponse'] {
    return this.client.post(`${themesPath}/${uuid}/configurations/validate`);
  }
}

export default ThemeConfigurations;
