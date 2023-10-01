

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

Cypress.Commands.add('upGradeDownGradeUsersubscription', (tier_type) => {
  let new_package_id = null;
  let new_subscription_id = null;

  cy.fixture('package_ids.json').then((data) => {
    if (tier_type === 'tier_1') {
      new_package_id = data.tier_1_package_id; 
    } else if (tier_type ==='tier_2'){
      new_package_id = data.tier_2_package_id; 
    } else if (tier_type ==='tier_free'){
      new_package_id = data.tier_free_package_id; 
    } else {
     new_package_id = tier_type;
    cy.log('No such tier_type like that! Please try "tier_1, Tier_2 or tier_free') 
    }
      
  cy.userSubscription().then((Response)=>{
    new_subscription_id = Response.body.subscription_id; 

    cy.request({
    method: 'POST',
    url: Cypress.env('revayz_endpoint') + 'upgrade_downgrade_usersubscription', 
    headers: {
      Authorization: 'Bearer ' + authToken,
      },
    body:  {
      subscription_id: new_subscription_id,
      new_package_id: new_package_id,               
        },  
      }); 
    }); 
  });
   });    
   
   