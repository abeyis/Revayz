import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

let res;

let subscriptionID;

Given("I get the Subscription ID from the userSubscription API", () => {
  cy.userSubscription().then((response) => {
    expect(response.status).to.eq(200);
    res = response
    subscriptionID = response.body.subscription_id;
  });
});


When("I send a POST request to {string}", () => {

  cy.upGradeDownGradeUsersubscription().then((response) => {
    expect(response.status).to.eq(200);
    res = response
  
  // Subscription'ı silmek için DELETE isteği gönderin.
  cy.deleteUserSubscription().then((response) => {
    expect(response.status).to.eq(200);
    res = response
    
    
    if (deleteResponse.status === 200) {
      // Silme başarılı
      cy.log(`Subscription ID ${subscriptionID} successfully deleted.`);
    } 
     else {
      // Diğer durumlar için hata işleme
      cy.log(`An unknown error has occurred: ${deleteResponse.status}`);
    }
  });
});


  /*cy.userSubscription().then((response) => {
    expect(response.status).to.eq(200);
    res = response
    
    const subscriptionID = Math.floor(Math.random() * 1000000).toString();
    const subscriptionIDToDelete = `subscription-${subscriptionID}`;
    
    // API yanıtından Subscription ID'yi alın
    
    //const subscriptionID = response.body.subscription_id;
  
    // Bu Subscription ID'yi kullanarak API isteğini gerçekleştirin
     cy.deleteUserSubscription().then((response) => {
    expect(response.status).to.eq(200);
    res = response
    
        if (response.status === 200) {
          cy.log(`Subscription ID ${subscriptionIDToDelete} successfully deleted.`);
        } else if (response.status === 404) {
          cy.log(`Error: Subscription ID ${subscriptionIDToDelete} not found.`);
        } else {
          cy.log(`An unknown error has occurred: ${response.status}`);
        }
      });
  });
  */


Then("I verify error message {string}", (error_message) => {
expect(res.body).to.include(error_message);
});


});