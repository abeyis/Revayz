import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I have a valid bearer token", () => {

cy.generateToken()
});


When("I send a DELETE request to {string}", () => {
 cy.deleteUserSubscription()
});

Then("the response status code should be {int}", (statusCode) => {
  cy.deleteUserSubscription().then((response) => {
    expect(response.status).to.eq(statusCode);
  });
  
});
