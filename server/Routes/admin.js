const express = require("express");
const { User, Product, Admin } = require("../database");
const { SECRET } = require("../middleware/auth");
const { authenticateJwt } = require("../middleware/auth");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/me", authenticateJwt, async (req, res) => {
  const admin = await Admin.findOne({ username: req.user.username });
  if (!admin) {
    res.status(403).json({ msg: "Admin doesnt exist" });
    return;
  }
  res.json({
    username: admin.username,
  });
});

router.post("/signup", (req, res) => {
  const { username, password } = req.body;
  function callback(admin) {
    if (admin) {
      res.status(403).json({ message: "Admin already exists" });
    } else {
      const obj = { username: username, password: password };
      const newAdmin = new Admin(obj);
      newAdmin.save();
      const token = jwt.sign({ username, role: "admin" }, SECRET, {
        expiresIn: "2h",
      });
      res.json({ message: "Admin created successfully", token });
    }
  }
  Admin.findOne({ username }).then(callback);
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username, password });
  if (admin) {
    const token = jwt.sign({ username, role: "admin" }, SECRET, {
      expiresIn: "2h",
    });
    res.json({ message: "Logged in successfully", token });
    alert("Logged in successfully");
  } else {
    res.status(403).json({ message: "Invalid username or password" });
  }
});

router.post("/AddProduct", authenticateJwt, async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.json({
    message: "Product created successfully",
    productId: newProduct.id,
  });
});

router.put("/products/:productId", authenticateJwt, async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.productId,
      req.body,
      {
        new: true,
      }
    );
    if (product) {
      res.json({ message: "Product updated successfully" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error("Error updating Product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/products", authenticateJwt, async (req, res) => {
  const products = await Product.find({});
  res.json({ products });
});

router.get("/product/:productId", authenticateJwt, async (req, res) => {
  const productId = req.params.productId;
  if (!productId) {
    res.status(404).json({ message: "no product found" });
  } else {
    const product = await product.find({});
    res.json({ product });
  }
});

module.exports = router;
