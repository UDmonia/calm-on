import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";

const DailyCheckIn = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.tmp}>
      <Text style={styles.txtHeader}>
        How are you feeling today,{"\n"}[userName]?
      </Text>
      <Text style={styles.txtInfo}>Learn more about feelings</Text>
      <View>
        <Text>[Grid of feelings]</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Cancel" onPress={() => navigate("Home")} />
        <Button title="Continue" onPress={() => navigate("CheckInExplain")} />
      </View>
    </View>
  );
};

export default DailyCheckIn;

const styles = StyleSheet.create({
  tmp: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center", // secondary axis
  },
  txtHeader: {
    textAlign: "center",
    fontSize: 20,
  },
  txtInfo: {
    textAlign: "center",
    fontSize: 16,
    color: "#8AABFF",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
