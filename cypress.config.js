const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");
const cypressMultiReporter = require('cypress-multi-reporters');
const marge = require('mochawesome-report-generator');
const report = require('multiple-cucumber-html-reporter');
const cucumberHtmlReport = require('cucumber-html-reporter');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber());
      on('after:run', (results) => {
        report.generate({
          jsonDir: 'cypress/reports/cucumber-json-report.json', // Path to your JSON report file
          reportPath: 'cypress/reports/cucumber-html-report.html' // Path to save the HTML report file
        });
      });
      require("cypress-localstorage-commands/plugin")(on, config);
     
      return config;
    },
    specPattern: "cypress/e2e/features/**/*.feature",  
    excludeSpecPattern: ["**/*.js"],
    viewportWidth: 1920,
    viewportHeight: 1080  
  },
  env:{
    revayz_endpoint: 'https://rmzwitktjd.execute-api.us-east-1.amazonaws.com/Prod/',
    reportFilename: ''
  },  
  
  reporter: "mochawesome",  
  reporterOptions: {
      jsonDir: "cypress/reports/mochawesome.json", // Directory to store the reports
      overwrite: false, // Set to true to overwrite existing reports
      html: true, // Generate HTML report
      quiet: true,
    },
    
});
report.generate({
  jsonDir: 'cypress/cucumber-json',
  reportPath: 'cypress/cucumber-html-report',
  metadata:{
      browser: {
          name: 'chrome',
          version: '60'
      },
      device: 'Local test machine',
      platform: {
          name: 'ubuntu',
          version: '16.04'
      },
  },
  customData: {
      title: 'Run info',
      data: [
          {label: 'Project', value: 'Custom project'},
          {label: 'Release', value: '1.2.3'},
          {label: 'Cycle', value: 'B11221.34321'}
      ]
  },
});


