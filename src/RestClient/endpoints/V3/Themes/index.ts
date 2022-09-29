import { AxiosInstance } from 'axios';

import ThemeActions from './ThemeActions';
import ThemeConfigurations from './ThemeConfigurations';
import ThemeCustomTemplates from './ThemeCustomTemplates';
import ThemeJobs from './ThemeJobs';
import Themes from './Themes';

class ThemesV3 {
  public themes: Themes;
  public themeActions: ThemeActions;
  public themeConfigurations: ThemeConfigurations;
  public themeCustomTemplates: ThemeCustomTemplates;
  public themeJobs: ThemeJobs;

  constructor(client: AxiosInstance) {
    this.themes = new Themes(client);
    this.themeActions = new ThemeActions(client);
    this.themeConfigurations = new ThemeConfigurations(client);
    this.themeCustomTemplates = new ThemeCustomTemplates(client);
    this.themeJobs = new ThemeJobs(client);
  }
}

export default ThemesV3;
