const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const adminRouter = require("./Routes/admin");
const userRouter = require("./Routes/user");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter);
app.use("/user", userRouter);

mongoose.connect(
  "mongodb+srv://Nidhin_5656:TN37DB8220@cluster0.anuhjsu.mongodb.net/",
  {
    dbName: "shoeShopDB",
  }
);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
