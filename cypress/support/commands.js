
let authToken = null;

Cypress.Commands.add('generateToken', () => {
  // You can use cy.fixture to read the token from a JSON file
  cy.fixture('token.json').then((tokenData) => {
    const bearerToken = tokenData.bearerToken;

    // Assuming you have an API endpoint to generate the token
    cy.request({
      method: 'POST',
      url: Cypress.env('baseUrl') + 'token_generate',
      body: {
        bearerToken: bearerToken
      }
    }).then((response) => {
      authToken = response.body.idToken;
    });
  });
});

// Other Cypress custom commands for API requests go here...


// Other Cypress custom commands for API requests go here...

// Example command to send a GET request with the bearer token
Cypress.Commands.add('subscription', () => {
  cy.request({
    method: 'GET',
    url: Cypress.env('baseUrl') + 'subscription',
    headers: {
      Authorization: 'Bearer ' + authToken
    }
  });
});
Cypress.Commands.add("delete_usersubscription", (subscriptionId) => {
  cy.request({
    method: "DELETE",
    url: Cypress.env("baseUrl") + `subscription/${subscriptionId}`,
    headers: {
      Authorization: `Bearer ${Cypress.env("bearerToken")}`
    }
  });
});
