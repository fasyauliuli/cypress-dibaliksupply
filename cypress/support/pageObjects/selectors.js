export default {
    //login
    username: '#username',
    password: '#password',
    bt_masuk: '//button[.="Masuk"]',

    //list sku
    dd_sku_management: "//span[.='SKU Management']",
    menu_sku: '[data-testid="sider-sku-management-sku"]',
    title_sku_list: "//h3[.='SKU']",
    bt_create: '[data-testid="btn_create"]',
    field_search: '[data-testid="sku_list_page-search-input"]',
    brand_name: '#brand_name',
    product_name: '#product_name',
    category_name: '#category_name',
    bt_filter: '[data-testid="dd_filter_button"]',
    bt_reset: '[data-testid="dd_reset_filter_button"]',
    col_kode_sku: "//th[.='Kode SKU']",
    col_nama_sku: "//th[.='Nama SKU']",
    col_kategori: "//th[.='Kategori']",
    col_status: "//th[.='Status']",
    bt_detail: '[data-testid="btn_show_1"]',
    list_sku: '[data-testid="sku_list_page-table"]',
    dd_fish_feed: "(//div[text()='Fish Feed'])[2]",
    search_no_data: "//div[text()='No SKU Data']",

    //create
    bt_create: '[data-testid="btn_create"]',
    title_create_sku: "//h3[.='Create Sku']",
    dd_brand_name: "//div[text()='testCobax']",
    dd_category_name: '#product_category_name',
    vitamin_category: "//div[text()='Vitamin']",
    dd_uom: '#uom_name',
    uom_pack: "//div[text()='Pack']",
    dd_commodity: '#commodity',
    commodity_nilem: "//div[text()='Nilem']",
    radio_b2b: '[value="B2B"]',
    radio_b2c: '[value="B2C"]',
    radio_tax: '[value="NO TAX"]',
    weight: '#weight',
    weight_uom: '#weight_uom',
    gr_uom: "//div[text()='Gr']",
    sku_name: '[data-testid="txtfld_sku_name"]',
    sku_code: '[data-testid="txtfld_sku_code"]',
    upload_image_success: "//div[@class='ant-upload-list-item ant-upload-list-item-done']",
    bt_register: '[data-testid="btn_register"]',
    bt_confirm: "(//button[.='Simpan'])[3]",
    success_submit_sku: "//div[contains(text(),'SKU berhasil ditambahkan')]",

    //detail
    title_detail_sku: "//h3[.='Detail SKU']",
    bt_edit: '[data-testid="btn_edit"]',
    detail_sku_name: '[data-testid="txt_sku_name"]',
    detail_sku_code: '[data-testid="txt_sku_code"]',
    status_sku: '[data-testid="tag-status"]',
    detail_category: '[data-testid="txt_product_category_complete_name"]',
    detail_packaging: '[data-testid="txt_packaging_type"]',
    detail_tax: '[data-testid="txt_tax"]',
    detail_weight: '[data-testid="txt_weight"]',
    detail_dimension: '[data-testid="txt_dimension"]',
    detail_nutritions: '[data-testid="txt_sku_nutritions"]',

    //edit
    title_edit_sku: "//h3[.='Edit Sku']",
    edit_product_name: '[data-testid="txtfld_product_name"]',
    edit_weight: '[data-testid="txtfld_weight"]',
    length: '[data-testid="txtfld_length"]',
    width: '[data-testid="txtfld_width"]',
    height: '[data-testid="txtfld_height"]',

    //deactive
    switch_status_sku: '[data-testid="switch_sku_active"]',
    input_reason: '[data-testid="txt_remark"]',
    submit_status: '[data-testid="btn_sku_status_submit"]',
    bt_confirm_status: '#btn_sku_status_confirm_submit',
    success_nonaktif_sku: "//div[contains(text(),'SKU berhasil dinonaktifkan.')]",

    //vendor
    menu_vendor: 'data-testid:sider-vendor'
};