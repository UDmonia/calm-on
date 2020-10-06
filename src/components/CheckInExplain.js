import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import "../stylesheets/checkInExplainStyles";

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

const CheckInExplain = ({ route, navigation: { navigate } }) => {
  const [value, onChangeText] = React.useState("Useless Placeholder");
  const { feeling } = route.params;
  const img = getPath(feeling);

  return (
    <View style={styles.tmp}>
      <Image style={styles.feelingImg} source={img} />
      <Text style={styles.txtFeeling}>Today I'm feeling {feeling}!</Text>
      <Text style={styles.txtOptional}>
        Tell me why you're feeling {feeling}...(optional)
      </Text>
      <TextInput
        style={styles.userNameInput}
        placeholder={""}
        onChangeText={(text) => onChangeText(text)}
        multiline
      />
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
          onPress={() => navigate("Home")}
        >
          <Image
            style={styles.buttonCancel}
            source={require("../../assets/checkInSubmitButton.png")}
          />
        </TouchableOpacity>
        {/* <Button title="Cancel" onPress={() => navigate("Home")} />
        <Button title="Submit" onPress={() => navigate("Home")} /> */}
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
    marginTop: 100,
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
    marginTop: 75,
    width: 88,
    height: 88,
  },
});
