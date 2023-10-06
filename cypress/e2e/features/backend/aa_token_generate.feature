Feature: User should get refresh_token and create an authToken

    Scenario: User gets create authToken
    Given User should get refresh_token 
    Then User verify authToken is woriking properly by checking userEmail "abdullatif.aksu@abeyis.com"
   
     