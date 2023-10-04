

let authToken = null;
    
Cypress.Commands.add('generateToken', (url, body) => {
          
     cy.fixture('refresh_token.json').then((data) => {
      const   refresh_token = data.refresh_token;

      cy.request({
        method: 'POST',
        url: Cypress.env('revayz_endpoint') + 'token_generate',
        body:  {
          refresh_token: refresh_token          
         }
       })             
       .then((Response) =>{
        authToken = Response.body.idToken;
      })
    });        
});


Cypress.Commands.add('userSubscription', () => {
        
  cy.request({
    method: 'GET',
    url: Cypress.env('revayz_endpoint') + 'usersubscription', 
    headers:  {
      Authorization: 'Bearer ' + authToken
    }
   })      
});


Cypress.Commands.add('subscription', () => {
     
   cy.request({
    method: 'GET',
    url: Cypress.env('revayz_endpoint') + 'subscription',
    headers: {
      Authorization: 'Bearer ' + authToken
    }
   })    
});


Cypress.Commands.add('contentCreation', (body) => {
     
  cy.request({
    method: 'POST',
    url: Cypress.env('revayz_endpoint') + 'contentcreation', 
    headers:  {
      Authorization: 'Bearer ' + authToken
    },
    body,
   })      

});
Cypress.Commands.add('getSubscription', () => {
  cy.request({
    method: 'GET',
    url: Cypress.env('revayz_endpoint') + 'subscription',
    headers: {
      Authorization: 'Bearer ' + authToken
    }
  });
});
Cypress.Commands.add("deleteUserSubscription", () => {
  cy.fixture("deleteUsersubscription").then((data) => {
  
    const subscriptionId = data.subscription_id;
    cy.request({
      method: "DELETE",
      url: Cypress.env("revayz_endpoint") + "delete_usersubscription",
      headers: {
        Authorization: "Bearer eyJraWQiOiJ6ZG0yZ2NvUkltVXBmODFNWk54QnlEN2tRMGpMUXpucnpLVjNpaUd0bTk0PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJiNGU4MjQ4OC1kMDkxLTcwNWEtNzNiNS1hZDdkY2E4NjMxZTMiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfVWJDN0p0R2xZIiwiY29nbml0bzp1c2VybmFtZSI6ImI0ZTgyNDg4LWQwOTEtNzA1YS03M2I1LWFkN2RjYTg2MzFlMyIsIm9yaWdpbl9qdGkiOiI3NjdlYzFkNi1mMDU2LTQ1NWYtODk1Ni0xN2VmZTZhYzQ1YTQiLCJhdWQiOiI2MGh0Nms0azA2OW9pNjk2bWMza2ZscGloOSIsImV2ZW50X2lkIjoiYTc2NzY2OTgtMGQ4Yi00NTIxLThiNzEtNjg3ODMwOWFlZGE2IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2OTY0MzE4MDEsImV4cCI6MTY5NjUyMjA0NywiaWF0IjoxNjk2NDM1NjQ4LCJqdGkiOiJhOTRlNDU0My0xZjI2LTRjYWUtYmRjOC1mZDQ1NmUzNWFhNDAiLCJlbWFpbCI6InNlbG1hLmJlcmdAYWJleWlzLmNvbSJ9.zpuyPHt0rYpLvQAEZIN9ClLzbv6QP3QcDwZ1pRqcqhkCuO6CcDfsJQvoQTIJ8Mq_nqJtx97LHXSz5QeI7GDmiCq_qMWNfhMfXWtfCY5DsQ5_cKuhM6Be4SLkngVIlHUwUP58qlVgFmOxn8goNcHNUjUsjZD8ux9R818YOCvFGf08qfZskB45kYsFxZWAJL5FwO1rUTbLknsQAB1UxvGI4efraACLzCYOPbj8z_YZWD1dD0DwokW7qijyDgPZPF2zqDCXAbQwXLsxxw81c2jkRxb8X0hJNREoXp9v6hzXVh2Q50s1KJFKD_j1mmqVcyJnwj7wdXlMz2_9n7ZFTaVzFg"
      
      },
      body: {
        subscription_id: subscriptionId
      }
    });
  })
  
});
