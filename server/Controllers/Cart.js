import CartModel from "../Models/Cart.js";

export const getAllCart = async (req, res) => {
  const userId = req.userId;
  try {
    const cart = await CartModel.find({ userId });
    res.status(200).json(cart);
  } catch (error) {}
};

// export const createCart = async (req, res) => {
//   const { productId, quantity, userId } = req.body;

//   try {
//     const cart = await CartModel.create({
//       userId,
//       products: [{ quantity, productId }],
//     });
//     res.status(201).json(cart);
//   } catch (error) {
//     res.status(500).json({ message: "something went wrong." });
//     console.log(error);
//   }
// };

export const updateCart = async (req, res) => {};
