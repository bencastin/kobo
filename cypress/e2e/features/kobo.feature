Feature: Kobo360 navigation

    Feature This shows the navigation of the website.

    Background:
        Given I navigate to the website

    Scenario: Kobocare
        When I navigate to kobocare
        Then I click get started

    # Scenario: Update next of kin phone number
    #     When I click kyc information
    #     Then I update next of kin phone number

    # Scenario: Update tax rate
    #     When I click employment details
    #     Then I update tax details

    # Scenario: Add account
    #     When I click account
    #     When I enter details for the new account
    #     Then I click save

