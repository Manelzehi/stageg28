
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import AddNewCategoryElements from '../pageObject/addcategorie_Objects'
beforeEach(() => {
    cy.intercept('POST', 'https://stocky-backend-dev.uksouth.cloudapp.azure.com/api/v1/Product').as('addnewcategorie')
})


Given(`I navigate to Product categories page`, () => {

    cy.get(AddNewCategoryElements.btn_products_categories).should('be.visible').click()
    cy.wait(1000)
    cy.get(AddNewCategoryElements.Btn_add_new_product_category).should('be.visible').click()


    // [Given] Sets up the initial state of the system.
});

Then(`I should be able to add a new product category with valid details`, () => {
    const PRODUCT_CATEGORIES = [
        "Electronics & Gadgets",
        "Home Appliances",
        "Fashion & Apparel",
        "Beauty & Personal Care",
        "Furniture & Decor",
        "Kitchen & Dining",
        "Outdoor & Garden",
        "Pet Supplies",
        "Sports & Fitness",
        "Travel & Leisure",
        "Eco-Friendly Products",
        "Luxury Goods",
        "Books & Stationery",
        "Digital Products",
        "Education & Courses",
        "Professional Services"
    ]

    const titre = `Titre_${Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, 7)}`
    const description = `Description_${Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, 200)}`
    cy.get(AddNewCategoryElements.Btn_submit_product_category).should('be.visible').click()
    cy.get(AddNewCategoryElements.Block_add_new_product_category).should('be.visible')
    cy.get(AddNewCategoryElements.Input_product_category_title).type(titre)
    cy.get(AddNewCategoryElements.Input_product_category_description).type(description)



    // [Then] Describes the expected outcome or result of the scenario.
});