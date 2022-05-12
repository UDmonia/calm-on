import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "../stylesheets/dailyCheckInStyles";
import { useSelector, useDispatch } from "react-redux";
// import { checkin } from "../actions/checkin_actions";
import { submitCheckin } from "../actions/session_actions";

/** TODO:
 * - make feelingContainers a single component and pass in props
 * - note: require cannot recieve variables/props
 */
const Happy = ({ setFeeling, arrHooks, happy }) => {
  return (
    <View style={styles.feelingContainer}>
      <TouchableOpacity
        testID="happy-button"
        onPress={() => {
          setFeeling("happy");
          var i;
          for (i = 0; i < 6; i++) {
            if (i !== 0) {
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
        testID="excited-button"
        onPress={() => {
          setFeeling("excited");
          var i;
          for (i = 0; i < 6; i++) {
            if (i !== 1) {
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
        testID="scared-button"
        onPress={() => {
          setFeeling("scared");
          var i;
          for (i = 0; i < 6; i++) {
            if (i !== 2) {
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
        testID="worried-button"
        onPress={() => {
          setFeeling("worried");
          var i;
          for (i = 0; i < 6; i++) {
            if (i !== 3) {
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
        testID="sad-button"
        onPress={() => {
          setFeeling("sad");
          var i;
          for (i = 0; i < 6; i++) {
            if (i !== 4) {
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
        testID="angry-button"
        onPress={() => {
          setFeeling("angry");
          var i;
          for (i = 0; i < 6; i++) {
            if (i !== 5) {
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
  const userName = useSelector(
    (state) => state.session.user != null && state.session.user.name
  );

  const userId = useSelector(
    (state) => state.session.user != null && state.session.user._id
  );
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

  const handleAddEmotion = (mood) => {
    dispatch(submitCheckin(userId, mood));
  };

  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <Text style={styles.txtQuestion}>
        How are you feeling today,{"\n"}
        {userName}?
      </Text>
      <View style={styles.txtInfo}>
        <Image source={require("../../assets/images/info.png")} />
        <TouchableOpacity onPress={() => navigate("FeelingDictionary")}>
          <Text style={styles.txtInfo}>Learn more about feelings</Text>
        </TouchableOpacity>
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
          testID="dailycheckin-navigate-button"
          style={[styles.buttons, styles.cancelButton]}
          onPress={() => navigate("Home")}
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          testID="curFeeling-button"
          style={[styles.buttons, styles.continueButton]}
          onPress={() => {
            handleAddEmotion(curFeeling);
            navigate("Home");
          }}
        >
          <Text style={styles.continueButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DailyCheckIn;
