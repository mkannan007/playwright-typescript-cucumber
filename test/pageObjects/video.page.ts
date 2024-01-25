import { Page } from '@playwright/test';

import { base } from 'page/base.page';
import { baseConfig } from 'config/base.conf';

const { baseUrl } = baseConfig;

export class VideoPage {
  protected readonly page: Page;
  protected locators: {
    videoContainer: string;
    videoControl: string;
    bigPlayButton: string;
    progressControl: string;
    previousControl: string;
    playControl: string;
    pauseControl: string;
    skipControl: string;
    volumeControl: string;
    fullscreenControl: string;
    videoAdLabel: string;
    videoLoadingSpinner: string;
  };

  constructor(page: Page) {
    this.page = page;
    this.locators = {
      videoContainer: '[class*="video-container vjs-fixed"]',
      videoControl: '[class*="control-bar"]',
      bigPlayButton: '[class*="vjs-big-play-button"]',
      progressControl: '[class*="progress-control"]',
      previousControl: '[class*="previous-control"]',
      playControl: '[class*="vjs-play-control vjs-control  vjs-paused"]',
      pauseControl: '[class*="vjs-play-control vjs-control  vjs-playing"]',
      skipControl: '[class*="skip-control"]',
      volumeControl: '[class*="volume-menu-button"]',
      fullscreenControl: '[class*="fullscreen-control"]',
      videoAdLabel: '[class*="video-ad-label"]',
      videoLoadingSpinner: '[class*="vjs-loading-spinner-icon"]',
    };
  }

  public async navigateTo(path: string): Promise<void> {
    await base.page.goto(baseUrl + path, {
      waitUntil: 'domcontentloaded',
      timeout: 90000,
    });
  }

  public async waitForVideoContainer(): Promise<void> {
    return await base.page
      .locator(this.locators.videoContainer)
      .waitFor({ state: 'visible', timeout: 30000 });
  }

  public async getVideoSourceAttributeValue(): Promise<string> {
    return await base.page
      .locator(this.locators.videoContainer)
      .locator('video')
      .first()
      .getAttribute('src');
  }

  public async clickBigPlayButton(): Promise<void> {
    await base.page
      .locator(this.locators.videoContainer)
      .getByLabel('play video')
      .waitFor({ state: 'visible' });

    return await base.page
      .locator(this.locators.videoContainer)
      .locator(this.locators.bigPlayButton)
      .click()
      .then(async () => {
        await base.page
          .locator(this.locators.videoContainer)
          .getByLabel('play video')
          .waitFor({ state: 'hidden' });
        await base.page.waitForTimeout(2000);
      });
  }

  public async waitForVideoControl(): Promise<void> {
    return await base.page
      .locator(this.locators.videoContainer)
      .locator(this.locators.videoControl)
      .waitFor({ state: 'visible', timeout: 30000 });
  }

  public async getProgressControlAttribute(): Promise<string> {
    return await base.page
      .locator(this.locators.videoContainer)
      .locator(this.locators.progressControl)
      .locator('div')
      .first()
      .getAttribute('aria-valuenow');
  }

  public async clickPreviousVideo(): Promise<void> {
    return await base.page
      .locator(this.locators.videoContainer)
      .locator(this.locators.previousControl)
      .click()
      .then(async () => {
        await base.page.waitForTimeout(2000);
      });
  }

  public async isPlayButtonVisible(): Promise<boolean> {
    return await base.page
      .locator(this.locators.videoContainer)
      .locator(this.locators.playControl)
      .isVisible();
  }

  public async clickPlayButton(): Promise<void> {
    return await base.page
      .locator(this.locators.videoContainer)
      .locator(this.locators.playControl)
      .click()
      .then(async () => {
        await base.page
          .locator(this.locators.videoContainer)
          .locator(this.locators.playControl)
          .waitFor({ state: 'hidden' });
        await base.page.waitForTimeout(2000);
      });
  }

  public async isPauseButtonVisible(): Promise<boolean> {
    return await base.page
      .locator(this.locators.videoContainer)
      .locator(this.locators.pauseControl)
      .isVisible();
  }

  public async clickPauseButton(): Promise<void> {
    return await base.page
      .locator(this.locators.videoContainer)
      .locator(this.locators.pauseControl)
      .click()
      .then(async () => {
        await base.page
          .locator(this.locators.videoContainer)
          .locator(this.locators.pauseControl)
          .waitFor({ state: 'hidden' });
        await base.page.waitForTimeout(2000);
      });
  }

  public async clickSkipVideo(): Promise<void> {
    return await base.page
      .locator(this.locators.videoContainer)
      .locator(this.locators.skipControl)
      .click()
      .then(async () => {
        await base.page.waitForTimeout(2000);
      });
  }

  public async clickVolumeButton(): Promise<void> {
    return await base.page
      .locator(this.locators.videoContainer)
      .locator(this.locators.volumeControl)
      .click()
      .then(async () => {
        await base.page.waitForTimeout(2000);
      });
  }

  public async getVolumeControlAttributeValue(): Promise<string> {
    return await base.page
      .locator(this.locators.videoContainer)
      .locator(this.locators.volumeControl)
      .getAttribute('aria-pressed');
  }

  public async clickFullscreen(): Promise<void> {
    return await base.page
      .locator(this.locators.videoContainer)
      .locator(this.locators.fullscreenControl)
      .click();
  }

  public async getScreenViewContent(): Promise<string> {
    return await base.page
      .locator(this.locators.videoContainer)
      .locator(this.locators.fullscreenControl)
      .innerText();
  }

  public async waitUntilVideoAdLabelDisappear(): Promise<void> {
    await base.page.waitForTimeout(3000);
    return await base.page
      .locator(this.locators.videoContainer)
      .locator(this.locators.videoAdLabel)
      .waitFor({ state: 'hidden', timeout: 120000 });
  }

  public async waitUntilVideoLoadingSpinnerDisappear(): Promise<void> {
    await base.page.waitForTimeout(3000);
    return await base.page
      .locator(this.locators.videoContainer)
      .locator(this.locators.videoLoadingSpinner)
      .waitFor({ state: 'hidden', timeout: 30000 });
  }
}
