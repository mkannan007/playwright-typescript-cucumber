import { Page } from '@playwright/test';

import { base } from 'page/base.page';

export class CommonPage {
  protected readonly page: Page;
  protected locators: {
    acceptCookiesButton: string;
  };

  constructor(page: Page) {
    this.page = page;
    this.locators = {
      acceptCookiesButton: 'Got it',
    };
  }

  public async waitForAcceptCookiesButton(): Promise<void> {
    return await base.page
      .getByRole('button', { name: this.locators.acceptCookiesButton })
      .waitFor({ state: 'visible', timeout: 30000 });
  }

  public async isAcceptCookiesButtonVisible(): Promise<boolean> {
    return await base.page
      .getByRole('button', { name: this.locators.acceptCookiesButton })
      .isVisible();
  }

  public async clickAcceptCookiesButton(): Promise<void> {
    return await base.page
      .getByRole('button', { name: this.locators.acceptCookiesButton })
      .click();
  }
}
