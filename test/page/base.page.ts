import { Page } from '@playwright/test';

import { CommonPage } from 'pageObjects/common.page';
import { HomePage } from 'pageObjects/home.page';
import { SportPage } from 'pageObjects/sport.page';
import { VideoPage } from 'pageObjects/video.page';

export const base = {
  page: undefined as Page,
};

export const homePage = new HomePage(base.page);
export const commonPage = new CommonPage(base.page);
export const videoPage = new VideoPage(base.page);
export const sportPage = new SportPage(base.page);
