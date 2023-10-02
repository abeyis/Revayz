Feature: Refresh Token

Background: The user is logged in 
    Given a valid refresh token is provided

Scenario: User refreshes their access token 
    Then a new access token is generated    
    

# Scenario: User tries to refresh with an invalid refresh token
#     Given an invalid refresh token provided
#     When the user requests a new access token using the refresh token feature
#     Then an error response is returned with status code 404


# Scenario: User tries to refresh without providing a refresh token
#     Given no refresh token provided
#     When the user requests a new access token using the refresh token feature
#     Then an error response is returned 

