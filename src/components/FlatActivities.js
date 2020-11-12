import { Text, Image, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import styles from "../stylesheets/flatActivitiesStyles";
import ActivityCard from "./ActivityCard.js";

function FlatActivities({ navigation: { navigate } }) {
    const styleProps = {
        color: "#A7D1A8"
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView 
                contentContainerStyle={styles.center}
                showsVerticalScrollIndicator={false}>
                <TouchableOpacity 
                    style={styles.activityContainer}
                    onPress={() => navigate("FiveFourThreeTwoOne")}>
                    <Text>5-4-3-2-1 Techniques</Text>
                    <Image
                        source={
                            require('../../assets/activities/54321.png')
                        }
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.activityContainer}>
                    <Text>Test</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.activityContainer}>
                    <Text>Test</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.activityContainer}>
                    <Text>Test</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.activityContainer}>
                    <Text>Test</Text>
                </TouchableOpacity>
                <ActivityCard
                    title={"5-4-3-2-1 Techniques"}
                    bgColor={"#A7D1A8"}
                    navigateLink={"FiveFourThreeTwoOne"}
                    imagePath={require('../../assets/activities/54321.png')}/>
            </ScrollView>
        </SafeAreaView>
    );
}

export default FlatActivities;