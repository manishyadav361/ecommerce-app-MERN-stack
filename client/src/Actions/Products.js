import * as api from "../Api/index";

export const getAllProducts = () => async (dispatch) => {
  try {
    const { data } = await api.getAllProducts();
    dispatch({ type: "GET_ALL_PRODUCTS", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const createProduct = (productInfo, id, history) => async (dispatch) => {
  try {
    const { data } = await api.createProduct(productInfo, id);
    dispatch({ type: "CREATE_PRODUCT", payload: data });
    history.push("/admin/products");
  } catch (error) {
    console.log(error);
  }
};
