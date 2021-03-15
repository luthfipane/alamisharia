const config = require("../../../global-config.json");
describe("Create & Back to list", function () {
  it("Visit Web", function () {
    cy.visit("/");
    cy.get(".add_button").contains("Add Office").click();
    cy.get("#field-city").type(config.city);
    cy.get("#field-phone").type(config.no_phone);
    cy.get("#field-addressLine1").type(config.address1);
    cy.get("#field-addressLine2").type(config.address2.create);
    cy.get("#field-state").type(config.state);
    cy.get("#field-country").type(config.country);
    cy.get("#field-postalCode").type(config.postalcode);
    cy.get("#field-territory").type(config.territory);
    cy.get("#save-and-go-back-button").click();
    cy.contains("Export");
  });
});
