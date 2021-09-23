import express from "express";
import {
  createCart,
  decrementQuantity,
  getCart,
  incrementQuantity,
  removeCartProduct,
  updateCart,
} from "../Controllers/Cart.js";
import auth from "../Middleware/auth.js";

const router = express.Router();
router.get("/:userId", getCart);
router.post("/", createCart);
router.patch("/update", updateCart);
router.patch("/update/:productId", removeCartProduct);
router.patch("/update/increment/:productId", incrementQuantity);
router.patch("/update/decrement/:productId", decrementQuantity);

export default router;
