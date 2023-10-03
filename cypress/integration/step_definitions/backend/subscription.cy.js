import {And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

 let response=null
   
Given('User should get refresh_token and create authToken', ()=>{
    
    cy.generateToken()
     }); 


When ('I send GET Subscription request', ()=>{
  cy.subscription()
  .then((apiResponse)=>{
      response=apiResponse
       
     })

})

Then ('I should receive a response with status code 200', ()=>{
  
  expect(response.status).to.eq(200)

})

And ('response should contain following data:',(dataTable) =>{


  const jsonData=cy.convertDatatableToJson(dataTable).then((jsonData) =>{
    
    jsonData.forEach((jsonItem, index) => {
      expect(response.body).to.deep.include(jsonItem);
    });
    
  })

   
   

})

