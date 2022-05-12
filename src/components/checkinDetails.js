import React, { useEffect, useState } from "react";
import Text from "./Text";
import { ImageBackground, ScrollView, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import styles from "../stylesheets/checkinDetailsStyles";
import moment from "moment";
import ActivityCard from "./ActivityCard";

/**
 * Contains all images associated with each emotion
 */
const moodMap = {
  happy: { path: require("../../assets/preview/large/happy.png") },
  angry: { path: require("../../assets/preview/large/angry.png") },
  sad: { path: require("../../assets/preview/large/sad.png") },
  scared: { path: require("../../assets/preview/large/scared.png") },
  excited: { path: require("../../assets/preview/large/excited.png") },
  worried: { path: require("../../assets/preview/large/worried.png") },
};

const findIndexInCheckinGroup = (checkinGroup, entry) => {
  for (let i = 0; i < checkinGroup.length; i++) {
    if (entry.timestamp === checkinGroup[i].timestamp) {
      return i;
    }
  }
};

const findIndexInCurrentDateGroup = (dateGroup, date) => {
  for (let i = 0; i < dateGroup.length; i++) {
    if (dateGroup[i] === date) {
      return i;
    }
  }
};

/**
 * Detailed check-in page containing all check-ins for the selected date
 * @param route For navigation from 'daily 'preview or monthly review
 */
const checkinDetails = ({ route }) => {
  const navigation = useNavigation();
  /**
   * Passing data from Calendar.js
   * @param entry The specific check-in from the check-in array
   * @param allEntries The entire check-in array
   * @param spriteActivityData all the activity data for the sprite character
   */
  const { entry, allEntries, spriteActivityData, orderedDates, currentDate } =
    route.params;

  const [currentDateIndex, setCurrentDateIndex] = useState(
    findIndexInCurrentDateGroup(orderedDates, currentDate)
  );
  const selectedDate = orderedDates[currentDateIndex];
  const currentCheckinGroup = allEntries[selectedDate];
  const [isActiveIndex, setActiveIndex] = useState(
    findIndexInCheckinGroup(currentCheckinGroup, entry)
  );
  const journal = currentCheckinGroup[isActiveIndex];

  const timestampButtons = currentCheckinGroup.map((checkin, key) => {
    return (
      <TouchableOpacity
        key={key}
        onPress={() => {
          setActiveIndex(key);
        }}
        style={isActiveIndex === key ? styles.timeActive : styles.times}
      >
        <Text
          style={
            isActiveIndex == key
              ? { ...styles.timesText, color: "black" }
              : styles.timesText
          }
        >
          {moment(checkin.timestamp).format("LT")}
        </Text>
      </TouchableOpacity>
    );
  });

  const navigateDates = (step) => {
    setCurrentDateIndex((currentDateIndex) => currentDateIndex + step);
    setActiveIndex(0);
  };

  // Filter all the activities if they fit the tag
  const activityList = [];
  if (journal != null) {
    for (let i = 0; i < spriteActivityData.length; i++) {
      if (spriteActivityData[i].tag.includes(journal.mood)) {
        activityList.push(spriteActivityData[i]);
      }
    }
  }
  console.log(activityList);
  return (
    <View style={styles.format}>
      <ImageBackground
        source={require("../../assets/images/splash_panel.png")}
        style={styles.background}
      >
        <View style={styles.main}>
          <View style={styles.calendar}>
            <View style={styles.toggle}>
              <Image
                style={styles.hangerLeft}
                source={require("../../assets/images/hanger.png")}
              />
              <Image
                style={styles.hangerRight}
                source={require("../../assets/images/hanger.png")}
              />

              <Text style={styles.text}>
                {moment(journal.timestamp).format("dddd, LL")}
              </Text>
            </View>
            <ScrollView contentContainerStyle={styles.container}>
              <View style={styles.upper}>
                <View style={styles.header}>
                  {currentDateIndex != 0 ? (
                    <TouchableOpacity
                      onPress={() => {
                        navigateDates(-1);
                      }}
                    >
                      <Image
                        source={require("../../assets/images/prevMonth.png")}
                      />
                    </TouchableOpacity>
                  ) : (
                    <Image
                      source={require("../../assets/images/leftDisabled.png")}
                    />
                  )}

                  <Text style={styles.date}>
                    {moment(journal.timestamp).format("LL")}
                  </Text>
                  {currentDateIndex < orderedDates.length - 1 ? (
                    <TouchableOpacity
                      onPress={() => {
                        navigateDates(1);
                      }}
                    >
                      <Image
                        source={require("../../assets/images/nextMonth.png")}
                      />
                    </TouchableOpacity>
                  ) : (
                    <Image
                      source={require("../../assets/images/rightDisabled.png")}
                    />
                  )}
                </View>

                <ScrollView
                  style={styles.timeList}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  {timestampButtons}
                </ScrollView>

                <Image source={moodMap[journal.mood].path} />

                <Text style={styles.journalTitle}>
                  {journal.mood.charAt(0).toUpperCase() + journal.mood.slice(1)}
                </Text>
              </View>

              <View style={styles.lower}>
                <Image source={require("../../assets/images/banner.png")} />
                {activityList.map((activity) => {
                  return (
                    <ActivityCard
                      title={activity.title}
                      key={activity.id}
                      bgColor={activity.color}
                      navigateLink={activity.introPageData.navRoute}
                      imagePath={activity.img}
                      introPageData={activity.introPageData}
                      header={activity.introPageData.headerColor}
                    />
                  );
                })}
              </View>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default checkinDetails;
