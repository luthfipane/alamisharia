const config = require("../../../global-config.json");
describe("View Data", function () {
  it("Visit Web", function () {
    cy.visit("/");
    cy.get(".search_city").click().type(config.search_city.view);
    cy.get(".ui-button-text").contains("View").click();
    cy.contains("Record Office");
  });
});
