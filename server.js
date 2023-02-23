const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const route = require("./src/api/v1/routes/post.route");
require("dotenv").config();

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

mongoose
  .connect(DATABASE_URL)
  .then(() => console.log(`Connected to database`))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Home Page"));
app.use("/v1/posts", route);

app.listen(PORT, () => console.log(`Server start at port ${PORT}`));
