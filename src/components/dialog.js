import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Text from './Text';

export default DialogBox = ({ message }) => {
  return (
    <View style={message.style}>
      {/* change text color */}
      <Text style={{ color: "#FFFFFF", fontFamily: "FontReg",}}>{message.text}</Text>
    </View>
  );
};
