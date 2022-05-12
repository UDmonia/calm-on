import React, { useEffect, useState } from "react";
import { Image, View, ImageBackground, ScrollView } from "react-native";
import Text from "./Text";
import PreviewDaily from "./previewEntries";
import PreviewMonth from "./monthlyPreview";
import moment from "moment";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../stylesheets/calendarStyles";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllCheckins } from "../actions/session_actions";

import { SpriteActivityData } from "../data/activityData";
var today = moment().format("dddd, LL");

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

/**
 * Calendar contains two different views of the check-in data.
 * User can either choose monthly view or daily view.
 */
const Calendar = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();
  const [checkInEnabled, enableCheckins] = useState(true);
  const [journals, setJournals] = useState([]);
  const [{ checkinsByDays, orderedDates }, setJournalsGrouped] = useState({});
  const userId = useSelector(
    (state) => state.session.user && state.session.user._id
  );

  const allCheckins = useSelector((state) => state.session.checkIns);

  const massageData = () => {
    if (allCheckins == null) {
      return;
    }
    if (allCheckins.length >= 14) {
      const lastTwoWeeksCheckins = allCheckins.slice(allCheckins.length - 14);
      setJournals(lastTwoWeeksCheckins);
    } else {
      setJournals(allCheckins);
    }
    setJournalsGrouped(groupCheckinsByDays(allCheckins));
  };

  useEffect(() => {
    dispatch(fetchAllCheckins(userId));
  }, []);

  useEffect(() => {
    if (checkinsByDays != null) {
      const todaysCheckins = checkinsByDays[today];
      if (todaysCheckins) {
        enableCheckins(todaysCheckins.length <= 3);
      } else {
        enableCheckins(true);
      }
    }
  }, [checkinsByDays]);

  useEffect(() => {
    massageData();
  }, [allCheckins]);

  /**
   *check if todayJournal exist or if the user checked in more than 4 times today
   */

  const previewDaily = journals.map((entry, key) => {
    const currentDate = moment(entry.timestamp).format("dddd, LL");
    const prevDate =
      key > 0 ? moment(journals[key - 1].timestamp).format("dddd, LL") : null;
    return (
      <View key={entry._id}>
        {currentDate != prevDate && (
          <Text style={styles.date}>{currentDate}</Text>
        )}
        <PreviewDaily
          showJournal={(time) => {
            navigate("CheckinDetail", {
              entry,
              allEntries: checkinsByDays,
              orderedDates,
              currentDate,
              time,
              spriteActivityData: SpriteActivityData,
            });
          }}
          key={key}
          journals={entry}
          date={currentDate}
        />
      </View>
    );
  });

  const [viewByDay, changeView] = useState(true);

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

              <View
                style={{
                  borderRadius: 5,
                  borderColor: "white",
                  minHeight: 35,
                  height: "45%",
                  borderWidth: 3,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity
                  style={viewByDay ? styles.highlighted : styles.notHighlighted}
                  onPress={() => changeView(!viewByDay)}
                >
                  <Text
                    style={
                      viewByDay
                        ? styles.toggleTextBlack
                        : styles.toggleTextWhite
                    }
                  >
                    Daily
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={
                    !viewByDay ? styles.highlighted : styles.notHighlighted
                  }
                  onPress={() => changeView(!viewByDay)}
                >
                  <Text
                    style={
                      !viewByDay
                        ? styles.toggleTextBlack
                        : styles.toggleTextWhite
                    }
                  >
                    Monthly
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {viewByDay ? (
              <ScrollView contentContainerStyle={styles.dates}>
                {checkInEnabled && (
                  <View style={styles.feelingContainer}>
                    <TouchableOpacity
                      style={styles.addFeelings}
                      onPress={() => navigate("DailyCheckIn")}
                    >
                      <Image
                        source={require("../../assets/images/addJournal.png")}
                      />
                      <Text style={styles.feelingText}>
                        Tell me how you're feeling
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
                {previewDaily.length === 0 ? (
                  <View style={styles.emptyList}>
                    <Text style={styles.emptyText}>No Check-Ins yet :(</Text>
                  </View>
                ) : (
                  previewDaily
                )}
              </ScrollView>
            ) : (
              <PreviewMonth userId={userId} />
            )}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Calendar;
