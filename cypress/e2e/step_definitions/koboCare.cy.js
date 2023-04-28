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
  cy.get('div[class="nav-item"]').contains("VAS").click();
  //Click Kobocare
  cy.get('a[href="/kobocare/?lang=en"]').first().contains('Kobocare').click({force: true});
});

Then("I click get started on the kobocare page", () => {
  cy.get('button[type="button"]').contains("GET STARTED");
});
