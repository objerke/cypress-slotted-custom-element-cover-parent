/// <reference types="cypress" />
describe("page", () => {
  it("finds first button and clicks it will work", () => {
      cy.visit("index.html");
      // Fails as its slotted content is another custom element.
      cy.get("button", { includeShadowDom: true }).first().click();
  });

  it("find last button with custom element inside it and clicks it. Will fail", () => {
      cy.visit("index.html");
      // Fails as its slotted content is another custom element.
      cy.get("button", { includeShadowDom: true }).last().click();
  });
});
