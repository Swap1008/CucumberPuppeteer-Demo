Feature: search in google

Scenario: Verify result for google search
    Given the browser is open
    When open the google page
    And Search for flipkart
    Then count the results