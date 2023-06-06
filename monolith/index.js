const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer({ dest: "./methods" });
const app = express();

// All the methods
const grayscale = require("./methods/grayscale");
const blur = require("./methods/blur");
const resize = require("./methods/resize");

app.use(bodyParser.json());
// app.use(upload.array());

app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/index.html");
});

app.post("/", upload.single("file"), (req, res) => {
  console.log(req.body);
  grayscale();
  blur();
  resize();
  res.status(200).json({ message: "success sucka", data: req.body });
});

app.listen(3000, () => {
  console.log(`App listening on 3000`);
});
