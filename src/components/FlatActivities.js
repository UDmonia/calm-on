import { SafeAreaView, ScrollView } from "react-native";
import React from "react";
import styles from "../stylesheets/flatActivitiesStyles";
import ActivityCard from "./ActivityCard.js";

function FlatActivities({ route, navigation: { navigate } }) {
  const { activities } = route.params;
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.center}
        showsVerticalScrollIndicator={false}
      >
        {activities.map((activity) => {
          return (
            <ActivityCard
              title={activity.title}
              key={activity.id}
              bgColor={activity.color}
              navigateLink={activity.introPageData.navRoute}
              imagePath={activity.img}
              introPageData={activity.introPageData}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

export default FlatActivities;
