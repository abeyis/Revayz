import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
let response;

When('a POST request is made with the following 400 characters:', (payload) =>{
cy.contentCreation(payload).then((apiResponse)=>{
    response=apiResponse
})
})

Then('the API response should have a 200 status code', () =>{
expect(response.status).to.eq(200)
})

And('the API response should contain generated content and not be empty', () =>{
expect(response.body).not.to.be.empty
})

