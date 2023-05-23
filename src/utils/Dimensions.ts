/* Scaling the font size based on the screen size. */
/* The above code is scaling the font size based on the screen size. */
import { Dimensions, Platform, PixelRatio } from "react-native"
export const WIDTH: number = Dimensions.get("screen").width
export const HEIGHT: number = Dimensions.get("screen").height

const scale = WIDTH / 375

const scaleFontSize = (size: number) => {
  const newSize = size * scale
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1.5
  }
}

export default scaleFontSize
