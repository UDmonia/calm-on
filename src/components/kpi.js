import React, {useEffect, useState} from "react";
import { View, Text, Image, TouchableOpacity, Modal, TextInput } from "react-native";
import { StackActions } from "@react-navigation/native";
import styles from '../stylesheets/kpiStyles';

export default Kpi = ({ navigation: { navigate } }) => {

  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          transparent={true}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);}}
                  style={styles.modalExitButton}>
                <Image source={require("../../assets/exit/blkExitBtn.png")}/>
              </TouchableOpacity>
              <Text style={styles.modalText}>Confused?</Text>
              <Text styles={styles.modalSubText}>Your Feedback will help us improve.</Text>
              <View style={styles.textAreaContainer}>
                <TextInput
                  style={styles.textArea}
                  placeholder="Write Something... (optional)"
                  multiline={true}
                  maxLength={250}
                  scrollEnabled={false}/>
              </View>
              <View style={styles.modalSubmitButton}>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(!modalVisible)}}
                  style={styles.ModalBackButton}>
                  <Text style={[styles.text, styles.backButtonText]}>Send</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={[styles.text, styles.title]}>Main Text!</Text>
          <Text style={[styles.text, styles.subtext]}>Here is some text that is going to be under the main text.</Text>
          <View style={styles.backButtonContainer}>
            <TouchableOpacity
              onPress={() => {
                navigate("chatPlaceholder");
              }}
              style={styles.backButton}>
              <Text style={[styles.text, styles.backButtonText]}>Back To Activities</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.feedbackButtons}>
          {/*Like button toggle*/}
          {like === false && (
            <TouchableOpacity 
              style={styles.buttons}
              onPress={() => setLike(!like)}>
            <Image
              source={require('../../assets/kpi/thumbUp.png')}/>
            <Text style={styles.text}>Like</Text>
          </TouchableOpacity>)}
          {like === true && (
            <TouchableOpacity 
              style={styles.buttons}
              onPress={() => setLike(!like)}>
            <Image
              source={require('../../assets/kpi/like.png')}/>
            <Text style={styles.text}>Like</Text>
            </TouchableOpacity>)}
          {/*Confused Button*/}
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}>
            <Image source={require('../../assets/kpi/confused.png')}/>
          </TouchableOpacity>
          {/*Dislike button toggle*/}
          {dislike === false && (
            <TouchableOpacity 
              style={styles.buttons}
              onPress={() => setDislike(!dislike)}>
            <Image
              source={require('../../assets/kpi/thumbDown.png')}/>
            <Text style={styles.text}>Dislike</Text>
          </TouchableOpacity>)}
          {dislike === true && (
            <TouchableOpacity 
              style={styles.buttons}
              onPress={() => setDislike(!dislike)}>
            <Image
              source={require('../../assets/kpi/dislike.png')}/>
            <Text style={styles.text}>Dislike</Text>
            </TouchableOpacity>)}
        </View>
      </View>
    </View>
  );
};
