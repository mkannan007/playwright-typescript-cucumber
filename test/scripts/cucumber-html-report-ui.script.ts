import { generate } from 'multiple-cucumber-html-reporter';
import { resolve } from 'path';

const pathToJson = resolve('test/target/json/');
const pathToHtmlReport = resolve('test/target/html');

const options: any = {
  jsonDir: pathToJson,
  reportPath: pathToHtmlReport,
  openReportInBrowser: false,
  disableLog: true,
  displayDuration: true,
  hideMetadata: false,
  customMetadata: false,
  pageTitle: 'Test Automation',
  reportName: 'Test Automation Report',
  pageFooter: `<div class="created-by">
                <p>Tech Test</p>
                  <a href="https://www.dailymail.co.uk/">
                  dmg
                  </a>
               </div>`,
  metadata: {
    browser: {
      name: 'chrome',
      version: 'latest',
    },
    device: 'Desktop',
    platform: {
      name: 'Windows',
      version: '11',
    },
  },
  customData: {
    title: 'Automation Test Run Info',
    data: [
      { label: 'Framework', value: 'Playwright-Cucumber-TypeScript' },
      { label: 'Platform', value: 'Windows' },
      { label: 'Browser', value: 'chrome' },
    ],
  },
};

generate(options);
