import { AxiosInstance } from 'axios';

import { themesPath } from './Themes';
import type { ThemeAction } from './types';

class ThemeActions {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Downloads a store's Theme.
   *
   * @param uuid A valid store theme UUID
   * @param data Data specifying which theme to download
   * @returns Promise resolving to a job ID that can be used to query the current status of a theme download
   */
  download(uuid: string, data?: ThemeAction['DownloadRequest']): ThemeAction['DownloadResponse'] {
    return this.client.post(`${themesPath}/${uuid}/actions/download`, data);
  }

  /**
   * Activates a Theme
   *
   * @param data Data used to activate a theme
   * @returns Promise resolving to a 204 No Content response
   */
  activate(data: ThemeAction['CreateRequest']): ThemeAction['CreateResponse'] {
    return this.client.post(`${themesPath}/actions/activate`, data);
  }
}

export default ThemeActions;
