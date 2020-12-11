
import { windowWidth, windowHeight } from "./windowDimensions";

//Spacing for the bars
const horizontalLength = windowWidth * 0.65;
const horizontalPosition = windowWidth * 0.175;
const topPosition = windowHeight * 0.12;
const bottomPosition = topPosition + horizontalLength;

//Spacing for Sprite
const spriteX1 = horizontalPosition - 40;
const spriteY1 = bottomPosition - 65;
const spriteX2 = horizontalLength + horizontalLength * 0.08;
const spriteY3 = topPosition - 70;

const numberPosition = bottomPosition - bottomPosition * 0.7;
 
export { horizontalLength, horizontalPosition, bottomPosition, topPosition, spriteX1, spriteY1, spriteX2, spriteY3 };