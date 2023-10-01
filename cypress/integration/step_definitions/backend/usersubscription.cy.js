import {And, Given, Then } from "cypress-cucumber-preprocessor/steps";


/* 
"character_count_of_each_revayz": "400",
"start_at": 1694982161.0,
"package_id": "price_1NQogzAKE35JS5RJJlcPLMye",
"remind_revayz_count": "194",
"active": true,
"subscription_id": "sub_1NrRULAKE35JS5RJ7xPzPoup",
"end_at": 1697574161.0,
"customer_id": "cus_Oel0yEJzGN1a7b",
"package_name": "Tier 1",
"email": "burak.alakas@abeyis.com",
"package_code": "tier_1" 
*/


Given('User gets idToken', () => {

    cy.generateToken()

})

When('User sends GET request to usersubscription endpoint',  ()=> {

    cy.getUserSubscription()
 
})

Then('User gets {int} status code', (statusCode) =>{

    cy.getUserSubscription().then((Response) => {

        expect(Response.status).to.eq(statusCode)

    })
    
    })

And('User gets info about subscription', (userDataTable) => {

    let userData = userDataTable.hashes()
    cy.wrap(userData).as('userData')
    
    cy.getUserSubscription().then((Response) => {

        expect(Response.body.character_count_of_each_revayz).to.eq(userData[0]['character_count'])
        expect(Response.body.subscription_id).to.eq(userData[0]['subscription_id'])
        expect(Response.body.customer_id).to.eq(userData[0]['customer_id'])
        expect(Response.body.package_name).to.eq(userData[0]['package_name'])
        expect(Response.body.email).to.eq(userData[0]['email'])
        expect(Response.body.package_id).to.eq(userData[0]['package_id'])

    })     
    
}) 

