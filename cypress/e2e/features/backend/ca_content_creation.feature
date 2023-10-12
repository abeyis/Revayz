Feature: Revayz Content Creation API Testing
As a scrum team member, I want to send a Content-Creation POST request with a content, so that I receive generated outcome

  Scenario: Successful content generation POST request with 400 characters
    Given user should get refresh_token and create authToken
    When a POST request is made with the following 400 characters:
      """
      {
        "content": "Advancements in AI are reshaping our world. From healthcare to transportation, AI is driving innovation, automating tasks, and enhancing decision-making. Ethical development is vital to ensure responsible and unbiased AI usage."
      }
      """
    Then the API response should have a 200 status code
    And the API response should contain generated content and not be empty
