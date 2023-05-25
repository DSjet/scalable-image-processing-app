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

async function rotateAndBlur() {
  try {
    const result = await sharp("car.jpg")
      .rotate(90, { background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .blur(10)
      .toFile("result.jpg");
    console.log(result);
  } catch (e) {
    console.log(`error: ${e}`);
  }
}

rotateAndBlur();

app.listen(3000, () => console.log("listen in 3000"));
