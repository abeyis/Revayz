

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I have a valid bearerToken', () => {
  
  const bearerToken = Cypress.env('bearerToken');
  

When('I send a GET request to {string}', (url) => {
  
  cy.request({
    method: 'GET',
    url,
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  }).as('apiResponse');
});

Then('the response status code should be {int}', (statusCode) => {
  
  cy.get('@apiResponse').should((response) => {
    expect(response.status).to.equal(statusCode);
  });
});
});