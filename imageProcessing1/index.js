import expresss from "express";
import sharp from "sharp";

const app = expresss();

app.get("/", (req, res) => {
  res.status(200).json({ message: "success" });
});

app.post("/", (req, res) => {
  console.log(req);

  res.status(200).json({ message: "success" });
});

async function process() {
  try {
    const result = await sharp("car.jpg")
      .resize({
        width: 2000,
        height: 1000,
      })
      .toFile("resized.jpg");
    console.log(result);
  } catch (e) {
    console.log(`error: ${e}`);
  }
}

process();

app.listen(3000, () => console.log("listen in 3000"));
