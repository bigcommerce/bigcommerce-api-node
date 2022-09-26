import { AxiosInstance } from 'axios';

import Themes from './Themes';

class ThemesV3 {
  public themes: Themes;

  constructor(client: AxiosInstance) {
    this.themes = new Themes(client);
  }
}

export default ThemesV3;
