Feature: Subscription Tiers API
As a scrum team member, when I send a Subscription GET request, I should be able to retrieve all tiers information

  Scenario: Successful Subscription GET request
    Given User should get refresh_token and create authToken
    When user sends GET Subscription request
    Then user should receive a response with status code 200
    And response should contain following data:
      | name      | character_count_of_each_revayz | package_id                     | currency | revayz_count | price | package_code |
      | Free Tier |                            400 |                         837871 | $        |           50 |     0 | free         |
      | Tier 1    |                            400 | price_1NyveXGRkOBpNhaCKR23bLoD | $        |          500 |  4.99 | tier_1       |
      | Tier 2    |                            800 | price_1NyvhhGRkOBpNhaCbeUTjqoE | $        |         5000 |  9.99 | tier_2       |
