/// <reference types="Cypress" />
import HomePage from '../pageObject/HomePage'
import ProductsePage from '../pageObject/ProductsPage'
import ShopPage from '../pageObject/ShopPage'
import PurchasePage from '../pageObject/PurchasePage'

describe('Hooks Setup',function()
{

    before(function()
    {

    cy.fixture('Fixture').then(function(data)
    {

        this.data=data

    })

    })

    it('Hooks Setup', function() {

    
    const homepage=new HomePage()
    const productpage=new ProductsePage()
    const shoppage=new ShopPage()
    const purchasepage=new PurchasePage()

    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    homepage.getEditBox().type(this.data.Name)
    homepage.getGender().select(this.data.Gender)
            
     //Validating attribute properties and their behaviour with cypress assertions
    homepage.getTwoWayDataBiding().should('have.value',this.data.Name)
    homepage.getEditBox().should('have.attr','minlength','2')
    homepage.getEntrepreneur().should('be.disabled')
    homepage.getShopTab().click()
           

    this.data.productName.forEach(function(element)
    {

        cy.selectProduct(element)
                
    });

    productpage.getcheckout().click()

    cy.get('tr td:nth-child(4) strong').each(($el,index,$list) =>{

        cy.log($el.text())



    })
    shoppage.getCheckoutbutton().click()
 

    purchasepage.getSelectCountry().type('india')
    cy.get('.suggestions > ul > li > a').click()
    purchasepage.getCheckbox().click({force: true})
    purchasepage.getpurchasebutton().click()
    purchasepage.getalert().then(function(element){
    
    
    const actualtext=element.text()
    expect(actualtext.includes('Success')).to.be.true


    })

           

    })



})
