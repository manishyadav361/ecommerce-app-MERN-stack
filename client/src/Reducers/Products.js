export default (products = [], action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return action.payload;
    case "CREATE_PRODUCT":
      return [...products, action.payload];
    default:
      return products;
  }
};
