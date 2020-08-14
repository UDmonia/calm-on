import React from "react";
import { View, StyleSheet, Button } from "react-native";

const CheckInExplain = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.tmp}>
      <Button title="Cancel" onPress={() => navigate("Home")} />
      <Button title="Submit" onPress={() => navigate("Home")} />
    </View>
  );
};

export default CheckInExplain;

const styles = StyleSheet.create({
  tmp: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
