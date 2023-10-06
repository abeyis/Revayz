import { Given, When } from "cypress-cucumber-preprocessor/steps";


   
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
   