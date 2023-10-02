import {Given, Then } from "cypress-cucumber-preprocessor/steps";

Given('User navigate to the login page', function() {

    cy.visit('https://www.google.com/')
})
Then('User enter some info', () => {
    cy.get('#APjFqb').type('This is just a test')
})