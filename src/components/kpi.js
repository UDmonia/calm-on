import React from "react";
import { View, Text, Button } from "react-native";

export default Kpi = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Text>KPI Screen</Text>
      <Button
        title={"Nav to storytime"}
        onPress={() => navigate("Storytime")}
      ></Button>
    </View>
  );
};
