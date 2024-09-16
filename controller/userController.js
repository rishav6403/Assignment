import User from "../model/userModel.js";
import bcrypt from 'bcrypt';
import { setUser } from "../utils/jwtToken.js";

export const signup = async (req, res) => {
  try {
    const { firstName, lastName, password, confirmPassword, email } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).send({ error: "Passwords do not match" });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).send({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      firstName,
      lastName,
      password: hashedPassword,
      email,
    });
   return res.redirect("/login");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid username" });
    
    const correctPassword = await bcrypt.compare(password, user.password);
    if (!correctPassword) return res.status(400).json({ error: "Invalid password" });
    
    const token = setUser(user);
    res.cookie("token", token, {
      expires: new Date(Date.now() + 86400000),
      httpOnly: true,
    });

    return res.redirect("/");
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
