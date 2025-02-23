Feature: Login Functionality

    Scenario: User logs in with valid credentials
        Given I open the OrangeHRM login page
        When I enter the username "Admin"
        And I enter the password "admin123"
        And I click the login button
        Then I should be redirected to the dashboard

    Scenario: User fails to log in with invalid credentials
        Given I open the OrangeHRM login page
        When I enter the username "InvalidUser"
        And I enter the password "wrongpassword"
        And I click the login button
        Then I should see an error message
        And I capture a screenshot