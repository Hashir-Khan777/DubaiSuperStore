import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { CartReducer } from "./reducer/CartReducer";
import {
  CategoriesReducer,
  DepartmentReducer,
  FetchProductsReducer,
  SubCategoriesReducer,
} from "./reducer/FetchDataReducer";

const reducer = combineReducers({
  AllDepartments: DepartmentReducer,
  AllCategories: CategoriesReducer,
  AllSubCategories: SubCategoriesReducer,
  AllProducts: FetchProductsReducer,
  Cart: CartReducer,
});

const Store = createStore(reducer, compose(applyMiddleware(thunk)));

export default Store;
