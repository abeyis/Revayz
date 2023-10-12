import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

let response

Given('user should get refresh_token and create authToken', () => {

 cy.generateToken()

});


When('user sends GET Subscription request', () => {
  cy.subscription()
    .then((apiResponse) => {
      response = apiResponse

    })
})

Then('user should receive a response with status code 200', () => {

  expect(response.status).to.eq(200)

})

And('response should contain following data:', (dataTable) => {


  const jsonData = cy.convertDatatableToJson(dataTable).then((jsonData) => {

    jsonData.forEach((jsonItem) => {
      expect(response.body).to.deep.include(jsonItem);
    });

  })
})
