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
import { Pages } from "../data/habitData";
import hex from "../stylesheets/hexCodes";

const SpriteActivityData = [
  {
    id: 1,
    title: "5-4-3-2-1 Techniques",
    color: hex.green.green2,
    img: require("../../assets/activities/54321.png"),
    tag: ["happy", "excited", "sad", "angry"],
    introPageData: {
      navRoute: "IntroActivity",
      ActRoute: "FiveFourThreeTwoOneTech",
      about:
        "Use your sense to bring you back to the present moment. This will help you feel more focused and clam",
      helpful: "You have trouble focusing or when you feel scared or worried.",
      img: require("../../assets/activities/54321Intro.png"),
      headerColor: "#2E7D32",
    },
  },
  {
    id: 2,
    title: "Calm Counting",
    color: hex.green.green2,
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
    color: hex.green.green2,
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
    color: hex.green.green2,
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
    title: "Going on an Adventure",
    color: hex.green.green2,
    img: require("../../assets/activities/adventure.png"),
    tag: ["happy", "excited", "angry"],
    introPageData: {
      navRoute: "IntroActivity",
      ActRoute: "Adventure",
      about:
        "Sometimes when we are upset, it helps us calm down when we imagine ourselves doing something enjoyable. Join me on an adventure!",
      helpful: "You feel scared, angry or worried.",
      img: require("../../assets/activities/goingonadventure.png"),
      headerColor: "#2E7D32",
    },
  },
  {
    id: 6,
    title: "Train like a superhero",
    color: "#7CC576",
    img: require("../../assets/HabitCards/healthyHabits/thumbnail.png"),
    tag: ["All", "Activities"],
    introPageData: {
      navRoute: "IntroActivity",
      ActRoute: "TrainSuperhero",
      about:
        "Use your sense to bring you back to the present moment. This will help you feel more focused and clam",
      helpful: "You have trouble focusing or when you feel scared or worried.",
      img: require("../../assets/activities/54321Intro.png"),
      headerColor: "#2E7D32",
    },
  },
  {
    id: 7,
    title: "Healthy Habits",
    color: "#7CC576",
    img: require("../../assets/HabitCards/healthyHabits/thumbnail.png"),
    tag: ["All", "Healthy-Habits"],
    introPageData: {
      navRoute: "HealthyHabitsTemplate",
      ActRoute: "HealthyHabitsTemplate",
      about:
        "Use your sense to bring you back to the present moment. This will help you feel more focused and clam",
      helpful: "You have trouble focusing or when you feel scared or worried.",
      img: require("../../assets/activities/54321Intro.png"),
      headerColor: "#2E7D32",
    },
  },
  {
    id: 8,
    title: "Do The Five",
    color: "#7CC576",
    img: require("../../assets/HabitCards/doTheFive/thumbnail.png"),
    tag: ["All", "Healthy-Habits"],
    introPageData: {
      navRoute: "HealthyHabitsTemplate",
      ActRoute: "HealthyHabitsTemplate",
      about:
        "Use your sense to bring you back to the present moment. This will help you feel more focused and clam",
      helpful: "You have trouble focusing or when you feel scared or worried.",
      img: require("../../assets/activities/54321Intro.png"),
      headerColor: "#2E7D32",
    },
  },
  {
    id: 9,
    title: "Wash Your Hands Like a Pro!",
    color: "#7CC576",
    img: require("../../assets/HabitCards/healthyHabits/thumbnail.png"),
    tag: ["All", "Activities"],
    introPageData: {
      navRoute: "IntroActivity",
      ActRoute: "WashHands",
      about:
        "Use your sense to bring you back to the present moment. This will help you feel more focused and clam",
      helpful: "You have trouble focusing or when you feel scared or worried.",
      img: require("../../assets/activities/54321Intro.png"),
      headerColor: "#2E7D32",
    },
  },
  {
    id: 10,
    title: "Decoding Messages",
    color: "#D0B0FF",
    img: require("../../assets/HabitCards/healthyHabits/thumbnail.png"),
    tag: ["All", "Activities", "Aurora"],
    introPageData: {
      navRoute: "IntroActivity",
      ActRoute: "DecodingMessages",
      about:
        "Do you love to decode messages? Put your skills to the test. See if you can fill in the blank and discover a secret message!",
      helpful: "You want to challenge your mind with some fun puzzles!",
      img: require("../../assets/decodingMessages/preview.png"),
      headerColor: "#8248D7",
    },
  },
  {
    id: 11,
    title: "Coloring",
    color: "#D0B0FF",
    img: require("../../assets/HabitCards/healthyHabits/thumbnail.png"),
    tag: ["All", "Activities", "Aurora"],
    introPageData: {
      navRoute: "IntroActivity",
      ActRoute: "Coloring",
      about:
        "Do you love to decode messages? Put your skills to the test. See if you can fill in the blank and discover a secret message!",
      helpful: "You want to challenge your mind with some fun puzzles!",
      img: require("../../assets/decodingMessages/preview.png"),
      headerColor: "#8248D7",
    },
  },
];

const FlynnAcitivityData = [
  {
    id: 1,
    title: "Healthy Habits",
    color: "#7CC576",
    img: require("../../assets/HabitCards/healthyHabits/thumbnail.png"),
    tag: ["All", "Healthy-Habits"],
    introPageData: {
      navRoute: "HealthyHabitsTemplate",
      ActRoute: "HealthyHabitsTemplate",
      about:
        "Use your sense to bring you back to the present moment. This will help you feel more focused and clam",
      helpful: "You have trouble focusing or when you feel scared or worried.",
      img: require("../../assets/activities/54321Intro.png"),
      headerColor: "#2E7D32",
    },
  },
  {
    id: 2,
    title: "Do The Five",
    color: "#7CC576",
    img: require("../../assets/HabitCards/doTheFive/thumbnail.png"),
    tag: ["All", "Healthy-Habits"],
    introPageData: {
      navRoute: "HealthyHabitsTemplate",
      ActRoute: "HealthyHabitsTemplate",
      about:
        "Use your sense to bring you back to the present moment. This will help you feel more focused and clam",
      helpful: "You have trouble focusing or when you feel scared or worried.",
      img: require("../../assets/activities/54321Intro.png"),
      headerColor: "#2E7D32",
    },
  },
  {
    id: 3,
    title: "Wash Your Hands Like a Pro!",
    color: "#7CC576",
    img: require("../../assets/HabitCards/healthyHabits/thumbnail.png"),
    tag: ["All", "Activities"],
    introPageData: {
      navRoute: "IntroActivity",
      ActRoute: "WashHands",
      about:
        "Use your sense to bring you back to the present moment. This will help you feel more focused and clam",
      helpful: "You have trouble focusing or when you feel scared or worried.",
      img: require("../../assets/activities/54321Intro.png"),
      headerColor: "#2E7D32",
    },
  },
  {
    id: 4,
    title: "Videos",
    color: "#7CC576",
    img: require("../../assets/HabitCards/healthyHabits/thumbnail.png"),
    tag: ["All", "Videos"],
    introPageData: {
      navRoute: "HealthyHabitsTemplate",
      ActRoute: "HealthyHabitsTemplate",
      about:
        "Use your sense to bring you back to the present moment. This will help you feel more focused and clam",
      helpful: "You have trouble focusing or when you feel scared or worried.",
      img: require("../../assets/activities/54321Intro.png"),
      headerColor: "#2E7D32",
    },
  },
];

const AuroraAcitivityData = [
  {
    id: 1,
    title: "Decoding Messages",
    color: "#D0B0FF",
    img: require("../../assets/HabitCards/healthyHabits/thumbnail.png"),
    tag: ["All", "Activities", "Aurora"],
    introPageData: {
      navRoute: "IntroActivity",
      ActRoute: "DecodingMessages",
      about:
        "Do you love to decode messages? Put your skills to the test. See if you can fill in the blank and discover a secret message!",
      helpful: "You want to challenge your mind with some fun puzzles!",
      img: require("../../assets/decodingMessages/preview.png"),
      headerColor: "#8248D7",
    },
  },
];

export { SpriteActivityData, FlynnAcitivityData, AuroraAcitivityData };
