import * as api from "../Api/index";
import {
  UPDATE_CART,
  CREATE_CART,
  GET_CART,
  REMOVE_CART_PRODUCT,
  UPDATE_QUANTITY,
  DECREMENT_QUANTITY,
} from "../constants/constantTypes";

export const getCart = (userId) => async (dispatch) => {
  try {
    const { data } = await api.getCart(userId);
    dispatch({ type: GET_CART, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const createCart =
  (productId, quantity, userId, total) => async (dispatch) => {
    try {
      const { data } = await api.createCart(productId, quantity, userId);
      dispatch({ type: CREATE_CART, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

export const updateCart =
  (productId, quantity, userId, total) => async (dispatch) => {
    try {
      const { data } = await api.updateCart(productId, quantity, userId, total);
      dispatch({ type: UPDATE_CART, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

export const removeCartProduct = (productId, userId) => async (dispatch) => {
  try {
    const { data } = await api.removeCartProducts(productId, userId);
    dispatch({ type: REMOVE_CART_PRODUCT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateQuantity =
  (productId, userId, price) => async (dispatch) => {
    try {
      const { data } = await api.updateQuantity(productId, userId, price);
      dispatch({ type: UPDATE_QUANTITY, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
export const decrementQuantity =
  (productId, userId, price) => async (dispatch) => {
    try {
      const { data } = await api.decrementQuantity(productId, userId, price);
      dispatch({ type: DECREMENT_QUANTITY, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
