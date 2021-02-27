import AsyncStorage from "@react-native-async-storage/async-storage";

const INITIAL_STATE = {
  cartItems: [],
};

const getData = async () => {
  try {
    const data = await AsyncStorage.getItem("products");
    if (data !== null) {
      INITIAL_STATE.cartItems = JSON.parse(data);
    }
  } catch (err) {
    console.log(err.message);
  }
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CART_ADD_ITEM":
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.id === item.id);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === existItem.id ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case "CART_REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== action.payload),
      };

    case "CART_ADD_FAIL":
      return {
        error: action.payload,
      };

    default:
      return state;
  }
};

getData();

export { CartReducer };
