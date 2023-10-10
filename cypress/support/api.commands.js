

let authToken = null;
    
Cypress.Commands.add('generateToken', () => {
          
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


Cypress.Commands.add('subscription', () => {
     
  cy.request({
   method: 'GET',
   url: Cypress.env('revayz_endpoint') + 'subscription',
   headers: {
     Authorization: 'Bearer ' + authToken
   }
  })    
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


//custom command to refresh token -nt

Cypress.Commands.add ('refreshToken', () => { 

  cy.fixture('refresh_token2').then((refresh_token_data) => {
      var refresh_token2 = refresh_token_data.refresh_token;
      cy.log(refresh_token2);

      cy.request({
          method: 'POST',
          url: Cypress.env('revayz_endpoint') + 'token_generate',
          body:  {
            refresh_token: refresh_token2
          }
         })   
         .then ((response) => { 
          expect(response.body).to.have.property ('idToken');
          expect(response.status).to.equal (200);

      });

  })


})



Cypress.Commands.add('upGradeDownGradeUsersubscription', (tier_type) => {
  let new_package_id = null;
  let new_subscription_id = null;

  cy.fixture('package_ids.json').then((data) => {
    switch (tier_type) {
    case 'tier_1': 
        new_package_id = data.tier_1_package_id; 
        break;
    case 'tier_2': 
        new_package_id = data.tier_2_package_id; 
        break;
    case 'tier_free': 
        new_package_id = data.tier_free_package_id; 
        break;
      default:
        new_package_id = tier_type; 
        throw new Error(`Invalid tier_type: ${tier_type}`);
    
    }
      
  cy.userSubscription().then((Response)=>{
    new_subscription_id = Response.body.subscription_id; 

    cy.request({
    method: 'POST',
    url: Cypress.env('revayz_endpoint') + 'contentcreation', 
    headers:  {
      Authorization: 'Bearer ' + authToken
    },
    body,
   })      

})
})
})
