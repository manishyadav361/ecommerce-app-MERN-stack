import {
  CREATE_CART,
  DECREMENT_QUANTITY,
  GET_CART,
  REMOVE_CART_PRODUCT,
  UPDATE_CART,
  UPDATE_QUANTITY,
} from "../constants/constantTypes";

const reducer = (state = { cart: null, total: 0 }, action) => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case CREATE_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case UPDATE_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          products: [...state.cart.products, action.payload],
        },
      };
    case UPDATE_QUANTITY:
      state.cart.products.map((product) => {
        if (product.productId === action.payload.productId) {
          product.quantity += 1;
          product.total += action.payload.total;
        }
      });
      return {
        ...state,
        cart: { ...state.cart, products: [...state.cart.products] },
      };
    case DECREMENT_QUANTITY:
      state.cart.products.map((product) => {
        if (product.productId === action.payload.productId) {
          product.quantity -= 1;
          product.total -= action.payload.total;
        }
      });
      return {
        ...state,
        cart: { ...state.cart, products: [...state.cart.products] },
      };

    case REMOVE_CART_PRODUCT:
      const removeProduct = state.cart.products.filter(
        (product) => product.productId !== action.payload.productId
      );
      return {
        ...state,
        cart: {
          ...state.cart,
          products: removeProduct,
        },
      };
    default:
      return state;
  }
};
export default reducer;
