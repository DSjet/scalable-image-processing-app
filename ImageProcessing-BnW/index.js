import express from "express";
import sharp from "sharp";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(express.json());

async function convertToBlackAndWhite(imagePath) {
  try {
    const outputImagePath = `output_${uuidv4()}.jpg`;
    await sharp(imagePath).grayscale().toFile(outputImagePath);
    return outputImagePath;
  } catch (error) {
    console.error("Error converting image to black and white:", error);
    throw new Error("Failed to convert the image to black and white.");
  }
}

app.post("/process-image", async (req, res) => {
  try {
    const { imageUrl, width, height, convertToBW } = req.body;

    let imageProcessor = sharp(imageUrl).resize({
      width: parseInt(width),
      height: parseInt(height),
    });

    if (convertToBW) {
      const outputImagePath = await convertToBlackAndWhite(imageUrl);
      res.json({ imagePath: outputImagePath });
      return;
    }

    const outputImagePath = `output_${uuidv4()}.jpg`;
    await imageProcessor.toFile(outputImagePath);
    res.json({ imagePath: outputImagePath });
  } catch (error) {
    console.error("Error processing image:", error);
    res.status(500).json({ error: "Failed to process the image." });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
