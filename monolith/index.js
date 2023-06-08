const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });
const app = express();

// All the methods
const grayscale = require("./methods/grayscale");
const blur = require("./methods/blur");
const resize = require("./methods/resize");

app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/index.html");
});

app.post("/:method", upload.single("image"), (req, res) => {
  const method = req.params.method;
  const file = req.file;
  console.log(req.file);
  switch (method) {
    case "grayscale":
      grayscale(file);
      break;
    case "blur":
      blur(file);
      break;
    case "resize":
      resize(file);
    default:
      console.log("default");
      break;
  }
  res.status(200).json({ message: "success sucka", data: file });
});

app.listen(3000, () => {
  console.log(`App listening on 3000`);
});
