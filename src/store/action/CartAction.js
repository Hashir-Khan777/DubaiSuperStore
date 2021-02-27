import AsyncStorage from "@react-native-async-storage/async-storage";

const Add_To_Cart = (id, name, quantity, image, price) => async (
  dispatch,
  getState
) => {
  try {
    const cart = {
      id,
      name,
      quantity,
      image,
      price,
    };
    await AsyncStorage.setItem(
      "products",
      JSON.stringify(getState().Cart.cartItems)
    );
    dispatch({
      type: "CART_ADD_ITEM",
      payload: cart,
    });
  } catch (err) {
    dispatch({ type: "CART_ADD_FAIL", payload: err.message });
  }
};

const Remove_From_Cart = (productId) => async (dispatch, getState) => {
  await AsyncStorage.setItem("products", JSON.stringify(getState().cart.cartItems));
  dispatch({ type: "CART_REMOVE_ITEM", payload: productId });
};

export { Add_To_Cart, Remove_From_Cart };
