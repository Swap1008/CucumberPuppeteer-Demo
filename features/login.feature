Feature: Manager Login

Scenario: Verify login status
Given the browser is open
When open banking login page
And Enter username and password
And Click on login button
Then user should be redirected to homepage