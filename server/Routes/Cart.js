import express from "express";
import { createCart, getCart } from "../Controllers/Cart.js";

const router = express.Router();
router.get("/:userId", getCart);
router.post("/", createCart);
export default router;
