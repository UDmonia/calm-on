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
  
  // Handler for decreasing day and making sure the correct button is highlighted
  const decreaseDayButton = (cur, index) => {
    let newest = allEntries.findIndex(current => current.timestamp === cur.timestamp)
    if(newest !== 0){
      setEntryIndex(newest-1)
      let newerest = allEntries[newest-1]
      setActive(newerest.timestamp)
      setJournal(newerest)
    }else{
      setEntryIndex(newest)
    }
    
  }
  
  // Handler for increasing day and making sure the correct button is highlighted
  const increaseDayButton = (cur, index) => {
    let newest = allEntries.findIndex(current => current.timestamp === cur.timestamp)
    if(newest !== allEntries.length){
      setEntryIndex(newest+1)
      let newerest = allEntries[newest+1]
      setActive(newerest.timestamp)
      setJournal(newerest)
    }else{
      setEntryIndex(newest)
    }
  }
    
  // get initial entry index for highlighting correct button
  // console.log("ALLL ENTRIES", allEntries)  
  let findEntryIndex = allEntries.findIndex(entri => entri.timestamp === entry.timestamp)
  const [currentEntryIndex, setEntryIndex] = useState(findEntryIndex);
  
  const [journal, setJournal] = useState(entry);

  const [isActive, setActive] = useState(allEntries.find(entri => entri.timestamp === entry.timestamp).timestamp)

  //Use currentEntryIndex to navigate through the check-in array
  // console.log('CURRENT', currentEntryIndex)
  // const lastCommaIndex = journal.journal.lastIndexOf(",");
 
  /**
   * Map out all check-ins in a single day
   const buttons = allEntries[currentEntryIndex].journals.map((journal, i) => (
     */
    // console.log('ISACTIVE', journal)
  const buttons = allEntries.filter(entri => moment(entri.timestamp).format('D') == moment(journal.timestamp).format('D')).map(
    (entry, i) => (
      // console.log("sada", allEntries),
      <TouchableOpacity
      key={i}
      onPress={() => {
        setJournal(entry);
        setEntryIndex(allEntries.findIndex(journ => journ.timestamp === entry.timestamp))
        setActive(entry.timestamp);
      }}
      style={isActive == entry.timestamp ? styles.timeActive : styles.times}
    >
      <Text
        style={
          isActive == entry.timestamp
            ? { ...styles.timesText, color: "black" }
            : styles.timesText
        }
      >
       {moment(entry.timestamp).format("LT")}
      </Text>
    </TouchableOpacity>
  ));
  
  // Filter all the activities if they fit the tag
  const activityList = [];
  
  for (let i = 0; i < spriteActivityData.length; i++) {
    // console.log("SPRITE", spriteActivityData[i].tag);
    if(spriteActivityData[i].tag.includes(journal.mood)) {
        activityList.push(spriteActivityData[i]);
    }
  }

  
  // console.log("FIND CURR INDEX", currentEntryIndex)
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
                  {currentEntryIndex != 0 ? (
                    <TouchableOpacity
                      onPress={() => {decreaseDayButton(allEntries[currentEntryIndex], currentEntryIndex)}}>
                      <Image source={require("../../assets/images/prevMonth.png")} />
                    </TouchableOpacity>
                  ) : (
                    <Image source={require("../../assets/images/leftDisabled.png")} />
                  )}

                  <Text style={styles.date}>
                  {moment(journal.timestamp).format("LL")}
                  </Text>
                  {currentEntryIndex < allEntries.length-1? (
                    <TouchableOpacity
                      onPress={() => {increaseDayButton(allEntries[currentEntryIndex], currentEntryIndex)}}>
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
