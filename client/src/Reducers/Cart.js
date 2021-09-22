import { CREATE_CART, GET_CART, UPDATE_CART } from "../constants/constantTypes";

const reducer = (cart = [], action) => {
  switch (action.type) {
    case CREATE_CART:
      return action.payload;
    case GET_CART:
      return action.payload;
    case UPDATE_CART:
      return cart?.products.push(action.payload);
    default:
      return cart;
  }
};

export default reducer;
