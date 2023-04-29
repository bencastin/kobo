export class koboPom {
  getStartedButton() {
    return cy.get('button[type="button"]');
  }
  kobocareLocator(){
    return cy.get('a[href="/kobocare/?lang=en"]');
  }
  kobosafeLocator(){
    return cy.get('a[href="/kobosafe/?lang=en"]');
  }
}
