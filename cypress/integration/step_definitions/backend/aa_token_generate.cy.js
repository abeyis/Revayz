import {And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";


     let authToken = null;
    

   
Given('User should get refresh_token and create authToken', ()=>{
    
    cy.generateToken()
     }); 


When('User should verify usersubscription info', ()=> {
     
    cy.userSubscription() 
   
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

      })
   })


And('User should verify 3 subscription type is exist', () =>{

    cy.subscription()
      .then((Response)=>{
      expect(Response.status).to.eq(200);
      expect(Response.body).to.have.length(3);
    
      })
    })


Then('User sends contens as {string}', (content) => {
    
    cy.contentCreation(
    {
      content: content
    })
    
      .then((Response)=>{
      cy.log(Response.body)

    })     
   
})