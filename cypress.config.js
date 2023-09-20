const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber());
      require("cypress-localstorage-commands/plugin")(on, config);
      return config;
    },
    specPattern: "**/*.feature"
  },
});


