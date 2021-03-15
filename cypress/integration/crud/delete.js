const config = require("../../../global-config.json");
describe("Delete Data", function () {
  it("Visit Web", function () {
    cy.visit("/");
    cy.get(".search_city").click().type(config.search_city.delete);
    cy.get(".delete_button").eq(0).click();
    cy.on("window:confirm", () => true);
  });
});
