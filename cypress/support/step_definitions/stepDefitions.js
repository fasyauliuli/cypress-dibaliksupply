import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { selectorsVendor } from '../pageObjects/vendor';
require("@cypress/xpath");

Given("User login dbs", () => {
  cy.visit(Cypress.env("baseUrl"));
  cy.get("#username").type(Cypress.env("email"));
  cy.get("#password").type(Cypress.env("password"));
  cy.xpath('//button[.="Masuk"]').click();
});

When("User click {string}", (selectorName) => {
  const selectorString = selectorsVendor[selectorName]; // Retrieve the selector from the imported object
  const param = selectorString.split(":");
  const selectorType = param[0]; // 'data-testid', 'id', 'xpath'
  const selectorValue = param[1];

  if (selectorType === "data-testid") {
    cy.get(`[data-testid="${selectorValue}"]`).click();
  } else if (selectorType === "id") {
    cy.get(`#${selectorValue}`)
      .then(($el) => {
        // Temporarily make the element visible
        $el.css("opacity", "1");
      })
      .click();
  } else if (selectorType === "xpath") {
    cy.xpath(selectorValue).click();
  }
});

Then("User verify element {string} will be displayed", (selectorName) => {
  const selectorString = selectorsVendor[selectorName]; // Retrieve the selector from the imported object
  const param = selectorString.split(":");
  const selectorType = param[0]; // 'data-testid', 'id', 'xpath'
  const selectorValue = param[1];

  if (selectorType === "xpath") {
    cy.xpath(selectorValue).should("be.visible");
  } else if (selectorType === "id") {
    cy.get(`#${selectorValue}`)
      .then(($el) => {
        // Temporarily make the element visible
        $el.css("opacity", "1");
      })
      .should("be.visible");
  } else if (selectorType === "data-testid") {
    cy.get(`[data-testid="${selectorValue}"]`).should("be.visible");
  }
});

Then("User fill {string} with data {string}", (selectorName, text) => {
  const selectorString = selectorsVendor[selectorName]; // Retrieve the selector from the imported object
  const param = selectorString.split(":");
  const selectorType = param[0]; // 'data-testid', 'id', 'xpath'
  const selectorValue = param[1];

  if (selectorType === "xpath") {
    cy.xpath(selectorValue).type(text);
  } else if (selectorType === "id") {
    cy.get(`#${selectorValue}`).type(text);
  } else if (selectorType === "data-testid") {
    cy.get(`[data-testid="${selectorValue}"]`).type(text);
  }
});

Then("User verify element text {string} with data {string}", (selectorName, text) => {
  const selectorString = selectorsVendor[selectorName]; // Retrieve the selector from the imported object
  const param = selectorString.split(":");
  const selectorType = param[0]; // 'data-testid', 'id', 'xpath'
  const selectorValue = param[1];

  if (selectorType === "xpath") {
    cy.xpath(selectorValue).should("have.text", text);
  } else if (selectorType === "id") {
    cy.get(`#${selectorValue}`).should("have.text", text);
  } else if (selectorType === "data-testid") {
    cy.get(`[data-testid="${selectorValue}"]`).should("have.text", text);
  }
});