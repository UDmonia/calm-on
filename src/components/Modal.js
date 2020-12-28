import React from "react";
import { View, Text, TouchableOpacity, Button, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

function ModalOptions() {
  return {
    animationEnabled: true,
    cardStyle: { backgroundColor: "rgba(0, 0, 0, 0.15)" },
    cardOverlayEnabled: true,
    cardStyleInterpolator: ({ current: { progress } }) => {
      return {
        cardStyle: {
          opacity: progress.interpolate({
            inputRange: [0, 0.5, 0.9, 1],
            outputRange: [0, 0.25, 0.7, 1],
          }),
        },
        overlayStyle: {
          opacity: progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0.5],
            extrapolate: "clamp",
          }),
        },
      };
    },
  };
}

export default ({ navigation }) => (
  <TouchableOpacity
    activeOpacity={1}
    onPress={() => navigation.pop()}
    style={{
      flex: 1,
      backgroundColor: "transparent",
      alignItems: "center",
      justifyContent: "center",
      //   marginBottom: 75,
    }}
  >
    <View style={styles.exitBox}>
      <View style={styles.exitTop}>
        <Text style={styles.exitText}>
          Are you sure you want to quit storytime?
        </Text>
      </View>
      <View style={styles.exitBottom}>
        <TouchableOpacity
          style={styles.yesNo}
          onPress={() => {
            navigation.pop();
            navigation.navigate("Home", { IsModal: true });
          }}
        >
          <Text style={styles.exitYNText}>Yes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.no}
          onPress={() => {
            navigation.pop();
            navigation.navigate("Home", { IsModal: true });
          }}
        >
          <Text style={styles.exitYNText}>No</Text>
        </TouchableOpacity>
      </View>
    </View>
    {/* <Button
      title="New Goals"
      spacing="3"
      width="45%"
      height="7%"
      fontSize="3%"
      onPress={() => {
        navigation.pop();
        navigation.navigate("Home", { IsModal: true });
      }}
    />
    <Button
      title="New Habits"
      spacing="3"
      width="45%"
      height="7%"
      fontSize="3%"
      onPress={() => {
        navigation.pop();
        navigation.navigate("Home", { IsModal: true });
      }}
    /> */}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
  },
  main: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    height: "100%",
    alignItems: "center",
  },
  exit: {
    position: "absolute",
    height: 30,
    width: 30,
    left: "5.6%",
    right: "85.87%",
    top: "5.42%",
    bottom: "90.64 %",
  },
  exitBox: {
    backgroundColor: "#DD6755",
    borderRadius: 10,
    position: "absolute",
    width: 337,
    height: 177,
    zIndex: 999,
    marginHorizontal: (screenWidth - 337) / 2,
    marginTop: "70%",
  },
  exitTop: {
    height: 100,
    width: "100%",
  },
  exitText: {
    color: "#FFFFFF",
    fontFamily: "FontReg",
    fontSize: 24,
    fontWeight: "800",
    marginHorizontal: "10%",
    marginTop: "8%",
    textAlign: "center",
  },
  exitBottom: {
    display: "flex",
    flexDirection: "row",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    position: "absolute",
    bottom: 0,
    height: 50,
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  yesNo: {
    borderBottomLeftRadius: 10,
    height: "100%",
    width: "50%",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRightColor: "#DD6755",
  },
  no: {
    height: "100%",
    width: "50%",
  },
});

export { ModalOptions };
