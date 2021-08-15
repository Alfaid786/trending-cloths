import types from "./cartTypes";

export const toggleCartHidden = () => ({
  type: types.TOGGLE_HIDDEN_CART,
});

export const addItem = (item) => ({
  type: types.ADD_ITEM,
  payload: item,
});
