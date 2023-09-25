


    
Cypress.Commands.add('generateToken', (url, body) => {
     
    cy.request({
      method: 'POST',
      url,
      body,
     })    
});



Cypress.Commands.add('userSubscription', (url, headers) => {
     
  cy.request({
    method: 'GET',
    url,
    headers,
   })      
});


Cypress.Commands.add('subscription', (url, headers) => {
     
  cy.request({
    method: 'GET',
    url,
    headers,
   })      

});


Cypress.Commands.add('contentCreation', (url, headers, body) => {
     
  cy.request({
    method: 'POST',
    url,
    headers,
    body,
   })      

});
