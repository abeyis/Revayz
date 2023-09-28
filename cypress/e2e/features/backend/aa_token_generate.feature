Feature: User should get authToken and verify info

Background: User gets refresh_token
Given User should get refresh_token and create authToken

    Scenario: User verify info 
    When User verify usersubscription info 
     | tier   | character_count | start_at     | package_id                   | subscription_id             | end_at      | email                      |
     | tier_1 | 400             | 1695093894 | price_1NQogzAKE35JS5RJJlcPLMye | sub_1NruYUAKE35JS5RJ0PInaXaQ | 1697685894 | abdullatif.aksu@abeyis.com |
    And User should verify 3 subscription type is exist
    Then User sends contens as "I am learning Cypress and there is still long way to go"
     