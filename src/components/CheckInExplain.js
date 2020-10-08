import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { useDispatch } from "react-redux";
import "../stylesheets/checkInExplainStyles";
import { checkin } from "../actions/session_actions";

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

const getPath = (feeling) => {
  var path = require("../../assets/emotions/happySelected.png");
  imgPaths.forEach((img) => {
    if (img.feelingName === feeling) {
      path = img.path;
    }
  });
  return path;
};

const button = (desc) => {
  return (
    <TouchableOpacity
      key={desc}
      style={{
        height: 55,
        width: 322,
        // backgroundColor: "#E5E5E5",
        backgroundColor: desc.state ? "#ADD8E5" : "#E5E5E5",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
      }}
      onPress={() => {
        desc.setState(!desc.state);
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>{desc.desc}</Text>
    </TouchableOpacity>
  );
};

const CheckInExplain = ({ route, navigation: { navigate } }) => {
  const [reasons, setReasons] = useState("");
  const [school, setSchool] = useState(false);
  const [friends, setFriends] = useState(false);
  const [family, setFamily] = useState(false);
  const [health, setHealth] = useState(false);
  const [sports, setSports] = useState(false);
  const [other, setOther] = useState(false);
  const { feeling } = route.params;
  const img = getPath(feeling);
  const dispatch = useDispatch();

  const handleAddEmotion = (feeling, reasons) => {
    return dispatch(
      checkin({
        mood: feeling,
        journal: reasons,
      })
    );
  };

  const whyFeeling = [
    { id: 1, desc: "School", state: school, setState: setSchool },
    { id: 2, desc: "Friends", state: friends, setState: setFriends },
    { id: 3, desc: "Family", state: family, setState: setFamily },
    { id: 4, desc: "Health", state: health, setState: setHealth },
    { id: 5, desc: "Sports Team", state: sports, setState: setSports },
    { id: 6, desc: "Other Groups", state: other, setState: setOther },
  ];

  return (
    <View style={styles.tmp}>
      <Image style={styles.feelingImg} source={img} />
      <Text style={styles.txtFeeling}>Today I'm feeling {feeling}!</Text>
      <View
        style={{
          marginHorizontal: 40,
          marginVertical: 20,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18 }}>
          What are you feeling {feeling} about? Select as many options as you
          want.
        </Text>
      </View>
      {whyFeeling.map((desc) => {
        return button(desc);
      })}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigate("Home")}
        >
          <Image
            style={styles.buttonCancel}
            source={require("../../assets/checkInCancelButton.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => {
            handleAddEmotion(
              feeling,
              whyFeeling
                .filter((item) => item.state !== false)
                .map((item) => item.desc)
                .toString()
            );
            // console.log(
            //   // whyFeeling.map((item) => {
            //   //   return item.state ? item.desc : null;
            //   // })
            //   whyFeeling
            //     .filter((item) => item.state !== false)
            //     .map((item) => item.desc)
            //     .toString()
            // );
            navigate("Home");
          }}
        >
          <Image
            style={styles.buttonCancel}
            source={require("../../assets/checkInSubmitButton.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckInExplain;

const styles = StyleSheet.create({
  tmp: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center", // secondary axis
  },
  txtFeeling: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 15,
  },
  txtOptional: {
    textAlign: "center",
    fontSize: 14,
    color: "#8D8D8D",
    marginTop: 25,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 25,
  },
  buttons: {
    width: 126,
    height: 44,
    marginHorizontal: 15,
  },
  buttonCancel: {
    flex: 1,
    height: undefined,
    width: undefined,
    resizeMode: "contain",
  },
  userNameInput: {
    padding: 10,
    backgroundColor: "#E7E7E7",
    borderRadius: 5,
    width: 305,
    height: 345,
    marginTop: 10,
  },
  feelingImg: {
    marginTop: 25,
    width: 88,
    height: 88,
  },
});
