import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
/** TODO:
 * - make feelingContainers a single component and pass in props
 * - note: require cannot recieve variables/props
 */
const Happy = ({ setFeeling }) => {
  return (
    <View style={styles.feelingContainer}>
      <TouchableOpacity onPress={() => setFeeling("happy")}>
        <Image
          style={styles.feelingImg}
          source={require("../../assets/Scared.png")}
        />
      </TouchableOpacity>
      <Text style={styles.feelingTxt}>Happy</Text>
    </View>
  );
};

const Excited = ({ setFeeling }) => {
  return (
    <View style={styles.feelingContainer}>
      <TouchableOpacity onPress={() => setFeeling("excited")}>
        <Image
          style={styles.feelingImg}
          source={require("../../assets/Scared.png")}
        />
      </TouchableOpacity>
      <Text style={styles.feelingTxt}>Excited</Text>
    </View>
  );
};

const Scared = ({ setFeeling }) => {
  return (
    <View style={styles.feelingContainer}>
      <TouchableOpacity onPress={() => setFeeling("scared")}>
        <Image
          style={styles.feelingImg}
          source={require("../../assets/Scared.png")}
        />
      </TouchableOpacity>
      <Text style={styles.feelingTxt}>Scared</Text>
    </View>
  );
};

const Worried = ({ setFeeling }) => {
  return (
    <View style={styles.feelingContainer}>
      <TouchableOpacity onPress={() => setFeeling("worried")}>
        <Image
          style={styles.feelingImg}
          source={require("../../assets/Scared.png")}
        />
      </TouchableOpacity>
      <Text style={styles.feelingTxt}>Worried</Text>
    </View>
  );
};

const Sad = ({ setFeeling }) => {
  return (
    <View style={styles.feelingContainer}>
      <TouchableOpacity onPress={() => setFeeling("sad")}>
        <Image
          style={styles.feelingImg}
          source={require("../../assets/Scared.png")}
        />
      </TouchableOpacity>
      <Text style={styles.feelingTxt}>Sad</Text>
    </View>
  );
};

const Angry = ({ setFeeling }) => {
  return (
    <View style={styles.feelingContainer}>
      <TouchableOpacity onPress={() => setFeeling("angry")}>
        <Image
          style={styles.feelingImg}
          source={require("../../assets/Scared.png")}
        />
      </TouchableOpacity>
      <Text style={styles.feelingTxt}>Angry</Text>
    </View>
  );
};

const DailyCheckIn = ({ navigation: { navigate } }) => {
  const userName = useSelector((state) =>
    state.session.user.name ? state.session.user.name : "user"
  );
  const [curFeeling, setFeeling] = useState("");

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
          <Happy setFeeling={setFeeling} />
          <Excited setFeeling={setFeeling} />
        </View>
        <View style={styles.row}>
          <Scared setFeeling={setFeeling} />
          <Worried setFeeling={setFeeling} />
        </View>
        <View style={styles.row}>
          <Sad setFeeling={setFeeling} />
          <Angry setFeeling={setFeeling} />
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
          onPress={() => navigate("CheckInExplain", { feeling: curFeeling })}
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
  feelingTxt: {
    fontSize: 16,
    marginTop: 15,
  },
  row: {
    flexDirection: "row",
  },
});
