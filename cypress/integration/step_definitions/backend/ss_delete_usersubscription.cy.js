import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I have a valid bearer token", () => {

  cy.request({
    method: "POST",
    url: Cypress.env("baseUrl") + "token_generate", // token alma endpointinizi buraya ekleyin
    body: {
      username: Cypress.env("username"),
      password: Cypress.env("password")
    }
  }).then((response) => {
    cy.wrap(response.body.token).as("bearerToken");
  });
});


When("I send a DELETE request to {string}", () => {
  cy.get("@bearerToken").then((bearerToken) => {
    cy.request({
      method: "DELETE",
      url: Cypress.env("baseUrl") + "delete_usersubscription",
      headers: {
        Authorization: `Bearer ${bearerToken}`
      }
    }).as("apiResponse");
  });
});

Then("the response status code should be {int}", (statusCode) => {
  cy.get("@apiResponse").should((response) => {
    expect(response.status).to.eq(statusCode);
  });
});
