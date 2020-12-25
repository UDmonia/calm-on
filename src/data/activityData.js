//Activities data constant used for map and potentially to store in the database later on:
// Structure for this data:
/*
    {
        General Activity Data
        ...
        Intro Page Data Object for Activity: {
            ...
        }
    }
*/

import hex from "../stylesheets/hexCodes";

const SpriteActivityData = [
  {
    id: 1,
    title: "5-4-3-2-1 Techniques",
    color: hex.green.green1,
    img: require("../../assets/activities/54321.png"),
    tag: ["happy", "excited", "sad", "angry"],
    introPageData: {
      navRoute: "IntroActivity",
      ActRoute: "FiveFourThreeTwoOneTech",
      about:
        "Use your sense to bring you back to the present moment. This will help you feel more focused and clam",
      helpful: "You have trouble focusing or when you feel scared or worried.",
      img: require("../../assets/activities/54321.png"),
      headerColor: "#2E7D32",
    },
  },
  {
    id: 2,
    title: "Calm Counting",
    color: hex.pink.pink2,
    img: require("../../assets/activities/counting.png"),
    tag: ["angry"],
    introPageData: {
      navRoute: "IntroActivity",
      ActRoute: "CountingSelection",
      about:
        "Play a matching game with Sprite to help you concentrate and focus.",
      helpful: "You feel scared or worried.",
      img: require("../../assets/counting/countingTitle.png"),
      headerColor: "#2E7D32",
    },
  },
  {
    id: 3,
    title: "Milk Milk Milk",
    color: hex.green.green1,
    tag: ["worried", "angry", "scared"],
    img: require("../../assets/activities/milk.png"),
    introPageData: {
      navRoute: "IntroActivity",
      ActRoute: "milkMilkMilk",
      about: "A story about your thoughts and feelings with the word milk!",
      helpful: "You feel scared or worried.",
      img: require("../../assets/activities/milkTitle.png"),
      headerColor: "#2E7D32",
    },
  },
  {
    id: 4,
    title: "Box Breathing",
    color: hex.blue.blue3,
    img: require("../../assets/activities/box.png"),
    tag: ["worried", "angry"],
    introPageData: {
      navRoute: "IntroActivity",
      ActRoute: "boxBreathing",
      about:
        "Take a walk with Sprite while you work on a calming breathing pattern",
      helpful: "You are feeling very sad, angry, scared, or worried.",
      img: require("../../assets/boxBreathing/actTitle.png"),
      headerColor: "#2E7D32",
    },
  },
  {
    id: 5,
    title: "Picnic Time",
    color: hex.pink.pink3,
    img: require("../../assets/activities/adventure.png"),
    tag: ["happy", "excited", "angry"],
    introPageData: {
      navRoute: "IntroActivity",
      ActRoute: "Adventure",
      about:
        "Sometimes when we are upset, it helps us calm down when we imagine ourselves doing something enjoyable. Join me on an adventure!",
      helpful: "You feel scared, angry or worried.",
      img: require("../../assets/activities/chooseadventure1.png"),
      headerColor: "#2E7D32",
    },
  },
];

export { SpriteActivityData };
