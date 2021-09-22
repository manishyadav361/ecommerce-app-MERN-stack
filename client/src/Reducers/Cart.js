import {
  CREATE_CART,
  GET_CART,
  REMOVE_CART_PRODUCT,
  UPDATE_CART,
} from "../constants/constantTypes";

const reducer = (cart = [], action) => {
  switch (action.type) {
    case CREATE_CART:
      return action.payload;
    case GET_CART:
      return action.payload;
    case UPDATE_CART:
      return cart?.products.push(action.payload);
    case REMOVE_CART_PRODUCT:
      return cart?.products?.filter(
        (product) => product?.productId === action.payload?.productId
      );
    default:
      return cart;
  }
};

export default reducer;
