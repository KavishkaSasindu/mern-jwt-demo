const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/AuthRotes");

const app = express();
app.use(express.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const PORT = process.env.PORT || 3000;

mongoose
  .connect("mongodb://127.0.0.1:27017/jwt_mern")
  .then((result) => {
    console.log("Database is Connected");
    app.listen(PORT, () => {
      console.log("Server is running");
    });
  })
  .catch((error) => {
    console.log(error);
  });

//   routes
app.use(router);
