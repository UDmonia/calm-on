import water from "../../assets/HabitCards/healthyHabits/water.png";
import food from "../../assets/HabitCards/healthyHabits/food.png";
import sleep from "../../assets/HabitCards/healthyHabits/sleep.png";
import tooth from "../../assets/HabitCards/healthyHabits/tooth.png";
import moving from "../../assets/HabitCards/healthyHabits/moving.png";


const Pages = {
    healthyHabits: {
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
    }
}

export default Pages;