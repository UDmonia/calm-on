import { Text, Image, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import styles from "../stylesheets/flatActivitiesStyles";
import ActivityCard from "./ActivityCard.js";

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
const SpriteActivityData = [
    {
        id: 1,
        title: "5-4-3-2-1 Techniques",
        color: "#A7D1A8",
        img: require("../../assets/activities/54321.png"),
        introPageData: {
            navRoute: "IntroActivity",
            ActRoute: "FiveFourThreeTwoOne",
            about:
              "Use your sense to bring you back to the present moment. This will help you feel more focused and clam",
            helpful: "You have trouble focusing or when you feel scared or worried.",
            img: require("../../assets/activities/54321.png"),
        },
    },
    {
        id: 2,
        title: "Calm Counting",
        color: "#FBBDB4",
        img: require("../../assets/activities/counting.png"),
        introPageData: {
            navRoute: "IntroActivity",
            ActRoute: "CountingSelection",
            about:
              "Play a matching game with Sprite to help you concentrate and focus.",
            helpful: "You have trouble focusing or when you feel scared or worried.",
            img: require("../../assets/counting/countingTitle.png"),
        },
    },
    {
        id: 3,
        title: "Milk Milk Milk",
        color: "#6E891A",
        img: require("../../assets/favicon.png"),
        introPageData: {
            navRoute: "IntroActivity",
            ActRoute: "milkMilkMilk",
            about:
              "A story about your thoughts and feelings with the word milk!",
            helpful: "You feel scared or worried.",
            img: require("../../assets/favicon.png"),
        },        
    },
    {
        id: 4,
        title: "Box Breathing",
        color: "#418295",
        img: require("../../assets/favicon.png"),
        introPageData: {
            navRoute: "IntroActivity",
            ActRoute: "boxBreathing",
            about:
              "Take a walk with Sprite while you work on a calming breathing pattern",
            helpful: "You are feeling very sad, angry, scared, or worried.",
            img: require("../../assets/favicon.png"),
        },  
    },
    {
        id: 5,
        title: "Picnic Time",
        color: "#DA71C4",
        img: require("../../assets/favicon.png"),
        introPageData: {
            navRoute: "IntroActivity",
            ActRoute: "Adventure",
            about:
              "Sometimes when we are upset, it helps us calm down when we imagine ourselves doing something enjoyable. Join me on an adventure!",
            img: require("../../assets/activities/chooseadventure1.png"),
            helpful: "You are scared or worried.",
        },  
    },
];

function FlatActivities({ navigation: { navigate } }) {
    return (
        <SafeAreaView>
            <ScrollView 
                contentContainerStyle={styles.center}
                showsVerticalScrollIndicator={false}>
                {SpriteActivityData.map((activity) => {
                    return <ActivityCard title={activity.title}
                            key={activity.id}
                            bgColor={activity.color}
                            navigateLink={activity.introPageData.navRoute}
                            imagePath={activity.img}
                            introPageData={activity.introPageData}/>
                })}
            </ScrollView>
        </SafeAreaView>
    );
}

export default FlatActivities;