import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import styles from "../stylesheets/checkInExplainStyles";
import { checkin } from "../actions/session_actions";
import hex from "../stylesheets/hexCodes";


/**
 * Data that is used to determine what feeling image to load
 */
const imgPaths = [
  {
    id: 1,
    feelingName: "Happy",
    path: require("../../assets/emotions/happySelected.png"),
  },
  {
    id: 2,
    feelingName: "Excited",
    path: require("../../assets/emotions/excitedSelected.png"),
  },
  {
    id: 3,
    feelingName: "Scared",
    path: require("../../assets/emotions/scaredSelected.png"),
  },
  {
    id: 4,
    feelingName: "Worried",
    path: require("../../assets/emotions/worriedSelected.png"),
  },
  {
    id: 5,
    feelingName: "Sad",
    path: require("../../assets/emotions/sadSelected.png"),
  },
  {
    id: 6,
    feelingName: "Angry",
    path: require("../../assets/emotions/angrySelected.png"),
  },
];

/**
 * Returns the path of the image of our current feeling
 *
 * @param {string} feeling - feeling given from DailyCheckIn
 */
const getPath = (feeling) => {
  var path = require("../../assets/emotions/happySelected.png");
  imgPaths.forEach((img) => {
    if (img.feelingName === feeling) {
      path = img.path;
    }
  });
  return path;
};

/**
 * A single button that is used to render each object in "whyFeeling"
 *
 * @param {Single Object from whyFeeling array} desc - will be used for filling in each button
 */
const button = (desc) => {
  return (
    <TouchableOpacity
      key={desc.id}
      // need the style here to use desc.state
      style={[
        {
          backgroundColor: desc.state ? hex.blue.blue3 : hex.grey.grey2,
        },
        styles.toggleButton,
      ]}
      onPress={() => {
        desc.setState(!desc.state);
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>{desc.desc}</Text>
    </TouchableOpacity>
  );
};

const CheckInExplain = ({ route, navigation: { navigate } }) => {
  const [school, setSchool] = useState(false);
  const [friends, setFriends] = useState(false);
  const [family, setFamily] = useState(false);
  const [health, setHealth] = useState(false);
  const [sports, setSports] = useState(false);
  const [other, setOther] = useState(false);
  const { feeling } = route.params;
  const img = getPath(feeling);
  const dispatch = useDispatch();

  /**
   * handleAddEmotion dispatches our checkin object to redux to be sent to the database
   *
   * @param {string} feeling - feeling that was selected by the user
   * @param {comma seprarated string} reasons - built string that contains
   */
  const handleAddEmotion = (feeling, reasons) => {
    return dispatch(
      checkin({
        mood: feeling,
        journal: reasons,
      })
    );
  };

  /**
   * Data that is used to store each button
   */
  const whyFeeling = [
    { id: 1, desc: "School", state: school, setState: setSchool },
    { id: 2, desc: "Friends", state: friends, setState: setFriends },
    { id: 3, desc: "Family", state: family, setState: setFamily },
    { id: 4, desc: "Health", state: health, setState: setHealth },
    { id: 5, desc: "Sports Team", state: sports, setState: setSports },
    { id: 6, desc: "Other Groups", state: other, setState: setOther },
  ];

  return (
    <ScrollView contentContainerStyle={styles.tmp}>
      <Image style={styles.feelingImg} source={img} />
      <Text style={styles.txtFeeling}>
        Today I'm feeling {feeling.toLowerCase()}!
      </Text>
      <View style={styles.questionContainer}>
        <Text style={styles.question}>
          What are you feeling {feeling.toLowerCase()} about? Select as many
          options as you want.
        </Text>
      </View>
      {whyFeeling.map((desc) => {
        return button(desc);
      })}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.buttons, styles.cancelButton]}
          onPress={() => {
            handleAddEmotion(feeling, "");
            navigate("Home");
          }}
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttons, styles.submitButton]}
          onPress={() => {
            handleAddEmotion(
              feeling,
              // filtering out all of the false states and converting it to a string
              whyFeeling
                .filter((item) => item.state !== false)
                .map((item) => item.desc)
                .toString()
            );
            navigate("Home");
          }}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CheckInExplain;
