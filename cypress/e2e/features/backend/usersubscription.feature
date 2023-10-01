Feature: Burak

    Background: User gets idToken
    Given User gets idToken

        Scenario: User Send a get request to user subscription endpoint
        When User sends GET request to usersubscription endpoint
        Then User gets 200 status code 
        And User gets info about subscription
        | character_count | customer_id           | package_id                     | subscription_id              | package_name      | email                   |
        | 400             | cus_Oel0yEJzGN1a7b    | price_1NQogzAKE35JS5RJJlcPLMye | sub_1NrRULAKE35JS5RJ7xPzPoup | Tier 1            | burak.alakas@abeyis.com |