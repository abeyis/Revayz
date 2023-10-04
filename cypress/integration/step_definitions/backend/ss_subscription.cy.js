import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

let res;

When("I send a GET request to subscription", () => {
  cy.getSubscription().then((response) => {
    expect(response.status).to.eq(200);
    res = response
  })
});



And("the response body should be correct", () => {
//expect(res.body)
  
 
});
