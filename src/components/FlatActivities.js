import { Text, Image, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import styles from "../stylesheets/flatActivitiesStyles";
import ActivityCard from "./ActivityCard.js";

//Activities data constant used for map and potentially to store in the database later on:
const SpriteActivityData = [
    {
        id: 1,
        title: "5-4-3-2-1 Techniques",
        color: "#A7D1A8",
        img: require("../../assets/activities/54321.png"),
        navigationReference: "FiveFourThreeTwoOne",
    },
    {
        id: 2,
        title: "Calm Counting",
        color: "#FBBDB4",
        img: require("../../assets/activities/counting.png"),
        navigationReference: "FiveFourThreeTwoOne",
    },
    {
        id: 3,
        title: "Milk Milk Milk",
        color: "#6E891A",
        img: require("../../assets/favicon.png"),
        navigationReference: "milkMilkMilk",
    },
    {
        id: 4,
        title: "Box Breathing",
        color: "#418295",
        img: require("../../assets/favicon.png"),
        navigationReference: "boxBreathing",
    },
    {
        id: 5,
        title: "Picnic Time",
        color: "#DA71C4",
        img: require("../../assets/favicon.png"),
        navigationReference: "Adventure",
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
                            navigateLink={activity.navigationReference}
                            imagePath={activity.img}/>
                })}
            </ScrollView>
        </SafeAreaView>
    );
}

export default FlatActivities;