import mongoose from "mongoose";

const CartSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [{ productId: String, quantity: Number }],
  },
  { timestamps: true }
);

const CartModel = mongoose.model("cart", CartSchema);
export default CartModel;
