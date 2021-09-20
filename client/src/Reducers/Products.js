import {
  GET_ALL_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "../constants/constantTypes";

const productsReducer = (products = [], action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return action.payload;

    case CREATE_PRODUCT:
      return [...products, action.payload];

    case UPDATE_PRODUCT:
      return products.map((product) =>
        product?._id === action.payload?._id ? action.payload : product
      );

    case DELETE_PRODUCT:
      return products.filter((product) => product?._id !== action?.payload?.id);

    default:
      return products;
  }
};

export default productsReducer;
