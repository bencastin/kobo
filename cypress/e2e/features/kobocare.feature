Feature: Kobo360 navigation to kobocare

    Feature This shows the navigation of the website to kobocare.

    Background:
        Given I navigate to the website

    Scenario: Kobocare
        When I navigate to kobocare
        Then I click get started on the kobocare page
    


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

