// Feature: Content Creation

// Background: The user is logged in 
//     Given a valid refresh token is provided

// Scenario: The user verifies the paraphrasing function of the app
//     When the user verifies that he gets a successful response
//     Then the user verifies that the response is paraphrased version of the text


import {And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";


//step sefinitions for Background: The user is logged in
Given ('a valid refresh token is provided', () => {
    
    cy.refreshToken()

})


//Step definitions for Scenario: The user verifies the paraphrasing function of the app

When ('the user verifies that he gets a successful response' , () => {

    cy.contentCreation2().then((response) => { 
           
        expect(response.status).to.equal (200);

      });

})


    