Feature: User should get authToken and verify info

Background: Get refresh_token
Given User should get refresh_token and create authToken

    Scenario: Scenario name    
    When User should verify usersubscription info
    And User should verify 3 subscription type is exist
    Then User sends contens as "I am learining cypress and api"
     
