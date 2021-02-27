import axios from "axios";
import Axios from "axios";

const Fetch_Departments = () => async (dispatch) => {
  dispatch({ type: "FETCH_DEPARTMENT_REQUEST" });
  try {
    const { data } = await Axios.get(
      "https://www.dubaisuperstore.com.pk/myapi/SKUDepartment"
    );
    dispatch({
      type: "FETCH_DEPARTMENT_SUCCESS",
      payload: data[0].sKUDepartmentDetail,
    });
  } catch (err) {
    dispatch({
      type: "FETCH_DEPARTMENT_FAIL",
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

const Fetch_Categories = () => async (dispatch) => {
  dispatch({ type: "FETCH_CATEGORIES_REQUEST" });
  try {
    const { data } = await Axios.get(
      "https://www.dubaisuperstore.com.pk/myapi/SkuCategory"
    );
    dispatch({
      type: "FETCH_CATEGORIES_SUCCESS",
      payload: data[0].skuCategoryDetail,
    });
  } catch (err) {
    dispatch({
      type: "FETCH_CATEGORIES_FAIL",
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

const Fetch_Sub_Categories = () => async (dispatch) => {
  dispatch({ type: "FETCH_SUB_CATEGORIES_REQUEST" });
  try {
    const { data } = await Axios.get(
      "https://www.dubaisuperstore.com.pk/myapi/SkuSubCategory"
    );
    dispatch({
      type: "FETCH_SUB_CATEGORIES_SUCCESS",
      payload: data[0].sKUSubCategoryDetail,
    });
  } catch (err) {
    dispatch({
      type: "FETCH_SUB_CATEGORIES_FAIL",
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

const Fetch_Products = () => async (dispatch) => {
  dispatch({ type: "FETCH_PRODUCTS_REQUEST" });
  try {
    const { data } = await axios.get(
      "https://www.dubaisuperstore.com.pk/myapi/Product"
    );
    dispatch({
      type: "FETCH_PRODUCTS_SUCCESS",
      payload: data[0].productDetail,
    });
  } catch (err) {
    dispatch({
      type: "FETCH_PRODUCTS_FAIL",
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export {
  Fetch_Departments,
  Fetch_Categories,
  Fetch_Sub_Categories,
  Fetch_Products,
};
