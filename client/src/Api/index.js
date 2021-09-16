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

export const signIn = (formData) => API.post("/auth/signin", formData);
export const signUp = (formData) => API.post("/auth/signup", formData);
export const updateUser = (updatedData, id) =>
  API.patch(`/auth/${id}`, updatedData);
export const getAllProducts = () => API.get("/products");
export const createProduct = (productInfo, id) =>
  API.post("/products", { productInfo, id });
