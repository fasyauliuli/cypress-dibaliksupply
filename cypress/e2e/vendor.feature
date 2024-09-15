Feature: cypress.com
  Background: login
    Given User login dbs

  Scenario: DBS-1>>view list vendor
    When User click "menu_vendor"
    Then User verify element "title_vendor" will be displayed
    And User verify element "search" will be displayed
    And User verify element "type" will be displayed
    And User verify element "status" will be displayed
    And User verify element "bt_filter" will be displayed
    And User verify element "bt_reset" will be displayed
    And User verify element "th_no_id" will be displayed
    And User verify element "th_company_name" will be displayed
    And User verify element "th_type" will be displayed
    And User verify element "th_alamat" will be displayed
    And User verify element "th_status" will be displayed

  Scenario: DBS-2>>view button lengkapi when status draft
    When User click "menu_vendor"
    And User click "status"
    And User click "dd_status_draft"
    And User click "bt_filter"
    Then User verify element "bt_lengkapi" will be displayed

  Scenario: DBS-3>>search vendor that isn't on the list
    When User click "menu_vendor"
    And User fill "search" with data "kosongan"
    And User click "bt_filter"
    Then User verify element text "search_no_data" with data "No data"
