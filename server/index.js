import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import authRoutes from "./Routes/Auth.js";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;
const url =
  "mongodb+srv://manish361:ecommercestore@cluster0.qa6ih.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use("/auth", authRoutes);
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected to db");
    app.listen(PORT, () => console.log("connected to server"));
  })
  .catch((error) => console.log(error));
