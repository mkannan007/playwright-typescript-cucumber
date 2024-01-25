# Please follow the below steps to run this project in your local machine

## Installation 
1. Download and Install Latest NodeJs **[Download link](https://nodejs.org/en)** or through package manager [Download link](https://nodejs.org/en/download/package-manager)
2. Download and Install Latest Visual Studio Code **[Download link](https://code.visualstudio.com/)** and **[Setup Guide](https://code.visualstudio.com/docs/setup/setup-overview)**
3. Download and Install Latest Chrome browser **[Download Link](https://www.google.com/intl/en_uk/chrome/dr/download/)**
4. Download and Install latest Git **[Download link](https://git-scm.com/downloads)** and **[Ref Guide](https://git-scm.com/docs)**
5. Clone this GitHub repository in your local machine **[Ref link](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)**
   
### Open Terminal 
1. Open Visual Studio code
2. Open the cloned project folder (`File  --> Open Folder`)
3. Open the terminal (`Terminal --> New Terminal`)
4. Run the following commands in the terminal

### Check Node installation
`node --version` 
`npm --version`

### Install Playwright Chromium
`npx playwright install --with-deps chromium`

### Install Package Dependencies
`npm install`

### To Run the test
`npm run cucumber:test:run:local`

## To see the html report after the test execution

- `Project Explorer --> test --> target --> html`
- Open `cucumber-report.html` in any browser

## Cucumber HTML Report Generated
![image](https://github.com/mkannan007/playwright-cucumber-typescript/assets/37662555/d2208a11-ba48-4025-a206-2c2479c25611)


## To View Test Execution Video for each scenario
`Click Feature to expand in Scenario view --> Scroll to the bottom --> Click Attached Video (video/webm) link`
![screencapture-file-C-Users-mkannan007-test-projects-playwright-cucumber-typescript-test-target-html-cucumber-report-html-2024-01-25-14_04_17](https://github.com/mkannan007/playwright-cucumber-typescript/assets/37662555/1220ff3a-3034-4135-8f2c-b040bfc4294d)

## For Multi-cucumber HTML report
### To Run the script in terminal
`npm run cucumber:html:report`

## To see the multi cucumber html report
- `Project Explorer --> test --> target --> html`
- Open `index.html` in any browser

![image](https://github.com/mkannan007/playwright-cucumber-typescript/assets/37662555/6375fcfd-3b09-4606-812d-10e147d3e9ed)

## Project Folder Structure

1. The code for the base and cucumber config files are maintained under the `test/config` directory
2. The test scenarios for the feature files are maintained under the `test/features` directory
3. The code for the base page is maintained under the `test/page` directory
4. The code for the cucumber hooks are maintained under the `test/hooks` directory
5. The code for the page wise object repositories are maintained under the `test/pageObjects` directory
6. The code for the scenario step implementaions are maintained under the `test/stepDefinitions` directory
7. The code for the cucumber init folder cleanup and multi-cucumber html report generation scripts are maintained under the `test/scripts` directory
8. The outcome of the test execution and cucumber html report will under the `test/target` directory
9. The config file like `tsconfig.json` and the formatter `.prettierrc` are maintained in the root
