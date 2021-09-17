import express from "express";
import {
  createProduct,
  getAllProducts,
  updateProduct,
} from "../Controllers/Products.js";
import auth from "../Middleware/auth.js";
const router = express.Router();

router.get("/", auth, getAllProducts);
router.post("/", auth, createProduct);
router.patch("/:id", updateProduct);

export default router;
