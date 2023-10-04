


Feature: Subscription Testing with Token
Background: User gets refresh_token
Given User should get refresh_token and create authToken
  Scenario: Send a GET request to the subscription API
    When I send a GET request to subscription
    Then the response body should be correct