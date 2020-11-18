import { SpriteActivityData } from "./activityData.js";
/**
 * TODO: add proper activity data for Flynn and Aurora
 */

const sprite = {
  img: require("../../assets/sprite.gif"),
  name: "Sprite",
  characterColor: "#2E7D32",
  description:
    "Hello, I am the great Sprite. I’m the coolest fairy of them all. I have some of the most interesting stories to share! Let’s explore our feelings together!",
  activities: SpriteActivityData,
};

const flynn = {
  img: require("../../assets/flynn.gif"),
  name: "Flynn",
  characterColor: "#B24A2B",
  description:
    "Yo, I’m Flynn! I can teach you how to be strong and healthy like me through exercise and dance!",
  activities: SpriteActivityData,
};

const aurora = {
  img: require("../../assets/aurora.gif"),
  name: "Aurora",
  characterColor: "#8248D7",
  description:
    "Hi, I’m Aurora! I have some fun activities that can inspire that awesome mind of yours. I can’t wait to color and journal with you!",
  activities: SpriteActivityData,
};

export { sprite, flynn, aurora };
