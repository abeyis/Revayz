Feature: Upgrade or downgrade usersubscription

    Background: User gets refresh_token
        Given User should get refresh_token and create authToken
   
    Scenario: Upgrade or downgrade usersubscription to any tier
        Given User should be able to upgrade or downgrade usersubscription to "tier_1"
        

