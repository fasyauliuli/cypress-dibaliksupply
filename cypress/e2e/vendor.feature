Feature: cypress.com
  Background: login
    Given User login dbs

  Scenario: DBS-1>>view list vendor
    When User click "data-testid:sider-vendor"
    Then User verify element "xpath://h3[.='Vendor management']" will be displayed
    And User verify element "id:search" will be displayed
    And User verify element "id:type" will be displayed
    And User verify element "id:status" will be displayed
    And User verify element "data-testid:dd_filter_button" will be displayed
    And User verify element "data-testid:dd_reset_filter_button" will be displayed
    And User verify element "xpath://th[.='No. ID']" will be displayed
    And User verify element "xpath://th[.='Nama Perusahaan']" will be displayed
    And User verify element "xpath://th[.='Tipe']" will be displayed
    And User verify element "xpath://th[.='Alamat']" will be displayed
    And User verify element "xpath://th[.='Status']" will be displayed

  Scenario: DBS-2>>view button lengkapi when status draft
    When User click "data-testid:sider-vendor"
    And User click "id:status"
    And User click "xpath://div[text()='Draft']"
    And User click "data-testid:dd_filter_button"
    Then User verify element "xpath:(//button[.='Lengkapi'])[1]" will be displayed

  Scenario: DBS-3>>search vendor that isn't on the list
    When User click "data-testid:sider-vendor"
    And User fill "id:search" with data "kosongan"
    And User click "data-testid:dd_filter_button"
    Then User verify element text "xpath://div[text()='No data']" with data "No data"
