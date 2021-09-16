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
  const {
    title,
    category,
    inStock,
    freeShipping,
    discountedPrice,
    price,
    specification,

    keyword,
    imageUrl,
    shippingCharges,
  } = req.body.productInfo;

  try {
    const newProduct = await ProductsModel.create({
      category,
      inStock,
      freeShipping,
      discountedPrice,
      price,
      specification,
      title,
      keyword,
      imageUrl,
      shippingCharges,
      createdAt: new Date().toISOString(),
      creator: req.body.id,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const updateProduct = async (req, res) => {};
export const deleteProduct = async (req, res) => {};
