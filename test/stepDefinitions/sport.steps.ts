import { DataTable, Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

import { sportPage } from 'page/base.page';

Given(
  'I click on Premier League Tables menu in the sport page',
  async (): Promise<void> => {
    await sportPage.clickOnPremierLeagueTables();
  },
);

Then(
  'I should see the following team position and points in the sport page',
  async (dataTable: DataTable): Promise<void> => {
    const data = dataTable.hashes();
    const team = data[0].TeamName;
    const expectedTeamPosition = data[0].TeamPosition;
    const expectedTeamPoints = data[0].TeamPoints;

    expect
      .soft(await sportPage.getTeamPositionValue(team))
      .toBe(expectedTeamPosition);
    expect
      .soft(Number(await sportPage.getTeamPointsValue(team)))
      .toBeGreaterThanOrEqual(Number(expectedTeamPoints));
  },
);
