import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const CheckInExplain = ({ route, navigation: { navigate } }) => {
  const [value, onChangeText] = React.useState("Useless Placeholder");
  const { feeling } = route.params;

  return (
    <View style={styles.tmp}>
      <Image
        style={styles.feelingImg}
        source={require("../../assets/Scared.png")}
      />
      <Text style={styles.txtFeeling}>Today I'm feeling {feeling}!</Text>
      <Text style={styles.txtOptional}>
        Tell me why you're feeling {feeling}...(optional)
      </Text>
      <TextInput
        style={styles.userNameInput}
        placeholder={""}
        onChangeText={(text) => onChangeText(text)}
        multiline
        // onChangeText={handleChange("name")}
        // clearButtonMode="while-editing"
        // value={name}
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
    // textAlign: "center",
    // justifyContent: "center",
    // alignItems: "center",
    marginTop: 10,
  },
  feelingImg: {
    marginTop: 75,
    width: 88,
    height: 88,
  },
});
