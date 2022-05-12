import React, { useState, useEffect, useRef } from "react";
import { FlatList, Image, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import DayIcon from "./dayIcon";
import moment from "moment";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import styles from "../stylesheets/monthlyPreviewStyles";
import { SpriteActivityData } from "../data/activityData";
import CheckinAPI from "../util/checkin_util";

const groupCheckinsByDays = (checkins) => {
  const checkinsByDays = {};
  const orderedDates = [];
  for (let i = 0; i < checkins.length; i++) {
    const currentDate = moment(checkins[i].timestamp).format("dddd, LL");
    if (checkinsByDays[currentDate]) {
      checkinsByDays[currentDate].push(checkins[i]);
    } else {
      checkinsByDays[currentDate] = [checkins[i]];
      orderedDates.push(currentDate);
    }
  }

  return { checkinsByDays, orderedDates };
};

//Date global variables
const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth();

const getStartTimeMonthAndYear = (checkins) => {
  if (checkins.length === 0) {
    return [currentMonth, currentYear];
  }
  const firstDate = new Date(checkins[0].timestamp);
  return [firstDate.getMonth(), firstDate.getFullYear()];
};

const MonthlyPreview = ({ userId }) => {
  //   const [monthlyData, setMonthlyData] = useState([]);
  const [{ checkinsByDays, orderedDates }, setGroupCheckins] = useState({});
  const [journals, setJournals] = useState([]);
  //   const [lastDayWithData, setLastDayWithData] = useState(0);
  const fetchData = async () => {
    const { data } = await CheckinAPI.getMonthlyCheckins(userId);
    setGroupCheckins(groupCheckinsByDays(data.checkins));
    setJournals(data.checkins);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const navigation = useNavigation();

  //Render the data for Flatlist
  const renderItem = ({ item, index }) => {
    const { mood, timestamp } = item;
    return (
      //Return the icons that corresponds to the date and the moods
      <DayIcon
        showJournal={(time) =>
          item.hasCheckin &&
          navigation.navigate("CheckinDetail", {
            entry: { mood, timestamp },
            allEntries: checkinsByDays,
            orderedDates,
            time,
            currentDate: moment(item.timestamp).format("dddd, LL"),
            spriteActivityData: SpriteActivityData,
          })
        }
        checkIn={item}
        journals={journals}
        index={index}
      />
    );
  };

  //Month number is zero-based, i.e 'january' == 0
  //set initial month to be the current month
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const [startMonth, startYear] = getStartTimeMonthAndYear(journals);
  const [listRef, setRef] = useState(null);

  const numDays = new Date(year, month + 1, 0).getDate();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  //Re-format the existing journals array from Redux store
  // const mapJournals = journals.map((journal,index)=>(
  //     {id:journal["_id"], month: `${new Date(journal.date).getMonth()+1}`, date:`${new Date(journal.date).getDate()}`, journals:journal.journals}
  //     ))
  //Map each check-in ONE MONTH at a time from journals array, this is used by Flatlist as a data source
  let lastDayWithData = 0;

  const makeData = () => {
    const days = [];
    //Loop through the number of days of the current month starting at day 1
    for (let i = 1; i <= numDays; i++) {
      //Finds a check-in in the journals array where the day is the same as the index and the current month
      const pushToCalendar = journals.find(
        (journal) =>
          moment(journal.timestamp).format("D") == i &&
          moment(journal.timestamp).month() === month &&
          moment(journal.timestamp).format("YYYY") === year.toString()
      );

      if (pushToCalendar) {
        //if pushToCalendar array is not empty, add the re-format object into the days array
        lastDayWithData = i;
        days.push({
          DOW: moment(new Date(pushToCalendar.timestamp)).format("dddd"),
          year,
          month: month + 1,
          key: i,
          day: i,
          hasCheckin: true,
          id: pushToCalendar._id,
          mood: pushToCalendar.mood,
          userId: pushToCalendar.userId,
          timestamp: pushToCalendar.timestamp,
        });
      } else {
        //if pushtoCalendar array is empty, meaning no check-ins, then add just the empty day without any check-ins into the days array
        days.push({
          DOW: moment(new Date(year, month, i)).format("dddd"),
          id: null,
          hasCheckin: false,
          month: month + 1,
          key: i,
          day: i,
        });
      }
    }
    return days;
  };

  const navigateMonths = (step) => {
    if (month === 0 && step === -1) {
      setMonth(11);
      setYear((year) => year - 1);
    } else if (month === 11 && step === 1) {
      setMonth(0);
      setYear((year) => year + 1);
    } else {
      setMonth((month) => month + step);
    }
  };

  useEffect(() => {
    if (listRef != null && journals.length !== 0) {
      setTimeout(() => {
        listRef.scrollToIndex({
          index: lastDayWithData,
          animated: true,
          viewPosition: 0.5,
        });
      }, 500);
    }
  }, [listRef, journals]);

  //call the makeData array
  const data = makeData();
  return (
    <View style={styles.container}>
      {journals.length === 0 ? (
        <View style={styles.emptyList}>
          <Text style={styles.emptyText}>No Check-ins yet :(</Text>
        </View>
      ) : (
        <>
          <View style={styles.header}>
            {month > startMonth || year > startYear ? (
              <TouchableOpacity onPress={() => navigateMonths(-1)}>
                <Image source={require("../../assets/images/prevMonth.png")} />
              </TouchableOpacity>
            ) : (
              <Image source={require("../../assets/images/leftDisabled.png")} />
            )}

            <Text style={styles.date}>
              {months[month]} {year}
            </Text>
            {month < currentMonth || year < currentYear ? (
              <TouchableOpacity onPress={() => navigateMonths(1)}>
                <Image source={require("../../assets/images/nextMonth.png")} />
              </TouchableOpacity>
            ) : (
              <Image
                source={require("../../assets/images/rightDisabled.png")}
              />
            )}
          </View>

          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={data}
            renderItem={renderItem}
            ref={(ref) => setRef(ref)}
          />
        </>
      )}
    </View>
  );
};

export default MonthlyPreview;
