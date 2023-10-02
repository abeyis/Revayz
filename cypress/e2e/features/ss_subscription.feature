


Feature: Subscription Testing with Token
Background: User gets token
  Scenario: Send a GET request to the subscription API
    Given User should get token
    When I send a GET request to "/subscription"
    Then the response status code should be 200
