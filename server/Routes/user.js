const express = require("express");
const { User, Product, Cart } = require("../database/index");
const { authenticateJwt, SECRET } = require("../middleware/auth");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    res.status(403).json({ message: "User already exists" });
  } else {
    const CustomerId = Math.floor(Math.random() * 10000);
    const newUser = new User({ username, password, CustomerId });
    await newUser.save();
    const token = jwt.sign({ username, role: "user" }, SECRET, {
      expiresIn: "1h",
    });
    res
      .status(200)
      .json({ message: "User created successfully", token, CustomerId });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    const token = jwt.sign({ username, role: "user" }, SECRET, {
      expiresIn: "1h",
    });
    res.json({ message: "Logged in successfully", token, user });
  } else {
    res.status(403).json({ message: "Invalid username or password" });
  }
});

// router.post("/product/:Id", async (req, res) => {
//   const products = await Product.find({ ProductID: req.params.Id });
//   res.json({ products });
// });

router.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.json({ products });
});
router.get("/me", authenticateJwt, async (req, res) => {
  const CustomerId = req.body.CustomerId;
  const userInfo = await User.find({ CustomerId });
  res.json({ userInfo });
});

router.get("/mycart", authenticateJwt, async (req, res) => {
  try {
    const CustomerId = req.body.CustomerId;
    const cart = await Cart.find({ CustomerId });
    res.status(200).json({ cart });
  } catch (error) {
    res.status(403).json("internal server errror");
  }
});

router.post("/addproduct/:productId", authenticateJwt, async (req, res) => {
  const CustomerId = req.body.CustomerId;
  try {
    const user = await User.findOne({ CustomerId });
    const cart = await Cart.findOne({ CustomerId: req.body.CustomerId });
    if (cart) {
      await cart.save();
    }
    if (!cart) {
      const newcart = new Cart({ CustomerId });
      await newcart.save();
    }
    const product = await Product.findOne({
      ProductID: req.params.productId,
    });
    if (product) {
      cart.products.push(product);
      await cart.save();
      res.json({ message: "Product added to Cart" });
      await user.save();
    } else {
      res.status(403).json({ message: "Product not found" });
    }
  } catch (error) {
    res
      .status(403)
      .json({ message: "Internal server error", error: error.message });
  }
});

router.post("/cart", authenticateJwt, async (req, res) => {
  try {
    const CustomerId = req.body.CustomerId;
    const user = await User.findOne({ CustomerId });
    if (user) {
      const cart = await Cart.findOne({ CustomerId });
      if (cart) {
        res.status(403).json({ message: "cart found", cart });
        await cart.save();
      } else {
        const newcart = new Cart({ CustomerId });
        await newcart.save();
        res.status(200).json({ message: "new cart created", CustomerId });
      }
    } else {
      res.status(200).json({ message: "No user found" });
    }
  } catch (error) {
    res.status(403).json({
      message: "internal server error",
      error: error.message,
    });
  }
});

module.exports = router;
