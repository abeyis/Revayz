import { Given, When } from "cypress-cucumber-preprocessor/steps";


   
Given('User should get refresh_token', ()=>{
    
        cy.generateToken().then((Response)=>{
                expect(Response.status).to.eq(200);
         }); 
      });

When('User verify authToken is woriking properly by checking userEmail {string}', (userEmail)=> {
           cy.userSubscription().then((Response)=> {
              expect(Response.body.email).to.eq(userEmail);
         });
      });   
   