import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

let res;

When("I send a GET request to subscription", () => {
  cy.subscription().then((response) => {
    expect(response.status).to.eq(200);
    res = response
  })

});

Then("the response body should be correct with following data:", (table) => {
  
  
  const jsonData= cy.datatableToJson(table).then((jsonData) => {

    jsonData.forEach((jsonItem) => {
      expect(res.body).to.deep.include(jsonItem);
    });

  })

})
  