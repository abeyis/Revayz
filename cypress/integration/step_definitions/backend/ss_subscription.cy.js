import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

let res;

When("I send a GET request to subscription", () => {
  cy.subscription().then((response) => {
    expect(response.status).to.eq(200);
    res = response
  })

});

And("the response body should be correct", () => {
  const responseBody = res.body;
  expect(responseBody[0].name).to.equal("Free Tier");
  expect(responseBody[0].package_code).to.equal("free");
  expect(responseBody[0].price).to.equal("0");

  expect(responseBody[1].name).to.equal("Tier 1");
  expect(responseBody[1].package_code).to.equal("tier_1");
  expect(responseBody[1].price).to.equal("4.99");

  expect(responseBody[2].name).to.equal("Tier 2");
  expect(responseBody[2].package_code).to.equal("tier_2");
  expect(responseBody[2].price).to.equal("9.99");
});
  




