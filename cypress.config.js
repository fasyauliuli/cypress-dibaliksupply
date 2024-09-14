const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    testIsolation: false,
    env: {
      baseUrl: 'https://stg-dibalik-supply.efishery.com',
      email: 'eshrimp.1.atesting@efishery.com',
      password: 'P@ssw0rd123'
    },
    reporter: 'mocha-allure-reporter',
    reporterOptions: {
      resultsDir: 'allure-results',
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
});