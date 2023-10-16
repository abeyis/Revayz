


Feature: Subscription Testing with Token
Background: User gets refresh_token
Given User should get refresh_token and create authToken
  Scenario: Send a GET request to the subscription API
    When I send a GET request to subscription
    Then the response body should be correct with following data:
      | name      | character_count_of_each_revayz | package_id                     | currency | revayz_count | price | package_code |
      | Free Tier |                            400 |                         837871 | $        |           50 |     0 | free         |
      | Tier 1    |                            400 | price_1NyveXGRkOBpNhaCKR23bLoD | $        |          500 |  4.99 | tier_1       |
      | Tier 2    |                            800 | price_1NyvhhGRkOBpNhaCbeUTjqoE | $        |         5000 |  9.99 | tier_2       |
