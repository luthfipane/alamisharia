const config = require("../../../global-config.json");
describe("Edit Data", function () {
  it("Visit Web", function () {
    cy.visit("/");
    cy.get(".search_city").click().type(config.search_city.edit);
    cy.get(".ui-button-text").contains("Edit").click();
    cy.get("#field-addressLine2").clear().type(config.address2.edit);
    cy.get("#save-and-go-back-button").click();
    cy.contains("Export");
  });
});
