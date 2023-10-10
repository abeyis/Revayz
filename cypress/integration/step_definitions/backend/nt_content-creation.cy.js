// Feature: Content Creation

// Background: The user is logged in 
//     Given a valid refresh token is provided

// Scenario: The user verifies the grammar correcting function of the app
//     When the user send request with a body
//     Then the user verifies that he gets a successful response 
//     Then the user verifies that the response is grammarly corrected version of the text
    



import {And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";


//step sefinitions for Background: The user is logged in
Given ('a valid refresh token is provided', () => {
    
    cy.refreshToken()

})


//Step definitions for Scenario: The user verifies the grammar correcting function of the app


let contentCreation2Response; // Define a global variable to hold the response

When ('the user send request with a body' , (body) => {

    cy.contentCreation2(body).then((response) => {
        contentCreation2Response = response; // Store the response in the global variable

    });
})


Then ('the user verifies that he gets a successful response' , () => {

    expect(contentCreation2Response.status).to.equal(200);

})



Then ('the user verifies that the response is grammarly corrected version of the text' , () => {

    cy.fixture('content_nt.json').then((contentData) => {

        const expectedResponse = contentData.expectedResponse;
    
        expect(expectedResponse).to.equal(contentCreation2Response.body);
      });
    
})

    