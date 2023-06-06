const sharp = require("sharp");

async function grayscale(image) {
  try {
    const result = await sharp("/methods/car.jpg")
      .grayscale()
      .toFile("car_grayscale.jpg");
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error converting image to black and white:", error);
    throw new Error("Failed to convert the image to black and white.");
  }
}

module.exports = grayscale;
