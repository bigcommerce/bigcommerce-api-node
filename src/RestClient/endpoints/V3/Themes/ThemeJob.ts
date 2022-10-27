import { AxiosInstance } from 'axios';

import { themesPath } from './Themes';
import type { ThemeJob } from './types';

class ThemeJobs {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Returns a Theme job
   *
   * @param jobId A valid theme job ID
   * @returns Promise resolving to the current status of a theme job
   */
  get(jobId: string): ThemeJob['GetResponse'] {
    return this.client.get(`${themesPath}/jobs/${jobId}`);
  }
}

export default ThemeJobs;
