Feature: Refresh Token

Background: The user is logged in 
    Given a valid refresh token is provided

Scenario: User refreshes their access token 
    Then a new access token is generated    
    


