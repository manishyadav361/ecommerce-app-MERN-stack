import express from "express";
import { signIn, updateUser, signUp } from "../Controllers/Auth.js";
import auth from "../Middleware/auth.js";
const router = express.Router();

router.post("/signin", signIn);
router.post("/signup", signUp);
router.patch("/:id", auth, updateUser);

export default router;
