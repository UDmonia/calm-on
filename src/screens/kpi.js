import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { StackActions } from "@react-navigation/native";
import styles from "../stylesheets/kpiStyles";
import kpiData from "../data/kpiData";

export default Kpi = ({ route, navigation: { navigate } }) => {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [confusedMessage, onChangeConfusedMessage] = useState("");

  //Handles the event where both the like and dislike button would be activited
  const handleLikePress = () => {
    //if like is pressed when the dislike button is also active it should deactivate the dislike button
    if (dislike === true) {
      setDislike(!dislike);
    }
    setLike(!like);
  };
  const handleDislikePress = () => {
    if (like === true) {
      setLike(!like);
    }
    setDislike(!dislike);
  };

  return (
    <View style={styles.mainContainer}>
      {/* Replace the source url with the image parameter when needed later on, currently constant is added for testing purposes. */}
      <ImageBackground source={route.params.bg} style={styles.imgBackground} >
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
        >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
                style={styles.modalExitButton}
              >
                <Image source={require("../../assets/exit/blkExitBtn.png")} />
              </TouchableOpacity>
              <View>
                <Text style={styles.modalText}>Confused?</Text>
                <Text styles={styles.modalSubText}>
                  Your Feedback will help us improve.
                </Text>
              </View>
              <View style={styles.textAreaContainer}>
                <TextInput
                  style={styles.textArea}
                  placeholder="Write Something... (optional)"
                  onChangeText={(text) => onChangeConfusedMessage(text)}
                  multiline={true}
                  maxLength={250}
                  scrollEnabled={false}
                />
              </View>
              <View style={styles.modalSubmitButton}>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    console.log(confusedMessage);
                  }}
                  style={styles.ModalBackButton}
                >
                  <Text style={[styles.text, styles.backButtonText]}>Send</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          </TouchableWithoutFeedback>
        </Modal>
        {/*Need to add background image here on this container*/}
        <View style={styles.container}>
          <View style={styles.top}>
            <Text style={[styles.text, styles.title]}>{route.params.pMsg}</Text>
            <Text style={[styles.text, styles.subtext]}>
              {route.params.sMsg}
            </Text>
            <View style={styles.backButtonContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigate("CharacterChat");
                }}
                style={styles.backButton}
              >
                <Text style={[styles.text, styles.backButtonText]}>
                  Back To Activities
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Add image container here */}
          {route.params.image ? <Image source={route.params.image} /> : null}
          <View style={styles.feedbackButtons}>
            {/*Like button toggle*/}
            {like === false && (
              <TouchableOpacity
                style={styles.buttons}
                onPress={() => handleLikePress()}
              >
                <Image source={require("../../assets/kpi/like.png")} />
                {/* <Text style={styles.text}>Like</Text> */}
              </TouchableOpacity>
            )}
            {like === true && (
              <TouchableOpacity
                style={styles.buttons}
                onPress={() => handleLikePress()}
              >
                <Image source={require("../../assets/kpi/dislike.png")} />
                {/* <Text style={styles.text}>hi</Text> */}
              </TouchableOpacity>
            )}
            {/*Confused Button*/}
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Image source={require("../../assets/kpi/confused.png")} />
            </TouchableOpacity>
            {/*Dislike button toggle*/}
            {dislike === false && (
              <TouchableOpacity
                style={styles.buttons}
                onPress={() => handleDislikePress()}
              >
                <Image source={require("../../assets/kpi/thumbDown.png")} />
                <Text style={styles.text}>Dislike</Text>
              </TouchableOpacity>
            )}
            {dislike === true && (
              <TouchableOpacity
                style={styles.buttons}
                onPress={() => handleDislikePress()}
              >
                <Image source={require("../../assets/kpi/dislike.png")} />
                <Text style={styles.text}>Dislike</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
