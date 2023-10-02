

let authToken = null;
    
Cypress.Commands.add('generateToken', (url, body) => {
          
     cy.fixture('refresh_token.json').then((data) => {
      const   refresh_token = data.refresh_token;

      cy.request({
        method: 'POST',
        url: Cypress.env('revayz_endpoint') + 'token_generate',
        body:  {
          refresh_token: refresh_token          
         }
       })             
       .then((Response) =>{
        authToken = Response.body.idToken;
      })
    });        
});


Cypress.Commands.add('userSubscription', () => {
        
  cy.request({
    method: 'GET',
    url: Cypress.env('revayz_endpoint') + 'usersubscription', 
    headers:  {
      Authorization: 'Bearer ' + authToken
    }
   })      
});


Cypress.Commands.add('subscription', () => {
     
   cy.request({
    method: 'GET',
    url: Cypress.env('revayz_endpoint') + 'subscription',
    headers: {
      Authorization: 'Bearer ' + authToken
    }
   })    
});


Cypress.Commands.add('contentCreation', (body) => {
     
  cy.request({
    method: 'POST',
    url: Cypress.env('revayz_endpoint') + 'contentcreation', 
    headers:  {
      Authorization: 'Bearer ' + authToken
    },
    body,
   })      

});


//custom command to refresh token -nursena

let authToken2 = null;

Cypress.Commands.add ('refreshToken', () => { 

    cy.fixture ('refresh_token2.json').as('refresh_token_data');

    cy.get('@refresh_token_data').then((refresh_token_data) => {
        const refresh_token2 = refresh_token_data.refresh_token;
        cy.log(refresh_token2);
      
        cy.request({
            method: 'POST',
            url: Cypress.env('revayz_endpoint') + 'token_generate',
            body:  {
              refresh_token: refresh_token2
            }
           })   

           .then((Response) =>{
            authToken2 = Response.body.idToken;
          });

    });


});


//custom command for content creation api request -nursena

Cypress.Commands.add('contentCreation2', (body) => {
     
  cy.request({
    method: 'POST',
    url: Cypress.env('revayz_endpoint') + 'contentcreation', 
    headers:  {
      Authorization: 'Bearer ' + authToken2
    },
    body, //insert some text to body 
   })      

});



