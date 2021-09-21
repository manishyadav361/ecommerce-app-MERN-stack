import CartModel from "../Models/Cart.js";

export const getCart = async (req, res) => {
  const userId = req.params.userId;
  try {
    const cart = await CartModel.findOne({ userId });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(cart);
    console.log(error);
  }
};

export const createCart = async (req, res) => {
  const { productId, quantity, userId } = req.body;
  const oldCart = await CartModel.findOne({ userId });
  if (oldCart) return res.status(403).send("already exists");
  try {
    const cart = await CartModel.create({
      userId,
      products: {
        quantity,
        productId,
      },
    });
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
    console.log(error);
  }
};
