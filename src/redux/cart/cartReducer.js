import types from "./cartTypes";
import { addItemToCart } from "./cartUtility";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.TOGGLE_HIDDEN_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case types.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
