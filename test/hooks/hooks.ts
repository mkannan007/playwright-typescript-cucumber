import {
  Before,
  After,
  BeforeAll,
  AfterAll,
  ITestCaseHookParameter,
  setDefaultTimeout,
  Status,
  AfterStep,
  ITestStepHookParameter,
} from '@cucumber/cucumber';
import {
  chromium,
  Browser,
  BrowserContext,
  LaunchOptions,
  Page,
} from '@playwright/test';
import { readFileSync } from 'fs-extra';

import { base } from 'page/base.page';
import { baseConfig } from 'config/base.conf';

const { baseUrl } = baseConfig;
const options: LaunchOptions = {
  headless: !true,
  args: ['--start-maximized', '--disable-infobars'],
  channel: 'chrome',
};
let browser: Browser;
let context: BrowserContext;
let page: Page;

setDefaultTimeout(60 * 1000 * 10);

BeforeAll({ timeout: 60000 }, async () => {
  browser = await chromium.launch(options);
});

Before({ timeout: 30000 }, async function ({ pickle }: ITestCaseHookParameter) {
  context = await browser.newContext({
    baseURL: baseUrl,
    viewport: null,
    recordVideo: {
      dir: 'test/target/videos/',
    },
  });

  if (pickle.name.includes('Premier League')) {
    await context.tracing.start({
      screenshots: true,
      snapshots: true,
      title: pickle.name,
    });
  }
  page = await context.newPage();
  base.page = page;
});

AfterStep(
  { timeout: 60000 },
  async function ({ result }: ITestStepHookParameter) {
    if (result.status === Status.FAILED) {
      const screenshot: any = await page.screenshot();
      this.attach(screenshot, 'image/png');
    }
  },
);

After({ timeout: 60000 }, async function ({ pickle }: ITestCaseHookParameter) {
  const tracePath = `test/target/traces/${pickle.name}.zip`;
  const videoPath = await base.page.video().path();
  this.attach(readFileSync(videoPath), 'video/webm');

  if (pickle.name.includes('Premier League')) {
    await context.tracing.stop({ path: tracePath });
    this.attach(readFileSync(tracePath), 'application/zip');
  }

  await page.close();
  await context.close();
});

AfterAll({ timeout: 60000 }, async () => {
  await browser.close();
});
