const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
// require('cypress-xpath');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      addCucumberPreprocessorPlugin(on, config);
      // require('cypress-xpath').plugin(on);
      on(
        "file:preprocessor",
        webpack({
          webpackOptions: {
            resolve: {
              extensions: [".js"],
            },
            module: {
              rules: [
                {
                  test: /\.feature$/,
                  use: [
                    {
                      loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                      options: config,
                    },
                  ],
                },
              ],
            },
          },
        })
      );
      allureWriter(on, config);
      return config;
    },
    // testIsolation: false,
    env: {
      baseUrl: 'https://stg-dibalik-supply.efishery.com',
      email: 'eshrimp.1.atesting@efishery.com',
      password: 'P@ssw0rd123'
    },
    reporter: 'mocha-allure-reporter',
    reporterOptions: {
      resultsDir: 'allure-results',
    },
    specPattern: 'cypress/e2e/**/*.feature'
    // specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
});