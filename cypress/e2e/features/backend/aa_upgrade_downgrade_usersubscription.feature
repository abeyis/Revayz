Feature: Upgrade or downgrade usersubscription

    Background: User gets refresh_token
        Given User should get refresh_token and create authToken
   
    Scenario: Upgrade or downgrade usersubscription to any tier
        When User send request to upgrade or downgrade usersubscription to "tier_1"
        Then User verify credits with the new plan "tier_1"
        

