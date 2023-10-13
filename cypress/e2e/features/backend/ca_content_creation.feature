Feature: Revayz Content Creation API Testing
As a scrum team member, I want to send a Content-Creation POST request with a content, so that I receive generated outcome

  Background: 
    Given User should get refresh_token and create authToken

  Scenario: Successful content generation POST request with 400 characters
    When a POST request is made with the following 400 characters:
      """
      {
        "content": "Advancements in AI are reshaping our world. From healthcare to transportation, AI is driving innovation, automating tasks, and enhancing decision-making. Ethical development is vital to ensure responsible and unbiased AI usage."
      }
      """
    Then the API response should have a 200 status code
    And the API response should contain generated content and not be empty

  Scenario Outline: Successful correction of misspelled grammar and grammatical error
    When the application processes the <Input Sentence> with misspelled grammar
    Then API response should be grammatically <Corrected Sentence> and understandable

    Examples: 
      | Input Sentence                                  | Corrected Sentence                               |
      | "I lke to reed buks."                           | "I enjoy reading books."                         |
      | "Heare is a apple on the table."                | "Here is an apple on the table."                 |
      | "He go to the store yesterday."                 | "He went to the store yesterday."                |
      | "They was playing in the garden."               | "They were playing in the garden."               |
      | "The book on the table are interesting."        | "The book on the table is interesting."          |
      | "She is teacher."                               | "She is a teacher."                              |
