// selectors.js
export const selectorsVendor = {

    //list vendor
    menu_vendor: 'data-testid:sider-vendor',
    title_vendor: "xpath://h3[.='Vendor management']",
    search: 'id:search',    
    type: 'id:type',    
    status: 'id:status',    
    bt_filter: 'data-testid:dd_filter_button',    
    bt_reset: 'data-testid:dd_reset_filter_button',    
    th_no_id: "xpath://th[.='No. ID']", 
    th_company_name: "xpath://th[.='Nama Perusahaan']", 
    th_type: "xpath://th[.='Tipe']", 
    th_alamat: "xpath://th[.='Alamat']", 
    th_status: "xpath://th[.='Status']",
    dd_status_draft: "xpath://div[text()='Draft']",
    bt_lengkapi: "xpath:(//button[.='Lengkapi'])[1]",
    search_no_data: "xpath://div[text()='No data']"
  };
  