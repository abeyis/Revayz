Feature: Subscription Tiers API
As a scrum team member, when I send a Subscription GET request, I should be able to retrieve all tiers information

  Background: User gets refresh_token
    Given User should get refresh_token and create authToken

  Scenario: Successful Subscription GET request
    When I send GET Subscription request
    Then I should receive a response with status code 200
    And response should contain following data:
      | name      | character_count_of_each_revayz | package_id                     | currency | revayz_count | price | package_code |
      | Free Tier |                            400 |                         837871 | $        |           20 |     0 | free         |
      | Tier 1    |                            400 | price_1NQogzAKE35JS5RJJlcPLMye | $        |          200 |  9.99 | tier_1       |
      | Tier 2    |                            800 | price_1NQrf3AKE35JS5RJViH9QqXY | $        | Unlimited    | 19.99 | tier_2       |
