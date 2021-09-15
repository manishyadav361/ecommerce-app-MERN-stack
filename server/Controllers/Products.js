import ProductsModel from "../Models/Products.js";
export const getAllProducts = async (req, res) => {
  try {
    const products = await ProductsModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "something went wrong." });
    console.log(error);
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;
  const newProduct = new ProductsModel({
    ...product,
    createdAt: new Date().toISOString(),
    creator: product.userId,
  });
  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
    console.log(error);
  }
};

export const updateProduct = async (req, res) => {};
export const deleteProduct = async (req, res) => {};
