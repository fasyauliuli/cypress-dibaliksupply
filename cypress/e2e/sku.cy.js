require('@cypress/xpath');
const faker = require('faker');
import selectors from '../support/pageObjects/selectors.js';
// const { beforeEach } = require("mocha")

describe('template spec', () => {
  it('login', () => {
    cy.visit(Cypress.env('baseUrl'))

    //login
    cy.get(selectors.username).type(Cypress.env('email'))
    cy.get(selectors.password).type(Cypress.env('password'))
    cy.xpath(selectors.bt_masuk).click()
  })

  it('view list sku', () => {
    //view list
    cy.xpath(selectors.dd_sku_management).click()
    cy.get(selectors.menu_sku).click()
    cy.xpath(selectors.title_sku_list).should('have.text', 'SKU')
    cy.get(selectors.bt_create).should('have.text', 'Tambah SKU')
    cy.get(selectors.field_search).should('be.visible')
    cy.get(selectors.brand_name).should('be.visible')
    cy.get(selectors.product_name).should('be.visible')
    cy.get(selectors.category_name).should('be.visible')
    cy.get(selectors.bt_filter).should('have.text', 'Filter')
    cy.get(selectors.bt_reset).should('have.text', 'Reset')
    cy.xpath(selectors.col_kode_sku).should('have.text', 'Kode SKU')
    cy.xpath(selectors.col_nama_sku).should('have.text', 'Nama SKU')
    cy.xpath(selectors.col_kategori).should('have.text', 'Kategori')
    cy.xpath(selectors.col_status).should('have.text', 'Status')
    cy.get(selectors.bt_detail).should('have.text', 'Detail')
  })

  it('search data', () => {
    //search data
    cy.get(selectors.field_search).type('kmp')
    cy.get(selectors.bt_filter).click()
    cy.get(selectors.list_sku).contains('KMP')
    cy.get(selectors.bt_reset).click()

    //search combined data
    cy.get(selectors.field_search).type('kmp')
    cy.get(selectors.category_name).type('Fish Feed')
    cy.xpath(selectors.dd_fish_feed).click()
    cy.get(selectors.bt_filter).click()
    cy.get(selectors.list_sku).contains('KMP')
    cy.get(selectors.list_sku).contains('Fish Feed')
    cy.get(selectors.bt_reset).click()

    //search no data
    cy.get(selectors.field_search).type('smoke test')
    cy.get(selectors.bt_filter).click()
    cy.xpath(selectors.search_no_data).should('have.text', 'No SKU Data')
  })

  it('create sku', () => {
    const product = faker.commerce.productName();

    //create page
    cy.get(selectors.bt_create).click()
    cy.xpath(selectors.title_create_sku).should('have.text', 'Create Sku')

    //e2e create sku
    cy.get(selectors.brand_name).type('testcobax')
    cy.xpath(selectors.dd_brand_name).click()
    cy.get(selectors.dd_category_name).type('vitamin')
    cy.xpath(selectors.vitamin_category).click()
    cy.get(selectors.product_name).type(product)
    cy.get(selectors.dd_uom).type('pack')
    cy.xpath(selectors.uom_pack).click()
    cy.get(selectors.dd_commodity).type('nilem')
    cy.xpath(selectors.commodity_nilem).click()
    cy.get(selectors.radio_b2b).click()
    cy.get(selectors.radio_b2c).click()
    cy.get(selectors.radio_tax).click()
    cy.get(selectors.weight).type('50')
    cy.get(selectors.weight_uom).type('gr')
    cy.xpath(selectors.gr_uom).click()
    cy.get(selectors.sku_name).should('not.have.value', '')
    cy.get(selectors.sku_code).should('not.have.value', '')

    // Load a file from fixtures
    cy.fixture('macaroon.jpeg').then(fileContent => {
      // Attach the file to the file input
      cy.get('input[type="file"]').attachFile({
        fileContent: fileContent,
        fileName: 'macaroon.jpeg',
        mimeType: 'image/jpeg'
      });
    });

    cy.xpath(selectors.upload_image_success).should('be.visible')
    cy.get(selectors.bt_register).click()
    cy.xpath(selectors.bt_confirm).click()
    cy.xpath(selectors.success_submit_sku).should('be.visible')
  })

  it('detail sku', () => {
    //detail page
    cy.get(selectors.field_search).type('testcobax')
    cy.get(selectors.bt_filter).click()
    cy.get(selectors.bt_detail).click()
    cy.xpath(selectors.title_detail_sku).should('be.visible')
    cy.get(selectors.bt_edit).should('be.enabled')
    cy.get(selectors.detail_sku_name).should('be.visible')
    cy.get(selectors.detail_sku_code).should('be.visible')
    cy.get(selectors.status_sku).should('be.visible')
    cy.get(selectors.detail_category).should('be.visible')
    cy.get(selectors.detail_packaging).should('be.visible')
    cy.get(selectors.detail_tax).should('be.visible')
    cy.get(selectors.detail_weight).should('be.visible')
    cy.get(selectors.detail_dimension).should('be.visible')
    cy.get(selectors.detail_nutritions).should('be.visible')
  })

  it('edit sku', () => {
    //edit
    cy.get(selectors.bt_edit).click()
    cy.xpath(selectors.title_edit_sku).should('be.visible')
    cy.get(selectors.brand_name).should('be.disabled')
    cy.get(selectors.dd_category_name).should('be.disabled')
    cy.get(selectors.edit_product_name).should('be.disabled')
    cy.get(selectors.dd_uom).should('be.disabled')
    cy.get(selectors.dd_commodity).should('be.disabled')
    cy.get(selectors.radio_b2b).should('be.disabled')
    cy.get(selectors.radio_b2c).should('be.disabled')
    cy.get(selectors.edit_weight).should('be.disabled')
    cy.get(selectors.weight_uom).should('be.disabled')
    cy.get(selectors.length).type('10')
    cy.get(selectors.width).type('3')
    cy.get(selectors.height).type('5')
    cy.get(selectors.bt_register).click()
    cy.xpath(selectors.bt_confirm).click()
    cy.xpath(selectors.title_detail_sku).should('be.visible')
    cy.wait(2000)

    //deactive sku
    cy.get(selectors.switch_status_sku).click()
    cy.get(selectors.input_reason).type('udah ga dijual')
    cy.get(selectors.submit_status).click()
    cy.get(selectors.bt_confirm_status).click()
    cy.xpath(selectors.success_nonaktif_sku).should('be.visible')
    cy.get(selectors.status_sku).should('have.text', 'Non-aktif')
    cy.get(selectors.switch_status_sku).should('be.disabled')
  })
})