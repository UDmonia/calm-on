import { SpriteActivityData, FlynnAcitivityData, AuroraAcitivityData } from "./activityData.js";
import hex from "../stylesheets/hexCodes";
/**
 * TODO: add proper activity data for Flynn and Aurora
 */

const sprite = {
  img: require("../../assets/images/Sprite_Default.png"),
  name: "Sprite",
  characterColor: hex.green.green1,
  description:
    "Hello, I am the great Sprite. I’m the coolest fairy of them all. I have some of the most interesting stories to share! Let’s explore our feelings together!",
  background: require("../../assets/images/characterChat/spriteBackground.png"),
  viewActivities: require("../../assets/images/characterChat/spriteViewActivities.png"),
  activities: SpriteActivityData,
};

const flynn = {
  img: require("../../assets/images/Flynn_Default.png"),
  name: "Flynn",
  characterColor: hex.brown.flynn,
  description:
    "Yo, I’m Flynn! I can teach you how to be strong and healthy like me through exercise and dance!",
  background: require("../../assets/images/characterChat/flynnBackground.png"),
  viewActivities: require("../../assets/images/characterChat/flynnViewActivities.png"),
  activities: FlynnAcitivityData,
};

const aurora = {
  img: require("../../assets/images/auora_base.png"),
  name: "Aurora",
  characterColor: hex.purple.aurora,
  description:
    "Hi, I’m Aurora! I have some fun activities that can inspire that awesome mind of yours. I can’t wait to color and journal with you!",
  background: require("../../assets/images/characterChat/auroraBackground.png"),
  viewActivities: require("../../assets/images/characterChat/auroraViewActivities.png"),
  activities: AuroraAcitivityData,
};

export { sprite, flynn, aurora };
