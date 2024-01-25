import { Given } from '@cucumber/cucumber';

import { base, homePage, commonPage } from 'page/base.page';

Given(
  'I am on the Daily Mail home page',
  { timeout: 180000 },
  async (): Promise<void> => {
    await homePage.invokeUrl('/');
    await base.page.waitForFunction(
      () => document.title === 'UK Home | Daily Mail Online',
    );
    await commonPage.waitForAcceptCookiesButton();
    await commonPage.clickAcceptCookiesButton();
  },
);

Given(
  'I click on Sport menu in the home page',
  { timeout: 180000 },
  async (): Promise<void> => {
    await homePage.clickSportMenu();
  },
);
