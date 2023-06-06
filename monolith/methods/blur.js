const sharp = require("sharp");

async function blur(image) {
  try {
    const result = await sharp(image.path)
      .blur(10)
      .toFile(`public/images/blur_${image.originalname}`);
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error converting image to black and white:", error);
    throw new Error("Failed to convert the image to black and white.");
  }
}

module.exports = blur;
