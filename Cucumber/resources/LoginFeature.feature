#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
Feature: Login Functionality
  Login with valid credentials

  @Login
  Scenario Outline: Login with valid credentials
    Given Navigate to homepage
    When User enters username and password "<username>" and "<password>"
    Then user logged in successfully

    Examples: 
      | username | password    |
      | Admin    | password456 |
      | lalitha  | password123 |

  @data-driven
  Scenario: The one where user picks different product through search functionality
    Given Larry has registered in to TestMeApp
    When Larry searches below products in the search box
      | Head   |
      | Travel |
      | Laptop |
    Then product should be addded in the cart
