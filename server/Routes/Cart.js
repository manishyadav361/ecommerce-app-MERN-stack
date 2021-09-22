import express from "express";
import {
  createCart,
  getCart,
  removeCartProduct,
  updateCart,
} from "../Controllers/Cart.js";
import auth from "../Middleware/auth.js";

const router = express.Router();
router.get("/:userId", getCart);
router.post("/", createCart);
router.patch("/update", updateCart);
router.patch("/update/:productId", removeCartProduct);
export default router;
