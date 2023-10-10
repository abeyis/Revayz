// Background: The user is logged in 
//    Given a valid refresh token is provided

// Scenario: User refreshes their access token 
//     Then a new access token is generated



import {And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";


let refreshTokenResponse; // Define a global variable to hold the response


//step sefinitions for Background: The user is logged in

Given ('a valid refresh token is provided', () => {
    
    cy.refreshToken(). then((response) => { 
           refreshTokenResponse = response; //store the reponse in the global variable
        
      });
})


//Step definitions for Scenario: User refreshes their access token 

Then ('a new access token is generated', () => {
    
        // Check if refreshTokenResponse exists and has the required properties

        if (refreshTokenResponse) {
            expect(refreshTokenResponse.body).to.have.property('idToken');
            expect(refreshTokenResponse.status).to.equal(200);
        } else {
            throw new Error('No valid response found in refreshTokenResponse');
        }

    });





