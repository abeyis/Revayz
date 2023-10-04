import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("User should get token", () => {
  cy.generateToken();
});

When("I send a GET request to {string}", () => {
  cy.getSubscription();
});

Then("the response status code should be {int}", (statusCode) => {
  cy.getSubscription().then((response) => {
    expect(response.status).to.eq(statusCode);
  });
  
});


And("the response body should be correct", () => {
  
  cy.wait(1000); 
});
