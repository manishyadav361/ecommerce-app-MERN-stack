import mongoose from "mongoose";

const productsSchema = mongoose.Schema({
  category: { type: String, required: true },
  inStock: { type: Boolean, required: true },
  price: { type: Number, required: true },
  keyword: { type: String, required: true },
  title: { type: String, required: true },
  ratings: { type: Number },
  imageUrl: { type: String, required: true },
  specification: { type: String },
  discountedPrice: { type: Number },
  shippingCharges: { type: String },
  freeShipping: { type: Boolean },
  createdAt: { type: Date, default: new Date() },
  creator: { type: String, required: true },
});

var ProductsModel = mongoose.model("Products", productsSchema);
export default ProductsModel;
