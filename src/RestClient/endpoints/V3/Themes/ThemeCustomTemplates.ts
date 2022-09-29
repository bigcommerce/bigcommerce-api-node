import { AxiosInstance } from 'axios';

import { themesPath } from './Themes';
import type { ThemeCustomTemplate } from './types';

class ThemeCustomTemplates {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Enumarates available custom templates for in the theme files in a specific theme version
   *
   * @param versionUUID valid store theme version UUID
   * @returns Promsie resolving to a single custom theme template
   */
  get(versionUUID: number): ThemeCustomTemplate['GetResponse'] {
    return this.client.post(`${themesPath}/custom-templates/${versionUUID}`);
  }
}

export default ThemeCustomTemplates;
