import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../Controllers/Products.js";
import auth from "../Middleware/auth.js";
const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProduct);
router.post("/", auth, createProduct);
router.patch("/:id", auth, updateProduct);
router.delete("/:id", auth, deleteProduct);

export default router;
