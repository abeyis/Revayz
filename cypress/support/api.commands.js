

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
