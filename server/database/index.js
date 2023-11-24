const mongoose = require("mongoose");

// Define mongoose schemas
const usersSchema = new mongoose.Schema({
  username: { type: String },
  password: String,
  userId: Number,
  Products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
  AdminId: Number,
});

const ProductsSchema = new mongoose.Schema({
  ProductID: Number,
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  onAir: Boolean,
});

const CartSchema = new mongoose.Schema({
  title: String,
  description: String,
  ProductID: Number,
});

// Define mongoose models
const User = mongoose.model("User", usersSchema);
const Admin = mongoose.model("Admin", adminSchema);
const Product = mongoose.model("Product", ProductsSchema);
const Cart = mongoose.model("Cart", CartSchema);

module.exports = {
  User,
  Admin,
  Product,
  Cart,
};
