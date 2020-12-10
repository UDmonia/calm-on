
import { windowWidth, windowHeight } from "./windowDimensions";

//Spacing for the bars
const horizontalLength = windowWidth * 0.70;
const horizontalPosition = windowWidth * 0.15;
const topPosition = windowHeight * 0.18;
const bottomPosition = topPosition + horizontalLength;

//Spacing for Sprite
const spriteX1 = horizontalPosition - 40;
const spriteY1 = bottomPosition - 65;
const spriteX2 = horizontalLength + 5;
const spriteY3 = topPosition - 90;
 
export { horizontalLength, horizontalPosition, bottomPosition, topPosition, spriteX1, spriteY1, spriteX2, spriteY3 };