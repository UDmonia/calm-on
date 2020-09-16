import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const FiveFourThreeTwoOne = () => {
  return (
    <View>
      <View>
        <Text>Hold - 4 Seconds</Text>
        <Text>Breathe Out - 4 Seconds</Text>
        <Text>Hold - 4 Seconds</Text>
        <Text>Breathe In - 4 Seconds</Text>
        <Image></Image>
      </View>
      <View>
        <Text>About/Description</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </Text>
        <Text>Helps/Works</Text>
        <Text>When you feel Anxiety, Depression</Text>
        <Text>Taken</Text>
        <Text>7 times</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Text>Demo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FiveFourThreeTwoOne;
