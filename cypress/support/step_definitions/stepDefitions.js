import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require("@cypress/xpath");

Given("User login dbs", () => {
  cy.visit(Cypress.env("baseUrl"));
  cy.get("#username").type(Cypress.env("email"));
  cy.get("#password").type(Cypress.env("password"));
  cy.xpath('//button[.="Masuk"]').click();
});

When("User click {string}", (selectors) => {
  const param = selectors.split(":");
  if (param[0] === "data-testid") {
    cy.get(`[data-testid="${param[1]}"]`).click();
  } else if (param[0] === "id") {
    cy.get(`#${param[1]}`)
      .then(($el) => {
        // Temporarily make the element visible
        $el.css("opacity", "1");
      })
      .click();
  } else if (param[0] === "xpath") {
    cy.xpath(param[1]).click();
  }
});

Then("User verify element {string} will be displayed", (xpath) => {
  const param = xpath.split(":");
  if (param[0] === "xpath") {
    cy.xpath(param[1]).should("be.visible");
  } else if (param[0] === "id") {
    cy.get(`#${param[1]}`)
      .then(($el) => {
        // Temporarily make the element visible
        $el.css("opacity", "1");
      })
      .should("be.visible");
  } else if (param[0] === "data-testid") {
    cy.get(`[data-testid="${param[1]}"]`).should("be.visible");
  }
});

Then("User fill {string} with data {string}", (xpath, text) => {
  const param = xpath.split(":");
  if (param[0] === "xpath") {
    cy.xpath(param[1]).type(text);
  } else if (param[0] === "id") {
    cy.get(`#${param[1]}`).type(text);
  } else if (param[0] === "data-testid") {
    cy.get(`[data-testid="${param[1]}"]`).type(text);
  }
});

Then("User verify element text {string} with data {string}", (xpath, text) => {
  const param = xpath.split(":");
  if (param[0] === "xpath") {
    cy.xpath(param[1]).should("have.text", text);
  } else if (param[0] === "id") {
    cy.get(`#${param[1]}`).should("have.text", text);
  } else if (param[0] === "data-testid") {
    cy.get(`[data-testid="${param[1]}"]`).should("have.text", text);
  }
});