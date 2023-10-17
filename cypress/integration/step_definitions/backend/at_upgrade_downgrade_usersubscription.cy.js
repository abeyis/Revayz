import {When, Then} from "cypress-cucumber-preprocessor/steps";
let tier

Given('User should get refresh_token create authToken', () => {
cy.generateToken();
});

When('User sends post request to upgrade_downgrade_usersubscription endpoint with {string}',(tier_type) =>{  
       cy.upGradeDownGradeUsersubscription(tier_type)  
       tier = tier_type  
});
Then('User should able to upgrade or downgrade the subscription', ()=> {
 
   cy.usersubscription().then((Response)=>{
    expect(Response.body.package_name).to.eq(cy.findPackageName(tier))
   })
  });
