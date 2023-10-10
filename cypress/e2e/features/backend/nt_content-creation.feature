Feature: Content Creation

Background: The user is logged in 
    Given a valid refresh token is provided

Scenario: The user verifies the grammar correcting function of the app
    When the user send request with a body
    Then the user verifies that he gets a successful response 
    Then the user verifies that the response is grammarly corrected version of the text
    




    





