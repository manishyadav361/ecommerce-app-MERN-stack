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
  // const userId = req?.userId;
  if (!userId)
    return res.status(404).json({ message: "Please log in to continue." });
  const oldCart = await CartModel.findOne({ userId });
  if (oldCart) return;
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

// Update cart
export const updateCart = async (req, res) => {
  const { productId, quantity, userId } = req.body;
  // const userId = req.userId;
  const existingItem = await CartModel.findOne({
    userId,
    products: { $elemMatch: { productId: productId } },
  });
  // if (!existingItem)
  //   return res.status(404).send("Item not present in the cart.")
  try {
    if (!existingItem) {
      const newItem = await CartModel.findOneAndUpdate(
        { userId },
        {
          $push: { products: { productId, quantity } },
        }
      );

      res.status(200).json({ productId, quantity });
    } else {
      return res.status(404).send("Item not present in the cart.");
    }
  } catch (error) {
    console.log(error);
  }
};
