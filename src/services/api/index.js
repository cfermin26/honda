/* const API = 'https://desarrolloktm.curbe.com.ec'; */
const API = "https://desarrollohonda.curbe.com.ec";

const endPoints = {
  auth: {
    login: `${API}/api/auth/login`,
  },
  cities: {
    getCities: `${API}/api/shared/get_cities`,
  },
  paymentMethods: {
    getPaymentMethods: `${API}/api/shared/get_payment_methods_by_brand`,
  },
  products: {
    getProducts: `${API}/api/products/get_productos`,
  },
  purchaseTime: {
    getPurchaseTime: `${API}/api/shared/get_purchase_times/800/0`,
  },
  productTypes: {
    getProductTypes: `${API}/api/shared/getProductTypesByBrand`,
  },
  productCategories: {
    getProductCategories: `${API}/api/shared/getCategoriesByBrand/700`,
  },
  models: {
    getModels: `${API}/api/products/get_models`,
  },
  versions: {
    getVersions: `${API}/api/products/get_versions`,
  },
  years: {
    getYears: `${API}/api/products/get_years_version`,
  },
  colors: {
    getColors: `${API}/api/products/get_colors_version`,
  },
  agencies: {
    getAgencies: `${API}/api/shared/get_agencies`,
  },
  media: {
    getMedia: `${API}/api/leads_web/get_media`,
  },

  lead: {
    createLead: `${API}/api/leads_web/new_lead`,
  },
};

export default endPoints;
