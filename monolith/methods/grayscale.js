const sharp = require("sharp");

async function grayscale(image) {
  try {
    const result = await sharp(image.path)
      .grayscale()
      .toFile(`public/images/grayscale_${image.originalname}`);
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error converting image to black and white:", error);
    throw new Error("Failed to convert the image to black and white.");
  }
}

module.exports = grayscale;
