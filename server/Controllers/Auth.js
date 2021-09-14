import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import UserModel from "../Models/Auth.js";

const secret = "test";

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const oldUser = await UserModel.findOne({ email });
    if (!oldUser)
      return res
        .status(404)
        .json({ message: "cannot find user with email", email });
    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
    if (!isPasswordCorrect)
      res.status(400).json({ mesage: "Incorrect Password" });
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "1h",
    });
    res.status(200).json({ result: oldUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
    console.log(error);
  }
};
export const signUp = async (req, res) => {
  const { email, password, firstname, lastname, confirmpassword, imageUrl } =
    req.body;
  try {
    const oldUser = await UserModel.findOne({ email });
    if (oldUser)
      return res.status(400).json({ message: "User Already Exists." });
    if (password !== confirmpassword)
      return res.status(400).json({ message: "Incorrect password" });
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await UserModel.create({
      email,
      password: hashedPassword,
      name: `${firstname} ${lastname}`,
      imageUrl,
    });
    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "1h",
    });
    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};
