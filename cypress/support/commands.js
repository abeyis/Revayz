
// Other Cypress custom commands for API requests go here...
// Other Cypress custom commands for API requests go here...
// Example command to send a GET request with the bearer token

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
Cypress.Commands.add('datatableToJson', (table) => {

  const headers_1 = table.rawTable[0];
  const rows_1 = table.rawTable.slice(1);

  const jsonData_1 = rows_1.map(row => {
    const rowData_1 = {};
    headers_1.forEach((header, index) => {
      rowData_1[header] = row[index];
    });
    return rowData_1;
  });

  return jsonData_1;
});