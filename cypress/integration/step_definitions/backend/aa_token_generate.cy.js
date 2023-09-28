import {And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";


     let authToken = null;
    

   
Given('User should get refresh_token and create authToken', ()=>{

  cy.fixture('refresh_token.json').then((data) => {
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


When('User should verify usersubscription info', ()=> {
     
    cy.userSubscription(Cypress.env('revayz_endpoint') + 'usersubscription', 
    {
      Authorization: 'Bearer ' + authToken
    })
        .then((Response)=>{
        expect(Response.status).to.eq(200);
        expect(Response.body.character_count_of_each_revayz).to.eq('400');
        expect(Response.body.start_at).to.eq(1695093894.0);
        expect(Response.body.package_id).to.eq('price_1NQogzAKE35JS5RJJlcPLMye');
        const convertedRemindRevayzCount= parseInt(Response.body.remind_revayz_count, 10); // convert value to int
        expect(convertedRemindRevayzCount).has.to.above(0);
        cy.wrap(Response.body.active).should('eq', true); //  I've wrapped the boolean using cy.wrap() to make it a subject for Cypress assertions
        expect(Response.body.subscription_id).to.eq('sub_1NruYUAKE35JS5RJ0PInaXaQ');
        expect(Response.body.end_at).to.equal(1697685894.0);
        expect(Response.body.package_name).to.exist;
        expect(Response.body.email).to.eq('abdullatif.aksu@abeyis.com');
        expect(Response.body.package_code).to.eq('tier_1');

    cy.log(Response.body.character_count_of_each_revayz);

      })
   })


And('User should verify 3 subscription type is exist', () =>{

    cy.subscription(Cypress.env('revayz_endpoint') + 'subscription', 
    {
      Authorization: 'Bearer ' + authToken
    })
      .then((Response)=>{
      expect(Response.status).to.eq(200);
      expect(Response.body).to.have.length(3);
      })
    })


Then('User should create some content and write the response on the console', () => {
    
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