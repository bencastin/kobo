export class koboPom {
  city() {
    return cy.get('[placeholder="City"]');
  }
  nextOfKinPhone() {
    return cy.get('[name="phone"]');
  }
  taxRate() {
    return cy.get('[placeholder="Tax Rate"]');
  }
}
