/// <reference types="cypress" />

//The login module is tested under the "check login process" test suite 
describe('check login process', () => {
  //First test case - direct to the site under test 
  before('Visit the demo site',() => {
    cy.visit('https://bstackdemo.com/');
  })

  //Second test case - click on the login
  it('Click and redirect to login page', () => {
    cy.get('#signin').click();

  //Third test case - user is logged on and redirected to home page
  cy.get("#username").click();
  cy.xpath("//div[text()='demouser']").click();
  cy.get("#password").click();
  cy.xpath("//div[text()='testingisfun99']").click();
  cy.get("#login-btn").click();
  })

})
