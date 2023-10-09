import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
let res;
Given('User should get refresh_token and create authToken', function () {
  cy.generateToken ()
  });

When('User sends a get request to usersubscription endpoint', () =>{
  cy.userSubscription().then((response)=>{
    expect(response.status).to.eq(200)
    res = response;
  })
})
And('User should be able to see info of all subscription types', () =>{
  expect(res.body.email).to.eq("abdullatif.aksu@abeyis.com")
  expect(res.body.customer_id).to.eq("cus_OaOHlvEBWeSxYC")
  expect(res.body.character_count_of_each_revayz).to.eq("400")
 expect(res.body.active).to.eq(true)
 expect(res.body.end_at).to.eq(1699245458)
 expect(res.body.package_code).to.eq("tier_1")
 expect(res.body.package_id).to.eq("price_1NQogzAKE35JS5RJJlcPLMye")
 expect(res.body.package_name).to.eq("Tier 1")
 expect(res.body.remind_revayz_count).to.eq("200")
expect(res.body.start_at).to.eq(1696567058)
expect(res.body.subscription_id).to.eq("sub_1NnDUkAKE35JS5RJ2scbN2yH")


})
