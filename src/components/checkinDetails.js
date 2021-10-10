import React, { useEffect, useState, setState } from "react";
import Text from './Text';
import { ImageBackground, ScrollView,View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import styles from "../stylesheets/checkinDetailsStyles";
import moment from "moment";
import ActivityCard from "./ActivityCard";
import singleData from '../data/dummyData'

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
  const { entry, allEntries, time, spriteActivityData } = route.params;
  // console.log("TIME", time)
  // console.log("allentries%%%%%%%%%%%%%%%%%%%%%%%%%%%%", allEntries)
  // console.log("entry###########################", entry)
  // console.log("sprite@@@@@@@@@@@@@@@@@@@@@@@@@", spriteActivityData)
  // Navigating from daily preview: set initial index to specfic time pressed
  // const specificTime = entry.journals.find(
  //   (journal) => journal.createdAt == time
  // );
  // let test = allEntries.filter(entry1 => moment(entry1.timestamp).format('D') == moment(entry.timestamp).format('D'))
  // console.log("TESTTSTSTTSTS", test)
  const specificTime = entry.timestamp
  // let specificIndex = entry.journals.indexOf(specificTime);
  let specificIndex;

  //Navigating from monthly preview: set initial index to zero
  if (!time) {
    specificIndex = 0;
  }

  //Go to specific check-in time of the day by index
  // const [journal, setJournal] = useState(entry.journals[specificIndex]);
  const [currentEntryIndex, setEntryIndex] = useState(entryIndex);
  let entryIndex;
  let entry1;
  for(entry1 in allEntries){
      if(allEntries[entry1] === entry){
        entryIndex = entry1
        // console.log('it worked', entry1,entryIndex, entry )
      }
  }
  const [journal, setJournal] = useState(entry);

  const [isActive, setActive] = useState(moment(entry.timestamp).format('h:mm:ss'));

  //Use currentEntryIndex to navigate through the check-in array

  // const lastCommaIndex = journal.journal.lastIndexOf(",");
 
  /**
   * Map out all check-ins in a single day
   const buttons = allEntries[currentEntryIndex].journals.map((journal, i) => (
     */
  const buttons = allEntries.filter(entry1 => moment(entry1.timestamp).format('D') == moment(entry.timestamp).format('D')).map(
    (journal, i) => (
      console.log("sada", isActive, i),
      <TouchableOpacity
      key={i}
      onPress={() => {
        setJournal(journal);
        setActive(moment(journal.timestamp).format('h:mm:ss'));
      }}
      style={isActive == moment(journal.timestamp).format('h:mm:ss') ? styles.timeActive : styles.times}
    >
      <Text
        style={
          isActive == i
            ? { ...styles.timesText, color: "black" }
            : styles.timesText
        }
      >
        {moment(journal.timestamp).format("LT")}
      </Text>
    </TouchableOpacity>
  ));
  
  // Filter all the activities if they fit the tag
  const activityList = [];
  var i;
  for (i = 0; i < spriteActivityData.length; i++) {
    // console.log("SPRITE", spriteActivityData[i].tag);
    if(spriteActivityData[i].tag.includes(journal.mood)) {
        activityList.push(spriteActivityData[i]);
    }
  }

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
                {/*Date increase/decrease*/}
                <View style={styles.header}>
                  {currentEntryIndex < allEntries.length - 1 ? (
                    <TouchableOpacity
                      onPress={() => {
                        setEntryIndex(currentEntryIndex + 1);
                        setJournal(
                          allEntries[currentEntryIndex + 1][0]
                        );
                        setActive(0);
                      }}
                    >
                      <Image source={require("../../assets/images/prevMonth.png")} />
                    </TouchableOpacity>
                  ) : (
                    <Image source={require("../../assets/images/leftDisabled.png")} />
                  )}

                  <Text style={styles.date}>
                    {moment(journal.timestamp).format("LL")}
                  </Text>
                  {currentEntryIndex > 0 ? (
                    <TouchableOpacity
                      TouchableOpacity
                      onPress={() => {
                        setEntryIndex(currentEntryIndex - 1);
                        setJournal(
                          allEntries[currentEntryIndex - 1].journals[0]
                        );
                        setActive(0);
                      }}
                    >
                      <Image source={require("../../assets/images/nextMonth.png")} />
                    </TouchableOpacity>
                  ) : (
                    <Image source={require("../../assets/images/rightDisabled.png")} />
                  )}
                </View>

                <ScrollView 
                  style={styles.timeList}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  {buttons}
                </ScrollView>

                <Image source={moodMap[journal.mood].path} />

                <Text style={styles.journalTitle}>
                  {journal.mood.charAt(0).toUpperCase() + journal.mood.slice(1)}
                </Text>
                {/*
                <Text style={styles.journal}>
                  I'm {journal.mood} about{" "}
                  <Text style={styles.bolded}>
                    {journal.journal.split(",").length === 1
                      ? journal.journal
                      : journal.journal
                          .toLowerCase()
                          .substring(0, lastCommaIndex + 1)}
                  </Text>
                  and
                  <Text style={styles.bolded}>
                    {" "}
                    {journal.journal
                      .toLowerCase()
                      .substring(lastCommaIndex + 1)}
                  </Text>
                </Text>
                */}
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
