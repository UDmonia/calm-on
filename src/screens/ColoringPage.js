import React, { useRef, useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Modal,
  Alert,
} from "react-native";
import * as MediaLibrary from "expo-media-library";
import * as Permissions from "expo-permissions";
import ViewShot from "react-native-view-shot";
import styles from "../stylesheets/coloringPageStyles";
import Exit from "../components/Exit";
import { windowWidth, windowHeight } from "../util/windowDimensions";
import hexCodes from "../stylesheets/hexCodes";
import MemoizedColorSlider from "../components/ColorSlider";
//Import Picture Components
import FreeSample from "../data/ColoringActivityImages/Freesample";

const SLIDER_HEIGHT = windowHeight * 0.25;
const SLIDER_WIDTH = SLIDER_HEIGHT * 0.10;
const KNOB_RADIUS = SLIDER_WIDTH * 3/2;

export default function ColoringPage({ route }) {
  function handlePress() {
    console.log(stepsTaken);
    console.log(currPointer);
    console.log("_________________");
  }
  function handleReset() {
    setFillColors(Array(50).fill("white"));
    setStepsTaken([]);
    setLastFilled(-1);
    setCurrPointer(0);
    setCurrentColor(oldColor);
  }
  function handleUndo() {
    if (currPointer != 0) {
      // console.log("undo!" + lastFilled)
      // console.log(stepsTaken[currPointer - 1]);
      // get the steps taken and the value we are going to undo
      let newStepsTaken = stepsTaken.slice(0);
      let undoStep = newStepsTaken.pop();
      // console.log(undoStep);
      // replace color with previous color
      let replaceFillColors = fillColors.slice(0);
      replaceFillColors[undoStep.index] = undoStep.color;
      // set the states
      setStepsTaken(newStepsTaken);
      setCurrPointer(currPointer - 1);
      setFillColors(replaceFillColors);
    }
  }
  function onFillColor(i) {
    // console.log(i);
    let newFillColors = fillColors.slice(0);
    //keep track of the old value so we can revert back to this
    let step = {
      index: i,
      color: newFillColors[i],
    };
    let currStep = {
      index: i,
      color: currentColor,
    };
    // console.log("----------");
    // console.log(lastFilled);
    // console.log(currStep);
    // console.log(currStep === lastFilled);
    newFillColors[i] = currentColor;
    setFillColors(newFillColors);
    // set the last filled to what you currently set the color to, this is for checking for double clicks
    setLastFilled({
      index: i,
      color: currentColor,
    });
    //add step to step taken array
    let steps = stepsTaken.slice(0);
    steps.push(step);
    setStepsTaken(steps);
    setCurrPointer(currPointer + 1);
  }
  function handleEraserTool() {
    setCurrentColor("white");
  }

  async function getMediaLibraryAsync() {
    // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
    const { status } = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    ).catch((e) => console.log(e));
    if (status === "granted") {
      if (uri) {
        MediaLibrary.saveToLibraryAsync(uri).then(console.log("saved!"));
      } else {
        console.log("there is no image!");
      }
    } else {
      Alert.alert(
        "Permissions Denied.",
        "Please go into your app settings and permissions to enable file and storage permissions to save photo!",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    }
  }

  // This is where you add the components to me Rendered
  // Make sure that the props are correctly copied from the Freesample Component
  function condtionalRenderSwitch(imageName) {
    switch (imageName) {
      case "Carrot":
        return (
          <FreeSample
            height={windowHeight * 0.785}
            width={windowWidth * 0.72}
            handlePress={handlePress}
            fillColors={fillColors}
            onFill={onFillColor}
            style={styles.img}
          />
        );
      default:
        return <Text>There is no Image</Text>;
    }
  }

  function handleColorChange(newColor) {
    setValue(newColor);
  }

  const oldColor = hexCodes.purple.aurora;
  const viewShotRef = useRef(null);
  const [fillColors, setFillColors] = useState(Array(50).fill("white"));
  const [value, setValue] = useState(0);
  const [color, setColor] = useState('hsl(240, 100%, 50%)');
  const [currentColor, setCurrentColor] = useState(oldColor);
  const [lastFilled, setLastFilled] = useState();
  const [stepsTaken, setStepsTaken] = useState([]);
  const [currPointer, setCurrPointer] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [uri, setUri] = useState("");
  const { name } = route.params;

  useEffect(() => {
    let interpolatedValue = value / (SLIDER_HEIGHT - SLIDER_WIDTH/2) * 360;
    let tempColor = ('hsl(' + interpolatedValue + ', 100%, 50%)');
    setColor(tempColor);
    setCurrentColor(tempColor);
  }, [value])

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {uri ? (
              <Image
                style={{
                  height: 500,
                  width: 200,
                  resizeMode: "contain",
                }}
                source={{ uri }}
              ></Image>
            ) : (
              <Text>No IMAGE</Text>
            )}
            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.exitContainer}>
        <Exit />
      </View>
      <View style={styles.mainImageContainer}>
        <View style={styles.leftSide} />
        <ViewShot ref={viewShotRef} options={{ format: "jpg", quality: 0.9 }}>
          <View style={styles.centerSection}>
            {condtionalRenderSwitch(name)}
          </View>
        </ViewShot>
        <View style={styles.rightSide}>
          <View style={[styles.lineupContainer, {height: SLIDER_HEIGHT, width: SLIDER_WIDTH}]}>
            <MemoizedColorSlider height={SLIDER_HEIGHT} width={SLIDER_WIDTH} knob={KNOB_RADIUS} setValue={setValue}/>
          </View>
          <View style={styles.eraserButtonContainer}>
            <TouchableOpacity onPress={() => handleEraserTool()}>
              <Text>E</Text>
            </TouchableOpacity>
          </View>
          <View style={{height: 20, width: 20, backgroundColor: color}}/>
        </View>
      </View>
      <View style={styles.colorSelectionContainer}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => handleReset()}>
            <Text>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleUndo()}>
            <Text>Undo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress()}>
            <Text>Steps Taken</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.openButton}
            onPress={async () => {
              setModalVisible(true);
              const uri = await viewShotRef.current.capture();
              setUri(uri);
            }}
          >
            <Text style={styles.textStyle}>Snapshot</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => getMediaLibraryAsync()}>
            <Text>Save Photo</Text>
          </TouchableOpacity>
          <Text>{value}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
