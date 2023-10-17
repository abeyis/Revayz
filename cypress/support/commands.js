// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('convertDatatableToJson', (dataTable) => {

  const headers = dataTable.rawTable[0];
  const rows = dataTable.rawTable.slice(1);

  const jsonData = rows.map(row => {
    const rowData = {};
    headers.forEach((header, index) => {
      rowData[header] = row[index];
    });
    return rowData;
  });

  return jsonData;
});

Cypress.Commands.add('findPackageName',(tier_type)=>{
let package_name
switch(tier_type){
  case "tier_1":
    package_name = "Tier 1"
    break;
    case "tier_2":
      package_name = "Tier 2"
      break;
      case "free":
        package_name = "Free Tier"
        break;
}
return package_name
})
