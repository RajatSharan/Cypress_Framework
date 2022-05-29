/// <reference types="Cypress" />


describe('Hooks Setup',function(){

    before(function(){

        cy.fixture('Fixture').then(function(data)
        {

            this.data=data

        })

      })

    it('Hooks Setup', function() {

            cy.visit('https://rahulshettyacademy.com/angularpractice/')
            cy.get("input[name='name']:nth-child(2)").type(this.data.Name)
            cy.get('select').select(this.data.Gender)
            
            //Validating attribute properties and their behaviour with cypress assertions
            cy.get('input[name="name"]:nth-child(1)').should('have.value',this.data.Name)
            cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
            cy.get('#inlineRadio3').should('be.disabled')
            cy.get(':nth-child(2) > .nav-link').click()
           

            this.data.productName.forEach(function(element){

                cy.selectProduct(element)
                
            });
           


    })



})
