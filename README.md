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

### Install Package Dependencies
`npm install`

### Install Playwright Chromium
`npx playwright install --with-deps chromium`

### To Run the test
`npm run cucumber:test:run:local`

# Automation Test Execution Report `target` folder is already pushed to the main branch for your reference as below, Please download and see
## To see the html report after the test execution

- `Project Explorer --> test --> target --> html`
- Open `cucumber-report.html` in any browser

![image](https://github.com/mkannan007/playwright-typescript-cucumber/assets/37662555/c79322ff-1d0a-4f2f-a99f-b727215617bd)

## Cucumber HTML Report Generated

![image](https://github.com/mkannan007/playwright-typescript-cucumber/assets/37662555/7e270d37-a8ea-4f74-b8a2-e1eff6f0e5a3)

## To View Test Execution Video for each scenario

- `Click Feature to expand in Scenario view --> Scroll to the bottom --> Click on the link` **Attached Video (video/webm**

![screencapture-file-C-Users-mkannan007-test-projects-playwright-typescript-cucumber-test-target-html-cucumber-report-html-2024-01-25-22_15_19](https://github.com/mkannan007/playwright-typescript-cucumber/assets/37662555/4659a37a-0c46-4dda-9eb0-2fffa2d7d16f)

## To View Test Execution Trace Viewer (Playwright will give the special network traces with screenshot for each step what happened through timetravel)

- `In the expanded Scenario view --> Scroll to the bottom --> Click on the link to download` **Download attachment.zip**
- open the url https://trace.playwright.dev/
- Upload the .zip file trace view using drap and drop or through select file

![image](https://github.com/mkannan007/playwright-typescript-cucumber/assets/37662555/34bde706-d2e0-48ad-80d9-e7827badf775)

- Trace all kind of Network calls, errors, what source it ran at each step by moving the screenshot slider
  
![image](https://github.com/mkannan007/playwright-typescript-cucumber/assets/37662555/ec49b575-d25c-4fa8-8f23-dcab8cab09e2)

## To see the multi cucumber html report
### Run the script in terminal
`npm run cucumber:html:report`

- `Project Explorer --> test --> target --> html`
- Open `index.html` in any browser

![image](https://github.com/mkannan007/playwright-typescript-cucumber/assets/37662555/be037619-c0c0-48f9-9cbf-ffc646ee181e)

## Project Folder Structure

1. The code for the base and cucumber config files are maintained under the `test/config` directory
2. The test scenarios for the feature files are maintained under the `test/features` directory
3. The code for the base page is maintained under the `test/page` directory
4. The code for the cucumber hooks are maintained under the `test/hooks` directory
5. The code for the page wise object repositories are maintained under the `test/pageObjects` directory
6. The code for the scenario step implementaions are maintained under the `test/stepDefinitions` directory
7. The code for the cucumber init folder cleanup and multi-cucumber html report generation scripts are maintained under the `test/scripts` directory
8. The outcome of the test execution videos, trace file and cucumber html report will under the `test/target` directory
9. The config file like `tsconfig.json` and the formatter `.prettierrc` are maintained in the root
