Feature: Upgrade or downgrade usersubscription

    Background: User gets refresh_token
        Given User should get refresh_token 
   
    Scenario Outline: Upgrade or downgrade usersubscription to any tier
        When User send request to upgrade or downgrade usersubscription to "<tier_type>"
        Then User verify credits with the new plan "<tier_type>"
Examples:
    | tier_type| 
    | tier_1   | 
    | tier_2   | 
    | tier_1   |


