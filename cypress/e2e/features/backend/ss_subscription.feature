

Feature: Testing My API

Scenario: Send a GET request to the subscription API
  Given I have a valid bearerToken
  When I send a GET request to "/subscription"
  Then the response status code should be 200


