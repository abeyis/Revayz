import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

let res;


When("I send a POST request to delete_usersubscription", () => {

  cy.delete_UserSubscription().then((response) => {
    expect(response.status).to.eq(400);
    res = response;

  })
});

Then("I verify error message {string}", (error_message) => {
expect(res.body).to.include(error_message);

});
