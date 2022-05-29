// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Customise cypress command
Cypress.Commands.add('selectProduct', (productname) => { 

    cy.get(':nth-child(2) > .nav-link').click()
    cy.get('h4.card-title').each(($e1,index,$list) =>{

            const text =$e1.text();
            if(text.includes('Blackberry'))
            {

                cy.get('button.btn.btn-info').eq(index).click()

            }


    })





})