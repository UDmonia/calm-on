import React from "react";
import { View, StyleSheet, Button } from "react-native";

const CheckIn = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.tmp}>
      <Button title="Cancel" onPress={() => navigate("Home")} />
      <Button title="Continue" onPress={() => navigate("CheckInExplain")} />
    </View>
  );
};

export default CheckIn;

const styles = StyleSheet.create({
  tmp: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
