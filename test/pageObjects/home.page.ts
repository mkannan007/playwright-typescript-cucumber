import { Page } from '@playwright/test';

import { baseConfig } from 'config/base.conf';
import { base } from 'page/base.page';

const { baseUrl } = baseConfig;

export class HomePage {
  protected readonly page: Page;
  protected locators: {
    sportMenu: string;
  };

  constructor(page: Page) {
    this.page = page;
    this.locators = {
      sportMenu: 'Sport',
    };
  }

  public async invokeUrl(path: string) {
    await base.page.goto(baseUrl + path, { waitUntil: 'load', timeout: 60000 });
  }

  public async clickSportMenu() {
    await base.page
      .getByRole('link', { name: this.locators.sportMenu, exact: true })
      .first()
      .click();
  }
}
