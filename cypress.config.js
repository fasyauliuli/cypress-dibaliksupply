const { defineConfig } = require("cypress");
// const { allureCypress } = require("allure-cypress/reporter");
// const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const allureWriter = require('@shelex/cypress-allure-plugin/writer');
      allureWriter(on, config);
      return config;
    },
    testIsolation: false,
    env: {
    baseUrl: 'https://stg-dibalik-supply.efishery.com',
    email: 'eshrimp.1.atesting@efishery.com',
    password: 'P@ssw0rd123'
    },
    // reporter: 'mocha-allure-reporter',
    // reporterOptions: {
    //   resultsDir: 'allure-results', // This is where Allure results will be stored
    // },
    reporter: 'mocha-allure-reporter',
    reporterOptions: {
      resultsDir: 'allure-results', // Ensure this matches the directory you expect
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
});