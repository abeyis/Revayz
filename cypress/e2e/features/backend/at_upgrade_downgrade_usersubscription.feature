Feature: Upgrade or downgrade usersubscription 

Background: User gets refresh_token
Given User should get refresh_token create authToken

Scenario Outline: Upgrade or downgrade usersubscription to any tier
When User sends post request to upgrade_downgrade_usersubscription endpoint with "<tier_type>"
Then user should able to upgrade or downgrade the subscription 
Examples: 
    | tier_type| 
    | tier_1   | 
    | tier_2   | 
    | tier_1   |
