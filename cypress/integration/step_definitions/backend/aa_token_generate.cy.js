import {And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";


     let authToken = null;
    

   
Given('User should get refresh_token', ()=>{

  cy.fixture('tokens.json').then((data) => {
    const   refresh_token = data.refresh_token;
    
    cy.generateToken(Cypress.env('revayz_endpoint') + 'token_generate', 
    {
      refresh_token: refresh_token          
     })
    
     .then((Response) =>{
      authToken = Response.body.idToken;
    })
  }); 
  return authToken;
})


When('User verify', ()=> {
     
    cy.userSubscription(Cypress.env('revayz_endpoint') + 'usersubscription', 
    {
      Authorization: 'Bearer ' + authToken
    })
      .its('status')
      .should('equal',200)
   
})


And('User enter', () =>{

    cy.subscription(Cypress.env('revayz_endpoint') + 'subscription', 
    {
      Authorization: 'Bearer ' + authToken
    })
      .then((Response)=>{
      expect(Response.status).to.eq(200);
    })
})


Then('User', () => {
    
    cy.contentCreation(Cypress.env('revayz_endpoint') + 'contentcreation', 
    {
      Authorization: 'Bearer ' + authToken
    },
    {
      content: 'I am learning Cypress'
    })
    
      .then((Response)=>{
      cy.log(Response.body)

    })     
   
})