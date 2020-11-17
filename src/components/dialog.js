import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default DialogBox = ({ message }) => {
  return (
    <View style={message.style}>
      {/* change text color */}
      <Text style={{ color: "#FFFFFF", fontFamily: "FontReg",}}>{message.text}</Text>
    </View>
  );
};
