const express = require("express");
const app = express();
const port = process.env.PORT;

if (!port) {
  throw new Error("Please specify a port for the app to run on.");
}

app.get("/", (req, res) => {
  var data = `<h1>Scalable Image Processing App</h1> <h4>Message: Success</h4> <p>Version: 1.0.0</p> <p>port ${port}</p>`;
  res.send(data);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
