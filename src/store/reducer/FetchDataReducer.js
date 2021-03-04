const INITIAL_STATE = {
  Departments: [],
  Categories: [],
  SubCategories: [],
  Products: [],
  Brands: [],
  Areas: [],
  HotProducts: [],
  SaleProducts: [],
};

const DepartmentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_DEPARTMENT_REQUEST":
      return {
        loading: true,
      };

    case "FETCH_DEPARTMENT_SUCCESS":
      return {
        loading: false,
        Departments: action.payload,
      };

    case "FETCH_DEPARTMENT_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const CategoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_CATEGORIES_REQUEST":
      return {
        loading: true,
      };

    case "FETCH_CATEGORIES_SUCCESS":
      return {
        loading: false,
        Categories: action.payload,
      };

    case "FETCH_CATEGORIES_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const SubCategoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_SUB_CATEGORIES_REQUEST":
      return {
        loading: true,
      };

    case "FETCH_SUB_CATEGORIES_SUCCESS":
      return {
        loading: false,
        SubCategories: action.payload,
      };

    case "FETCH_SUB_CATEGORIES_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const FetchProductsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      return {
        loading: true,
      };

    case "FETCH_PRODUCTS_SUCCESS":
      return {
        loading: false,
        Products: action.payload,
      };

    case "FETCH_PRODUCTS_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const FetchHotProductsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_HOT_PRODUCTS_REQUEST":
      return {
        loading: true,
      };

    case "FETCH_HOT_PRODUCTS_SUCCESS":
      return {
        loading: false,
        HotProducts: action.payload,
      };

    case "FETCH_HOT_PRODUCTS_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const FetchSaleProductsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_SALE_PRODUCTS_REQUEST":
      return {
        loading: true,
      };

    case "FETCH_SALE_PRODUCTS_SUCCESS":
      return {
        loading: false,
        SaleProducts: action.payload,
      };

    case "FETCH_SALE_PRODUCTS_FAIL":
      return {
        loading: false,
        Saleerror: action.payload,
      };

    default:
      return state;
  }
};

const FetchBrandReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_BRAND_REQUEST":
      return {
        loading: true,
      };

    case "FETCH_BRAND_SUCCESS":
      return {
        loading: false,
        Brands: action.payload,
      };

    case "FETCH_BRAND_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const FetchAreaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_AREA_REQUEST":
      return {
        loading: true,
      };

    case "FETCH_AREA_SUCCESS":
      return {
        loading: false,
        Areas: action.payload,
      };

    case "FETCH_AREA_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export {
  DepartmentReducer,
  CategoriesReducer,
  SubCategoriesReducer,
  FetchProductsReducer,
  FetchBrandReducer,
  FetchAreaReducer,
  FetchHotProductsReducer,
  FetchSaleProductsReducer,
};
