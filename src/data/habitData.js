//images for Healthy Habits
import water from "../../assets/HabitCards/healthyHabits/water.png";
import food from "../../assets/HabitCards/healthyHabits/food.png";
import sleep from "../../assets/HabitCards/healthyHabits/sleep.png";
import tooth from "../../assets/HabitCards/healthyHabits/tooth.png";
import moving from "../../assets/HabitCards/healthyHabits/moving.png";
//images for Do the Five
import hand from "../../assets/HabitCards/doTheFive/hands.png";
import elbow from "../../assets/HabitCards/doTheFive/elbow.png";
import face from "../../assets/HabitCards/doTheFive/face.png";
import space from "../../assets/HabitCards/doTheFive/space.png";
import sick from "../../assets/HabitCards/doTheFive/sick.png";

const Pages = {
    HealthyHabits: {
        title: "Healthy Habits",
        color: "#1A2B44",
        steps: [
            {
                title: "HYDRATE",
                description: "Drink 8 cups of water every day.",
                img: water,
            },
            {
                title: "EAT",
                description: "Eat a hearty breakfast every morning.",
                img: food,
            },
            {
                title: "SLEEP",
                description: "Get 10-12 hours of sleep every night.",
                img: sleep,
            },
            {
                title: "BRUSH",
                description: "Brush your teeth every morning and night.",
                img: tooth,
            },
            {
                title: "PLAY",
                description: "Move your body everyday.",
                img: moving,
            },
        ],
    },
    DoTheFive: {
        title: "Do the Five",
        color: "#B24A2B",
        steps: [
            {
                title: "HANDS",
                description: "Wash them often.",
                img: hand,
            },
            {
                title: "ELBOW",
                description: "Cough into it.",
                img: elbow,
            },
            {
                title: "FACE",
                description: "Don't touch it.",
                img: face,
            },
            {
                title: "SPACE",
                description: "Keep safe distance.",
                img: space,
            },
            {
                title: "SICK",
                description: "Stay at home.",
                img: sick,
            },
        ],
    },
}

export default Pages;