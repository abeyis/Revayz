const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'cypress/reports/cucumber-json-report.json',
  output: 'cypress/reports/cucumber-html-report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
};

reporter.generate(options);
