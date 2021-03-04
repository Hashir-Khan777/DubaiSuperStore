import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { CartReducer } from "./reducer/CartReducer";
import {
  CategoriesReducer,
  DepartmentReducer,
  FetchBrandReducer,
  FetchProductsReducer,
  SubCategoriesReducer,
  FetchAreaReducer,
  FetchHotProductsReducer,
  FetchSaleProductsReducer,
} from "./reducer/FetchDataReducer";

const reducer = combineReducers({
  AllDepartments: DepartmentReducer,
  AllCategories: CategoriesReducer,
  AllSubCategories: SubCategoriesReducer,
  AllProducts: FetchProductsReducer,
  Cart: CartReducer,
  AllBrands: FetchBrandReducer,
  AllAreas: FetchAreaReducer,
  ToRatedProducts: FetchHotProductsReducer,
  TopSaleProducts: FetchSaleProductsReducer,
});

const Store = createStore(reducer, compose(applyMiddleware(thunk)));

export default Store;
