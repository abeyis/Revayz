
//custom command to refresh token

let authToken2 = null;

Cypress.Commands.add ('refreshToken', (url, body) => { 

    cy.fixture ('refresh_token2.json').as('refresh_token_data');

    cy.get('@refresh_token_data').then((refresh_token_data) => {
        var refresh_token2 = refresh_token_data.refresh_token2;


        cy.request({
            method: 'POST',
            url: Cypress.env('revayz_endpoint') + 'token_generate',
            body:  {refresh_token2}
           })   

           .then((Response) =>{
            authToken2 = Response.body.idToken;
          })


    //do not do assertions in commands
        //    .then ((response) => { 
        //     expect(response.body).to.have.property ('idToken');
        //     expect(response.status).to.equal (200);
        //     });

    })


})
