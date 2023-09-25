import {Given, Then } from "cypress-cucumber-preprocessor/steps";


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


Given('User verify data',()=>{

cy.request("GET", Cypress.env('RevayzEndPoint') + usersubscription)
.then((Response) => {Response.body.



})



})