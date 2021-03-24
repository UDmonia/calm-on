import React from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from "react-native";
import { windowHeight, windowWidth } from "../util/windowDimensions";

function AdventureMadLib(props) {
  return (
    <View style={styles.centeredView}>
      {props.modalVisible && (
        <View style={{}}>
          <Text style={{ fontSize: windowWidth * 0.05 }}>
            Dear Diary, {"\n"}
            It was a beautiful day outside. There were birds chirping and the
            sun was shining bright. I wanted to go on a picnic with my friends,
            but they were busy so I went with mom. Dad said he was too busy
            doing boring grown-up stuff. I took an{" "}
            <Image
              style={{ height: windowWidth * 0.05, width: windowWidth * 0.05 }}
              source={require("../../assets/favicon.png")}
            />
            , my{" "}
            <Image
              style={{ height: 20, width: 20 }}
              source={require("../../assets/favicon.png")}
            />
            , my{" "}
            <Image
              style={{ height: 20, width: 20 }}
              source={require("../../assets/favicon.png")}
            />
            , and my stuffed{" "}
            <Image
              style={{ height: 20, width: 20 }}
              source={require("../../assets/favicon.png")}
            />
            . When I got there, I sat on my vegetables with mom and saw people
            drawing astronauts. There was a farm near the park which had pigs,
            frogs, and lions. After visiting the farm, we started to play
            various games such as hopscotch. We spent an hour at the swings and
            then mom said we had to go home. It was a good day overall. I hope
            tomorrow will be a good day as well.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "white",
    position: "absolute",
    zIndex: 200,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default AdventureMadLib;
