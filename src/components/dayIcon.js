import React, { useEffect } from "react";
import { Image, View } from "react-native";
import Text from "./Text";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../stylesheets/dayIconStyles";
import hex from "../stylesheets/hexCodes";
import moment from "moment";

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
    color: hex.purple.purple1,
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

/**
 * Used in (monthlyPreview.js) Monthly Preivew for displaying each date and its emojis
 * @param checkIn A single checkIn of the day
 * @param showJournal function used to open up the detailed view of the check-in
 */
export default DayIcon = ({ checkIn, showJournal, journals, index }) => {
  if (!checkIn.hasCheckin) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          {checkIn.day}
          {`\n`}
          <Text style={styles.header}>{checkIn.DOW.slice(0, 3)}</Text>
        </Text>
        <View style={styles.body}>
          <Text
            style={{
              fontSize: 18,
              marginLeft: "5%",
              color: "rgba(0, 0, 0, 0.4)",
            }}
          >
            No Entries
          </Text>
        </View>
      </View>
    );
  }

  const iconsArr = journals.filter(
    (journal) =>
      moment(journal.timestamp).format("D") == checkIn.day.toString() &&
      moment(journal.timestamp).month() === checkIn.month - 1 &&
      moment(journal.timestamp).format("YYYY") === checkIn.year.toString()
  );

  return (
    <TouchableOpacity onPress={showJournal} style={styles.container}>
      <Text style={styles.header}>
        {checkIn.day}
        {`\n`}
        <Text style={styles.header}>{checkIn.DOW.slice(0, 3)}</Text>
      </Text>
      <View style={styles.body}>
        {/* map emotions for days with more than one checkin */}
        {iconsArr.map((journal, i) => (
          <Image
            index={index}
            style={styles.image}
            key={i}
            source={moodMap[journal["mood"]].path}
          />
        ))}
      </View>
    </TouchableOpacity>
  );
};
