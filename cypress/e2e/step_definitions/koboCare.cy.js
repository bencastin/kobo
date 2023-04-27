import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { koboPom } from "../../pages/koboPage";

const kobo = new koboPom();

Given("I navigate to the website", () => {
  // Load "Kobo360 website"
  cy.visit("https://www.kobo360.com/");

});
When("I navigate to kobocare", () => {
  // Hover mouse on VAS
  cy.focus('div[class="nav-item"]').contains("VAS");
  //Click Kobocare
  cy.get('a[href="/kobocare/?lang=en"]').first().contains('Kobocare');
});

Then("I click get started", () => {
  cy.get('button[type="button"]').contains("GET STARTED");
});
