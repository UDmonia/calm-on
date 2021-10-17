import React from "react";
import {View, Image } from "react-native";
import Text from './Text';
import { TouchableOpacity } from "react-native-gesture-handler";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import styles from "../stylesheets/previewEntriesStyles";
import hex from "../stylesheets/hexCodes";
import { monthlyData } from "../data/dummyData";

/**
 * Used in previewEntires.js (Daily Preview) for each check-in
 * @param {String} mood Mood in each check-in
 * @param {String} journal User selected emotion state string
 * @param {Time} time Time of the day of the check-in
 * @param {Image} image Emoji associated with the mood
 * @param {Function} showJournal Function used to locate check-in by time param and display in detailed view
 * @param {String} color BackgroundColor of the box container
 * @param {Boolean} empty Empty is true if there's zero or less than four check-ins for the day
 */
export const Box = ({
  mood,
  journal,
  time,
  image,
  showJournal,
  color,
  empty,
}) => {
  const navigation = useNavigation();
  // const lastCommaIndex = journal.lastIndexOf(",");
 
  // capitalize function for mood as mood comes back as lowercase from Database
  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  return (
    <View style={styles.container}>
      {empty ? (
        <TouchableOpacity
          onPress={() => navigation.navigate("DailyCheckIn")}
          style={{ ...styles.box }}
        >
          <Image
            style={{ marginLeft: 20, marginTop: 20 }}
            source={require("../../assets/images/addJournal.png")}
          />
          <Text
            style={{ ...styles.journalTitle, marginTop: 10, marginRight: 20 }}
          >
            Tell me how you're feeling
          </Text>
        </TouchableOpacity>
      ) : (
        <View>
          <Text style={styles.time}>{moment(journal.timestamp).format("LT")}</Text>
          <TouchableOpacity
            onPress={() => showJournal(time)}
            style={{ ...styles.box, backgroundColor: color }}
          >
            <View style={styles.iconBox}>
              <Image source={image} />
            </View>
            <View style={styles.textContainer}>
              {/* <Text style={styles.journalTitle}>
                {mood.charAt(0).toUpperCase() + mood.slice(1)}
                hello
              </Text> */}
              
              <Text style={styles.journal}>
                {capitalize(mood)}
              </Text>
             
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

/**
 *
 * @param journals Check-ins array of a specific day
 * @param date Date of the check-in
 * @param showJournal Function used to locate check-in by time param
 */
const previewEntries = ({ journals, date, showJournal }) => {
  /**
   * Contains all images associated with each emotion
   */
  const moodMap = {
    happy: {
      path: require("../../assets/preview/happy.png"),
      color: hex.yellow.yellow2,
    },
    angry: {
      path: require("../../assets/preview/angry.png"),
      color: hex.pink.pink1,
    },
    sad: { 
      path: require("../../assets/preview/sad.png"), 
      color: hex.purple.purple1 
    },
    scared: {
      path: require("../../assets/preview/scared.png"),
      color: hex.blue.blue3,
    },
    excited: {
      path: require("../../assets/preview/excited.png"),
      color: hex.green.green2,
    },
    worried: {
      path: require("../../assets/preview/worried.png"),
      color: hex.brown.brown2,
    },
  };

  let entryIndex
  let entry1
  let entries = []  
  for (const prop in monthlyData['data']) {
    entries.push(...monthlyData['data'][prop])
  }
  let filteredDays = entries.filter(entry1 => moment(entry1.timestamp).format('D') == moment(journals.timestamp).format('D'))
  for(entry1 in filteredDays){
    if(filteredDays[entry1] === journals){
      entryIndex = entry1
      // console.log('it worked', entry1,entryIndex )
    }
}
  

  /**
   * Map out each check-ins of the day and display them through Box.js from latest to oldest
   */
  // const journalList = journals.map((journal, i) => (
  //   <Box
  //     color={moodMap[journal.mood].color}
  //     image={moodMap[journal.mood].path}
  //     key={i}
  //     showJournal={showJournal}
  //     journal={journal.journal}
  //     mood={journal.mood}
  //     time={journal.createdAt} 
  //   />
  // ));

  return (
    <View>
      {filteredDays[0] === journals ?
      <Text style={styles.date}>{date}</Text>
      :
      <>
      </>
      }
      {/* {journalList} */}
      <Box
      color={moodMap[journals.mood].color}
      image={moodMap[journals.mood].path}
      key={journals._id}
      showJournal={showJournal}
      journal={journals}
      mood={journals.mood}
    />
    </View>
  );
};

export default previewEntries;
