import * as api from "../Api/index";
import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  GET_ALL_PRODUCTS,
  UPDATE_PRODUCT,
} from "../constants/constantTypes";

// FETCHING ALL PRODUCTS
export const getAllProducts = () => async (dispatch) => {
  try {
    const { data } = await api.getAllProducts();
    dispatch({ type: GET_ALL_PRODUCTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// GET A SINGLE PRODUCT
export const getProduct = (id, history) => async (dispatch) => {
  try {
    const { data } = await api.getProduct(id);
    dispatch({ type: "GET_PRODUCT", payload: data });
    history.push(`/${id}`);
  } catch (error) {
    console.log(error);
  }
};

// CREATING A PRODUCT - ADMIN_PANEL
export const createProduct = (productInfo, id, history) => async (dispatch) => {
  try {
    const { data } = await api.createProduct(productInfo, id);
    dispatch({ type: CREATE_PRODUCT, payload: data });
    history.push("/admin/products");
  } catch (error) {
    console.log(error);
  }
};

// UPDATING THE PRODUCT - ADMIN_PANEL
export const updateItem = (productInfo, id, history) => async (dispatch) => {
  try {
    const { data } = await api.updateItem(productInfo, id);
    dispatch({ type: UPDATE_PRODUCT, payload: data });
    history.push("/admin/products");
  } catch (error) {
    console.log(error);
  }
};

// DELETING THE PRODUCT - ADMIN_PANEL
export const deleteItem = (id, history) => async (dispatch) => {
  try {
    await api.deleteItem(id);
    dispatch({ type: DELETE_PRODUCT, payload: id });
    history.push("/admin/products");
  } catch (error) {
    console.log(error);
  }
};
