import {
  CREATE_CART,
  DECREMENT_QUANTITY,
  GET_CART,
  REMOVE_CART_PRODUCT,
  UPDATE_CART,
  UPDATE_QUANTITY,
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
    case UPDATE_QUANTITY:
      return cart?.products.map((product) => {
        if (product.productId === action.payload.productId) {
          product.quantity += 1;
          product.price += action.payload.total;
        }
      });
    case DECREMENT_QUANTITY:
      return cart?.products.map((product) => {
        if (product.productId === action.payload.productId) {
          product.quantity -= 1;
          product.price -= action.payload.total;
        }
      });

    default:
      return cart;
  }
};

export default reducer;
