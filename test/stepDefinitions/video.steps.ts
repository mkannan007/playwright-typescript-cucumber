import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

import { baseConfig } from 'config/base.conf';
import { base, commonPage, videoPage } from 'page/base.page';

const { videoPagePath } = baseConfig;
let videoSourcePlaying: string;
let currentVideoSource: string;
let progressControlValue: string;

Given('I navigate to the Daily Mail video page', async (): Promise<void> => {
  await videoPage.navigateTo(videoPagePath);

  if ((await commonPage.isAcceptCookiesButtonVisible()) === true) {
    await commonPage.clickAcceptCookiesButton();
  }

  expect(await base.page.title()).toContain('Mail Online Videos');
});

When('I click on the video big play button', async (): Promise<void> => {
  await videoPage.waitForVideoContainer();
  await videoPage.waitForVideoControl();
  await videoPage.clickBigPlayButton();
  await videoPage.waitUntilVideoLoadingSpinnerDisappear();

  currentVideoSource = await videoPage.getVideoSourceAttributeValue();

  const isVideoSourcePlayButtonVisible = await videoPage.isPlayButtonVisible();

  if (isVideoSourcePlayButtonVisible === true) {
    await videoPage.clickPlayButton();
  }

  await videoPage.waitUntilVideoAdLabelDisappear();
});

When('I click on the video control pause button', async (): Promise<void> => {
  await videoPage.clickPauseButton();
});

When('I click on the video control play button', async (): Promise<void> => {
  await videoPage.clickPlayButton();

  progressControlValue = await videoPage.getProgressControlAttribute();
});

When('I click on the video control mute button', async (): Promise<void> => {
  await videoPage.clickVolumeButton();
});

Then('I should see the volume icon is muted', async (): Promise<void> => {
  const isVideoSourceMuted = await videoPage.getVolumeControlAttributeValue();

  expect(isVideoSourceMuted).toContain('true');
});

When('I click on the video control unmute button', async (): Promise<void> => {
  await videoPage.clickVolumeButton();
});

Then('I should see the volume icon is unmuted', async (): Promise<void> => {
  const isVideoSourceMuted = await videoPage.getVolumeControlAttributeValue();

  expect(isVideoSourceMuted).toContain('false');
});

When('I click on the video control skip button', async (): Promise<void> => {
  videoSourcePlaying = await videoPage.getVideoSourceAttributeValue();

  await videoPage.clickSkipVideo();
  await videoPage.waitUntilVideoLoadingSpinnerDisappear();
  await videoPage.waitUntilVideoAdLabelDisappear();
});

Then('I should see the video is skipped', async (): Promise<void> => {
  currentVideoSource = await videoPage.getVideoSourceAttributeValue();

  expect(videoSourcePlaying).not.toEqual(currentVideoSource);
});

When(
  'I click on the video control previous button',
  async (): Promise<void> => {
    videoSourcePlaying = await videoPage.getVideoSourceAttributeValue();

    await videoPage.clickPreviousVideo();
  },
);

Then(
  'I should see the video is played from the beginning',
  async (): Promise<void> => {
    const currentProgressControlValue =
      await videoPage.getProgressControlAttribute();
    currentVideoSource = await videoPage.getVideoSourceAttributeValue();

    expect(videoSourcePlaying).toEqual(currentVideoSource);
    expect(Number(currentProgressControlValue)).toBeLessThan(
      Number(progressControlValue),
    );
  },
);

When(
  'I click on the video control full screen button',
  async (): Promise<void> => {
    await videoPage.clickFullscreen();
    await videoPage.waitUntilVideoLoadingSpinnerDisappear();
    await videoPage.waitUntilVideoAdLabelDisappear();
  },
);

Then(
  'I should see the video is played in full screen',
  async (): Promise<void> => {
    const isVideoSourceFullscreen: string =
      await videoPage.getScreenViewContent();

    expect(isVideoSourceFullscreen).toContain('Non-Fullscreen');
  },
);

Then(
  'I should see the next video is played after the current video',
  async (): Promise<void> => {
    videoSourcePlaying = await videoPage.getVideoSourceAttributeValue();
    await videoPage.waitUntilVideoAdLabelDisappear();

    let progressControlValue = await videoPage.getProgressControlAttribute();

    do {
      if (Number(progressControlValue) >= 99) {
        await base.page.waitForTimeout(2000);
        currentVideoSource = await videoPage.getVideoSourceAttributeValue();
        break;
      }
      progressControlValue = await videoPage.getProgressControlAttribute();
    } while (Number(progressControlValue) <= 99);

    await videoPage.waitUntilVideoLoadingSpinnerDisappear();
    await videoPage.waitUntilVideoAdLabelDisappear();
    currentVideoSource = await videoPage.getVideoSourceAttributeValue();

    expect(videoSourcePlaying).not.toEqual(currentVideoSource);
  },
);
