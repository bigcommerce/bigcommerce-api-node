import { AxiosInstance } from 'axios';

import { themesPath } from './Themes';
import type { ThemeCustomTemplate } from './types';

class ThemeCustomTemplates {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Enumerates available custom templates for theme files in a specific theme version for each supported entity type
   *
   * @param versionUUID A valid store theme version UUID
   * @returns Promise resolving to a list of available custom template files
   */
  get(versionUUID: string): ThemeCustomTemplate['GetResponse'] {
    return this.client.get(`${themesPath}/custom-templates/${versionUUID}`);
  }
}

export default ThemeCustomTemplates;
