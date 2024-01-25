import { Page } from '@playwright/test';

import { base } from 'page/base.page';

export class SportPage {
  protected readonly page: Page;
  protected locators: {
    tables: string;
    tableRows: string;
  };

  constructor(page: Page) {
    this.page = page;
    this.locators = {
      tables: 'Tables',
      tableRows: 'tr[class*="competitionTableRow"]',
    };
  }

  public async clickOnPremierLeagueTables(): Promise<void> {
    await base.page
      .getByRole('link', { name: this.locators.tables, exact: true })
      .first()
      .click();
  }

  public async getTableRowsCount(): Promise<number> {
    await base.page
      .locator(this.locators.tableRows)
      .first()
      .waitFor({ state: 'visible', timeout: 30000 });
    return await base.page.locator(this.locators.tableRows).count();
  }

  public async getTeamPositionValue(team: string): Promise<string> {
    await base.page
      .locator(this.locators.tableRows)
      .first()
      .waitFor({ state: 'visible', timeout: 30000 });
    return await base.page
      .locator(this.locators.tableRows)
      .locator('td')
      .filter({ hasText: team })
      .locator('..')
      .locator('td')
      .first()
      .innerText();
  }

  public async getTeamPointsValue(team: string): Promise<string> {
    await base.page
      .locator(this.locators.tableRows)
      .first()
      .waitFor({ state: 'visible', timeout: 30000 });
    return await base.page
      .locator(this.locators.tableRows)
      .locator('td')
      .filter({ hasText: team })
      .locator('..')
      .locator('td')
      .last()
      .innerText();
  }
}
