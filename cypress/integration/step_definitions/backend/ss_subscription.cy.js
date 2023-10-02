import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
    


Given("User should get token", () => {
  cy.generateToken();
});

When("I send a GET request to {string}", () => {
  cy.subscription();
});

Then("the response status code should be {int}", () => {
  
  cy.wait(1000); 
});
