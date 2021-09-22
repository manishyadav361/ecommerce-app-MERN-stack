import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const signIn = (formData) => API.post("/auth/signin", formData); // POST REQUEST FOR SENDING SIGNIN FORM DATA
export const signUp = (formData) => API.post("/auth/signup", formData); // POST REQUEST FOR SENDING SIGNUP FORM DATA
export const updateUser = (updatedData, id) =>
  API.patch(`/auth/${id}`, updatedData); // PATCH REQUEST FOR UPDATING USER PROFILE DATA

export const getAllProducts = () => API.get("/products"); // GET REQUEST FOR GETTING ALL PRODUCTS

export const getProduct = (id) => API.get(`/products/${id}`); // GET REQUEST FOR GETTING A SINGLE PRODUCT

export const createProduct = (productInfo, id) =>
  API.post("/products", { productInfo, id }); // POST REQUEST FOR SENDING PRODUCTS DETAILS

export const updateItem = (productInfo, id) =>
  API.patch(`/products/${id}`, productInfo); // PATCH REQUEST FOR UPDATING EXISTING  PRODUCT

export const deleteItem = (id) => API.delete(`/products/${id}`); // DELETE REQUEST FOR DELETING A PRODUCT

export const createCart = (productId, quantity, userId) =>
  API.post("/cart", { productId, quantity, userId });

export const getCart = (userId) => API.get(`/cart/${userId}`);

export const updateCart = (productId, quantity, userId) =>
  API.patch("/cart/update", { productId, quantity, userId });

export const removeCartProducts = (productId, userId) =>
  API.patch(`/cart/update/${productId}`, { userId });
