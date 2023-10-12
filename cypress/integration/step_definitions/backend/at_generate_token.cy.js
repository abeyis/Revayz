import { Given, When } from "cypress-cucumber-preprocessor/steps";

Given('User should get refresh_token and create authToken', ()=>{

cy.generateToken();

cy.generateToken().then((response) => {
    expect(response.status).to.eq(response);
  });
})

When('User should verify that idToken is exist in response body', ()=> {
  cy.generateToken().then(() => {
   
    cy.request({
      method: 'GET',
      url: 'https://rmzwitktjd.execute-api.us-east-1.amazonaws.com',
      headers: {
        Authorization: 'Bearer ${authToken}',
      },
    }).then((response) => {
      // response'ı işleme devam edin
    });
  });
})