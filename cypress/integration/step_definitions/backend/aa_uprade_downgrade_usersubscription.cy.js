import {When, Then} from "cypress-cucumber-preprocessor/steps";



 When('User send request to upgrade or downgrade usersubscription to {string}', (tier_type)=>{
      cy.upGradeDownGradeUsersubscription(tier_type).then((Response)=>{ 
        expect(Response.body).to.eq('Succesfully updated')

   });  
            
});

Then('User verify credits with the new plan {string}', (tier_type)=> {
  cy.wait(2000);
  cy.userSubscription() .then((Response)=>{
    expect(Response.status).to.eq(200);
    const remindRevayzCount= (Response.body.remind_revayz_count); 
    
    switch(tier_type){
        case 'tier_1':
              expect(remindRevayzCount).to.eq('200');
              break;

        case 'tier_2':
              expect(remindRevayzCount).to.eq('Unlimited');
              break;
          
        default: 
          throw new Error(`Invalid tier_type: ${tier_type}`);

    }

  });

});

 


