import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { checkin } from "../actions/session_actions";
/** TODO:
 * - make feelingContainers a single component and pass in props
 * - note: require cannot recieve variables/props
 */

const Happy = ({ setFeeling, arrHooks, happy }) => {
  return (
    <View style={styles.feelingContainer}>
      <TouchableOpacity
        onPress={() => {
          setFeeling("happy");
          var i;
          for (i = 0; i < 6; i++) {
            if (i != 0) {
              arrHooks[i](false);
            }
          }
          arrHooks[0]((feeling) => !feeling);
        }}
      >
        {happy ? (
          <Image
            style={styles.feelingImg}
            source={require("../../assets/emotions/happySelected.png")}
          />
        ) : (
          <Image
            style={styles.feelingImg}
            source={require("../../assets/emotions/happyUnselected.png")}
          />
        )}
      </TouchableOpacity>
      <Text style={styles.feelingTxt}>Happy</Text>
    </View>
  );
};

const Excited = ({ setFeeling, arrHooks, excited }) => {
  return (
    <View style={styles.feelingContainer}>
      <TouchableOpacity
        onPress={() => {
          setFeeling("excited");
          var i;
          for (i = 0; i < 6; i++) {
            if (i != 1) {
              arrHooks[i](false);
            }
          }
          arrHooks[1]((feeling) => !feeling);
        }}
      >
        {excited ? (
          <Image
            style={styles.feelingImg}
            source={require("../../assets/emotions/excitedSelected.png")}
          />
        ) : (
          <Image
            style={styles.feelingImg}
            source={require("../../assets/emotions/excitedUnselected.png")}
          />
        )}
      </TouchableOpacity>
      <Text style={styles.feelingTxt}>Excited</Text>
    </View>
  );
};

const Scared = ({ setFeeling, arrHooks, scared }) => {
  return (
    <View style={styles.feelingContainer}>
      <TouchableOpacity
        onPress={() => {
          setFeeling("scared");
          var i;
          for (i = 0; i < 6; i++) {
            if (i != 2) {
              arrHooks[i](false);
            }
          }
          arrHooks[2]((feeling) => !feeling);
        }}
      >
        {scared ? (
          <Image
            style={styles.feelingImgScared}
            source={require("../../assets/emotions/scaredSelected.png")}
          />
        ) : (
          <Image
            style={styles.feelingImgScared}
            source={require("../../assets/emotions/scaredUnselected.png")}
          />
        )}
      </TouchableOpacity>
      <Text style={styles.feelingTxt}>Scared</Text>
    </View>
  );
};

const Worried = ({ setFeeling, arrHooks, worried }) => {
  return (
    <View style={styles.feelingContainer}>
      <TouchableOpacity
        onPress={() => {
          setFeeling("worried");
          var i;
          for (i = 0; i < 6; i++) {
            if (i != 3) {
              arrHooks[i](false);
            }
          }
          arrHooks[3]((feeling) => !feeling);
        }}
      >
        {worried ? (
          <Image
            style={styles.feelingImg}
            source={require("../../assets/emotions/worriedSelected.png")}
          />
        ) : (
          <Image
            style={styles.feelingImg}
            source={require("../../assets/emotions/worriedUnselected.png")}
          />
        )}
      </TouchableOpacity>
      <Text style={styles.feelingTxt}>Worried</Text>
    </View>
  );
};

const Sad = ({ setFeeling, arrHooks, sad }) => {
  return (
    <View style={styles.feelingContainer}>
      <TouchableOpacity
        onPress={() => {
          setFeeling("sad");
          var i;
          for (i = 0; i < 6; i++) {
            if (i != 4) {
              arrHooks[i](false);
            }
          }
          arrHooks[4]((feeling) => !feeling);
        }}
      >
        {sad ? (
          <Image
            style={styles.feelingImg}
            source={require("../../assets/emotions/sadSelected.png")}
          />
        ) : (
          <Image
            style={styles.feelingImg}
            source={require("../../assets/emotions/sadUnselected.png")}
          />
        )}
      </TouchableOpacity>
      <Text style={styles.feelingTxt}>Sad</Text>
    </View>
  );
};

const Angry = ({ setFeeling, arrHooks, angry }) => {
  return (
    <View style={styles.feelingContainer}>
      <TouchableOpacity
        onPress={() => {
          setFeeling("angry");
          var i;
          for (i = 0; i < 6; i++) {
            if (i != 5) {
              arrHooks[i](false);
            }
          }
          arrHooks[5]((feeling) => !feeling);
        }}
      >
        {angry ? (
          <Image
            style={styles.feelingImg}
            source={require("../../assets/emotions/angrySelected.png")}
          />
        ) : (
          <Image
            style={styles.feelingImg}
            source={require("../../assets/emotions/angryUnselected.png")}
          />
        )}
      </TouchableOpacity>
      <Text style={styles.feelingTxt}>Angry</Text>
    </View>
  );
};

const DailyCheckIn = ({ navigation: { navigate } }) => {
  const userName = "";
  // useSelector((state) =>
  //   state.session.user.name ? state.session.user.name : "user"
  // );
  const [curFeeling, setFeeling] = useState("");
  const [happy, setHappy] = useState(false);
  const [exited, setExcited] = useState(false);
  const [scared, setScared] = useState(false);
  const [worried, setWorried] = useState(false);
  const [sad, setSad] = useState(false);
  const [angry, setAngry] = useState(false);
  const arrHooks = [
    setHappy,
    setExcited,
    setScared,
    setWorried,
    setSad,
    setAngry,
  ];
  const dispatch = useDispatch();
  const handleAddEmotion = () => {
    return dispatch(
      checkin({
        mood: curFeeling,
        journal: "",
      })
      // .then((action) => {
      //   navigate("Home");
      // })
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.txtQuestion}>
        How are you feeling today,{"\n"}
        {userName}?
      </Text>
      <View style={styles.txtInfo}>
        <Image source={require("../../assets/info.png")} />
        <Text style={styles.txtInfo}>Learn more about feelings</Text>
      </View>
      <View>
        <View style={styles.row}>
          <Happy setFeeling={setFeeling} arrHooks={arrHooks} happy={happy} />
          <Excited
            setFeeling={setFeeling}
            arrHooks={arrHooks}
            excited={exited}
          />
        </View>
        <View style={styles.row}>
          <Scared setFeeling={setFeeling} arrHooks={arrHooks} scared={scared} />
          <Worried
            setFeeling={setFeeling}
            arrHooks={arrHooks}
            worried={worried}
          />
        </View>
        <View style={styles.row}>
          <Sad setFeeling={setFeeling} arrHooks={arrHooks} sad={sad} />
          <Angry setFeeling={setFeeling} arrHooks={arrHooks} angry={angry} />
        </View>
      </View>
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
          // onPress={() => navigate("CheckInExplain", { feeling: curFeeling })}
          onPress={() => handleAddEmotion()}
        >
          <Image
            style={styles.buttons}
            source={require("../../assets/checkInContinueButton.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DailyCheckIn;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center", // secondary axis
  },
  txtQuestion: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 20,
  },
  txtInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    textAlign: "center",
    fontSize: 16,
    color: "#8AABFF",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 50,
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
  feelingContainer: {
    marginTop: 50,
    marginHorizontal: 45,
    alignItems: "center",
    textAlign: "center",
  },
  feelingImg: {
    width: 88,
    height: 88,
  },
  feelingImgScared: {
    width: 90,
    height: 88,
  },
  feelingTxt: {
    fontSize: 16,
    marginTop: 15,
  },
  row: {
    flexDirection: "row",
  },
});
