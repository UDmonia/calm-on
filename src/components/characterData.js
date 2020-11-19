import { SpriteActivityData } from "./activityData.js";
/**
 * TODO: add proper activity data for Flynn and Aurora
 */

const sprite = {
  img: require("../../assets/images/sprite.gif"),
  name: "Sprite",
  characterColor: "#2E7D32",
  description:
    "Hello, I am the great Sprite. I’m the coolest fairy of them all. I have some of the most interesting stories to share! Let’s explore our feelings together!",
  background: require("../../assets/images/characterChat/spriteBackground.png"),
  viewActivities: require("../../assets/images/characterChat/spriteViewActivities.png"),
  activities: SpriteActivityData,
};

const flynn = {
  img: require("../../assets/images/flynn.gif"),
  name: "Flynn",
  characterColor: "#B24A2B",
  description:
    "Yo, I’m Flynn! I can teach you how to be strong and healthy like me through exercise and dance!",
  background: require("../../assets/images/characterChat/flynnBackground.png"),
  viewActivities: require("../../assets/images/characterChat/flynnViewActivities.png"),
  activities: SpriteActivityData,
};

const aurora = {
  img: require("../../assets/images/aurora.gif"),
  name: "Aurora",
  characterColor: "#8248D7",
  description:
    "Hi, I’m Aurora! I have some fun activities that can inspire that awesome mind of yours. I can’t wait to color and journal with you!",
  background: require("../../assets/images/characterChat/auroraBackground.png"),
  viewActivities: require("../../assets/images/characterChat/auroraViewActivities.png"),
  activities: SpriteActivityData,
};

export { sprite, flynn, aurora };
