const sharp = require("sharp");

async function blur(image) {
  try {
    const result = await sharp(image.path)
      .resize({ width: 150, height: 97 })
      .toFile(`public/images/resize_${image.originalname}`);
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error converting image to black and white:", error);
    throw new Error("Failed to convert the image to black and white.");
  }
}

module.exports = blur;
