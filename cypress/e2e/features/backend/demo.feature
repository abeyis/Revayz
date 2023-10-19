Feature:This feature is created for demo


    Background: User gets refresh_token
        Given User should get refresh_token and create authToken

    @demo
    Scenario: Successful Subscription GET request
        When user sends GET Subscription request
        Then user should receive a response with status code 200
        And response should contain following data:
            | name      | character_count_of_each_revayz | package_id                     | currency | revayz_count | price | package_code |
            | Free Tier | 400                            | 837871                         | $        | 50           | 0     | free         |
            | Tier 1    | 400                            | price_1NyveXGRkOBpNhaCKR23bLoD | $        | 500          | 4.99  | tier_1       |
            | Tier 2    | 800                            | price_1NyvhhGRkOBpNhaCbeUTjqoE | $        | 5000         | 9.99  | tier_2       |
    @demo
    Scenario: Successful content generation POST request with 400 characters
        When a POST request is made with the following 400 characters:
            """
            {
                "content": "Advancements in AI are reshaping our world. From healthcare to transportation, AI is driving innovation, automating tasks, and enhancing decision-making. Ethical development is vital to ensure responsible and unbiased AI usage."
            }
            """
        Then the API response should have a 200 status code
        And the API response should contain generated content and not be empty

    @demo
    Scenario Outline: Successful correction of misspelled grammar and grammatical error
        When the application processes the <Input Sentence> with misspelled grammar
        Then API response should be grammatically <Corrected Sentence> and understandable

        Examples:
            | Input Sentence                           | Corrected Sentence                      |
            | "I lke to reed buks."                    | "I enjoy reading books."                |
            | "Heare is a apple on the table."         | "Here is an apple on the table."        |
            | "He go to the store yesterday."          | "He went to the store yesterday."       |
            | "They was playing in the garden."        | "They were playing in the garden."      |
            | "The book on the table are interesting." | "The book on the table is interesting." |
            | "She is teacher."                        | "She is a teacher."                     |

    @demo
    Scenario:User should verify error message when there is no user with that subscriptionId
        When I send a POST request to delete_usersubscription
        Then I verify error message "No such subscription"

#This scenario fails with error "No such subscription" as we can't get subscription id from userSubscription endpoint
   # @demo
    # Scenario Outline: Upgrade or downgrade usersubscription to any tier
    #     When User send request to upgrade or downgrade usersubscription to "<tier_type>"
    #     Then User verify credits with the new plan "<tier_type>"
    #     Examples:
    #         | tier_type |
    #         | tier_1    |
    #         | tier_2    |
    #         | tier_1    |
