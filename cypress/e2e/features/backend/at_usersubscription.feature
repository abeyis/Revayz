Feature: User should get authToken and verify info

Background: User gets refresh_token
Given User should get refresh_token and create authToken

Scenario: User should get authToken and verify info
    When User sends a get request to usersubscription endpoint
    And User should be able to see info of all subscription types