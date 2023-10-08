import { Given, When } from "cypress-cucumber-preprocessor/steps";


     let authToken = null;
    
Given('User should get refresh_token and create authToken', ()=>{
    
    cy.generateToken()
     }); 

When('User verify usersubscription info', (dataTable)=> {
  
  const subscriptionData = dataTable.hashes();
  cy.wrap(subscriptionData).as('subscriptionData');

    cy.userSubscription() 
   
        .then((Response)=>{
        expect(Response.status).to.eq(200);
        expect(Response.body.character_count_of_each_revayz).to.eq(subscriptionData[0]['character_count']);
        expect(Response.body.start_at.toString()).to.eq(subscriptionData[0]['start_at']);
        expect(Response.body.package_id).to.eq(subscriptionData[0]['package_id']);
        const convertedRemindRevayzCount= parseInt(Response.body.remind_revayz_count, 10); // convert value to int
        expect(convertedRemindRevayzCount).greaterThan(0);
        cy.wrap(Response.body.active).should('eq', true); //  I've wrapped the boolean using cy.wrap() to make it a subject for Cypress assertions
        expect(Response.body.subscription_id).to.eq(subscriptionData[0]['subscription_id']);
        expect(Response.body.end_at.toString()).to.equal(subscriptionData[0]['end_at']);
        expect(Response.body.package_name).to.exist;
        expect(Response.body.email).to.eq(subscriptionData[0]['email']);
        expect(Response.body.package_code).to.eq(subscriptionData[0]['tier']);
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

   
Given('User should get refresh_token and create authToken', ()=>{
    
        cy.generateToken().then((Response)=>{
                expect(Response.status).to.eq(200);
         }); 
      });

When('User should verify that idToken is exist in response body', ()=> {
           cy.generateToken().then((Response)=> {
            expect(Response.body).to.have.property('idToken');
         });
      });   
   

