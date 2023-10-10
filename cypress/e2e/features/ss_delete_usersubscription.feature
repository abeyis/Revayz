Feature: Delete Subscription Testing
Background: User gets refresh_token
Given User should get refresh_token and create authToken
  Scenario:User should verify error message when there is no user with that subscriptionId
    Given I get the Subscription ID from the userSubscription API
    When I send a POST request to "/api/delete_usersubscription/<%= subscriptionID %>"
    Then I verify error message "No such subscription"
