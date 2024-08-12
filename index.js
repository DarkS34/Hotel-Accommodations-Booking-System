require("dotenv").config();
const cors = require("cors");
const express = require("express");
const { connectToDatabase } = require("./config/database");
const { connectToCloudinary } = require("./config/cloudinary");
const mainRouter = require("./api/routes/main");

const port = 3000;
const app = express();

connectToDatabase();
connectToCloudinary();

app.use(express.json());
app.use(cors());

app.use("/api/v1", mainRouter);

app.use("*", (req, res, next) => {
  return res.status(404).json("Route not found");
});

app.listen(port, () => {
  console.log("Server: http://localhost:" + port);
});
