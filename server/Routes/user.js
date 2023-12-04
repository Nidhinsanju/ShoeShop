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
    res.json({ message: "Logged in successfully", token });
  } else {
    res.status(403).json({ message: "Invalid username or password" });
  }
});

router.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.json({ products });
});
router.get("/me", authenticateJwt, async (req, res) => {
  const userInfo = await User.find({});
  res.json({ userInfo });
});

router.get("/mycart", async (req, res) => {
  // const CustomerId = req..CustomerId;
  const products = await Cart.find({});
  res.json({ products });
});

router.post("/addproudct", async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    // const product = await Product.findOne({ ProductID: req.body.ProductID });
    // const newCart = new Cart({ product });
    // await newCart.save();
    // res.json({ message: "Product added successfully", Cart });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the product is already in the user's cart
    const existingProductIndex = user.Cart.products.findIndex(
      (product) => product.ProductID === productId
    );

    if (existingProductIndex !== -1) {
      // If the product is already in the cart, update the quantity
      user.Cart.products[existingProductIndex].quantity += quantity;
    } else {
      // If the product is not in the cart, add it
      user.Cart.products.push({ productId, quantity });
    }

    // Save the updated user to the database
    await user.save();
    res.json({ message: "Product added successfully", Cart });
    // Return the user's cart
  } catch (error) {
    console.log("error", error);
    res.json({ message: "Internal server error" });
  }
});

router.post("/addproduct/:productId", authenticateJwt, async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      const cart = await Cart.findOne({ username: req.body.username });
      await cart.save();

      if (!cart) {
        const newCart = new User({ username, password, CustomerId });
        await newCart.save();
      }
      const product = await Product.findOne({
        ProductID: req.params.productId,
      });
      if (product) {
        cart.push(product);
        await user.save();
        res.json({ message: "Product added to Cart" });
      } else {
        res.status(403).json({ message: "Product not found" });
      }
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(403).json({ message: "Internal server error", error });
  }
});

router.get("/myorders", authenticateJwt, async (req, res) => {
  const user = await User.findOne({ username: req.body.username }).populate(
    "Products"
  );
  if (user) {
    res.json({ Products: user.Products || [] });
  } else {
    res.status(403).json({ message: "User not found" });
  }
});

module.exports = router;
