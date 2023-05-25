const sharp = require("sharp");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "success" });
});

app.post("/", (req, res) => {
  console.log(req);

  res.status(200).json({ message: "success" });
});

async function resizeImage() {
  try {
    await sharp("sammy.png")
      .resize({
        width: 150,
        height: 97,
      })
      .toFile("sammy-resized.png");
  } catch (error) {
    console.log(error);
  }
}

resizeImage();

app.listen(3000, () => console.log("listen in 3000"));
