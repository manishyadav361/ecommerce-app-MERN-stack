import mongoose from "mongoose";

const CartSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: String,
        quantity: { type: Number, default: 0 },
        total: { type: Number, default: 0 },
      },
    ],
  },
  { timestamps: true }
);

const CartModel = mongoose.model("cart", CartSchema);
export default CartModel;
