const sharp = require("sharp");

async function blur(image) {
  try {
    const result = await sharp("/methods/car.jpg")
      .resize({ width: 150, height: 97 })
      .toFile("car_resized.jpg");
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error converting image to black and white:", error);
    throw new Error("Failed to convert the image to black and white.");
  }
}

module.exports = blur;
