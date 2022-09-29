import { AxiosInstance } from 'axios';

import { themesPath } from './Themes';
import type { ThemeJob } from './types';

class ThemeJobs {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Returns a theme job
   *
   * @param jobID A valid theme job ID
   * @returns Promsie resolving to a single custom theme template
   */
  get(jobID: number): ThemeJob['GetResponse'] {
    return this.client.post(`${themesPath}/jobs/${jobID}`);
  }
}

export default ThemeJobs;
