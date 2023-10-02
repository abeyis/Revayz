Feature: Delete Subscription Testing
Background: User gets token
  Scenario: Delete a subscription
    Given I have a valid bearer token
    When I send a DELETE request to "delete_usersubscription"
    Then the response status code should be 204
