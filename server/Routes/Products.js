import express from "express";
import { createProduct, getAllProducts } from "../Controllers/Products.js";
import auth from "../Middleware/auth.js";
const router = express.Router();

router.get("/", getAllProducts);
router.post("/", createProduct);

export default router;
