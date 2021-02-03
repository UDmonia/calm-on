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
import hex from "../stylesheets/hexCodes";


export default DialogBox = ({ message }) => {
  return (
    <View style={message.style}>
      {/* change text color */}
      <Text style={{ color: hex.white.white1, fontFamily: "FontReg",}}>{message.text}</Text>
    </View>
  );
};
