

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

});
Cypress.Commands.add('getSubscription', () => {
  cy.request({
    method: 'GET',
    url: Cypress.env('revayz_endpoint') + 'subscription',
    headers: {
      Authorization: 'Bearer ' + authToken
    }
  });
});
Cypress.Commands.add("deleteUserSubscription", () => {
  
  cy.fixture("deleteUsersubscription").then((data) => {
  const subscriptionId = data.subscription_id;
  console.log(subscriptionId)
    cy.request({
      method: "POST",
      url: Cypress.env("revayz_endpoint") + "delete_usersubscription",
      headers: {
        Authorization: "Bearer " + authToken,
      },
      failOnStatusCode: false,
      body:{ 
        "subscription_id": subscriptionId
      }
    });
  });
});

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
  
