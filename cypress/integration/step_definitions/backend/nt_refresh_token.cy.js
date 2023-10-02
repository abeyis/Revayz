// Background: The user is logged in 
//    Given a valid refresh token is provided

// Scenario: User refreshes their access token 
//     Then a new access token is generated



import {And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";


//step sefinitions for Background: The user is logged in
Given ('a valid refresh token is provided', () => {
    
    cy.refreshToken()
})


//Step definitions for Scenario: User refreshes their access token 
Then ('a new access token is generated', () => {
    
    cy.refreshToken().then((response) => { 
           
        expect(response.body).to.have.property ('idToken');
        expect(response.status).to.equal (200);

      });

} )



