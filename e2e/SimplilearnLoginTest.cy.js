Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});


describe('This file will cover all the simplilearn login scenarios', () => {
  beforeEach(() =>{

    cy.visit('https://www.simplilearn.com/');
  })

  it('Validate Login Success', () => {
    
    LoginFunction('abc@xyz.com','Abcd123');
  })

  it('Validate Login Failure', () => {
    
    LoginFunction('abc@xyz.com','ABCD123');
    cy.get('div#msg_box').contains('The email or password you have entered is invalid.');
  })

})

function LoginFunction(UserName,Password){

  cy.get('a.login').click();
    cy.get('input.email').type(UserName);
    cy.get('input#password').type(Password);
    cy.get('input#remember-me').click();
    cy.get('input[title="Login"]').click();

}


