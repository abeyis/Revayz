import {Then} from "cypress-cucumber-preprocessor/steps";



 Then('User should be able to upgrade or downgrade usersubscription to {string}', (tier_type)=>{
   cy.upGradeDownGradeUsersubscription(tier_type).then((Response)=>{ 
    expect(Response.body).to.eq('Succesfully updated')
   });     
   
});

 


