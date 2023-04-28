import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { koboPom } from "../../pages/koboPage";

const kobo = new koboPom();

Given("I navigate to Kobo website", () => {
  // Load "Kobo360 website"
  cy.visit("https://www.kobo360.com/");
});
When("I navigate to kobosafe", () => {
  // Hover mouse on VAS
  cy.get('div[class="nav-item"]').contains("VAS").click();
  //Click Kobocare
  cy.get('a[href="/kobosafe/?lang=en"]')
    .first()
    .contains("Kobosafe")
    .click({ force: true });
});

Then("I click get started on the kobosafe page", () => {
  cy.get('button[type="button"]').contains("GET STARTED");
});
