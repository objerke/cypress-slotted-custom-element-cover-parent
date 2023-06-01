/// <reference types="cypress" />
describe("page", () => {
    describe("test", () => {
        it("finds buttons and clicks them", () => {
            cy.visit("http://localhost:8083/index.html");
            // Works as this button only has text content in its slot.
            cy.get("button", { includeShadowDom: true }).first().click();
            // Fails as its slotted content is another custom element.
            cy.get("button", { includeShadowDom: true }).last().click();
        });
    });
});
