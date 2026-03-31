Feature: Add new product category

    Background:
        Given I am on the Login page
        When I enter valid credentials
        Then I should be redirected to the dashboard page
    
    Scenario: Add a new product category
        Given I navigate to Product categories page
        Then I should be able to add a new product category with valid details