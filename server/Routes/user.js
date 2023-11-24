const express = require("express");
const { User, Product } = require("../database");
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
    res.json({ message: "User created successfully", token, CustomerId });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    const token = jwt.sign({ username, role: "user" }, SECRET, {
      expiresIn: "1h",
    });
    res.json({ message: "Logged in successfully", token, CustomerId });
  } else {
    res.status(403).json({ message: "Invalid username or password" });
  }
});

router.get("/products", async (req, res) => {
  const products = await Product.find({ published: true });
  res.json({ products });
});

router.get("/mycart", async (req, res) => {
  const products = await Product.find({ CustomerId });
  res.json({ products });
});

router.post("/products/addproduct", authenticateJwt, async (req, res) => {
  const product = await Product.findById(req.params.productId);

  if (product) {
    const user = await User.findOne({ username: req.user.username });
    if (user) {
      user.purchasedProduct.push(product);
      await user.save();
      res.json({ message: "Product added to Cart" });
    } else {
      res.status(403).json({ message: "User not found" });
    }
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

router.get("/Myorders", authenticateJwt, async (req, res) => {
  const user = await User.findOne({ username: req.user.username }).populate(
    "purchasedProdcuts"
  );
  if (user) {
    res.json({ purchasedProducts: user.purchasedProducts || [] });
  } else {
    res.status(403).json({ message: "User not found" });
  }
});

module.exports = router;
