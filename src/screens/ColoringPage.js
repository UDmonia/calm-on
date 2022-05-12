import React, { useRef, useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  SafeAreaView,
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
// Import Picture Components
import FreeSample from "../data/ColoringActivityImages/Freesample";
// Slider Component Constants
const SLIDER_HEIGHT = windowHeight * 0.2;
const SLIDER_WIDTH = SLIDER_HEIGHT * 0.1;
const KNOB_RADIUS = (SLIDER_WIDTH * 3) / 4;
// Image Component Constants
const IMAGE_HEIGHT = windowHeight * 0.785;
const IMAGE_WIDTH = windowWidth * 0.72;

export default function ColoringPage({ route }) {
  // Summary: Function that resets values back to default
  function handleReset() {
    setFillColors(Array(50).fill("white"));
    setStepsTaken([]);
    setLastFilled(-1);
    setCurrPointer(0);
    setCurrentColor(oldColor);
  }
  // Summary: Pops the latest entry into the stepsTaken array and updates the fillColors array with the new updated values.
  function handleUndo() {
    if (currPointer != 0) {
      // get the steps taken and the value we are going to undo
      let newStepsTaken = stepsTaken.slice(0);
      let undoStep = newStepsTaken.pop();
      // replace color with previous color
      let replaceFillColors = fillColors.slice(0);
      replaceFillColors[undoStep.index] = undoStep.color;
      // set the states
      setStepsTaken(newStepsTaken);
      setCurrPointer(currPointer - 1);
      setFillColors(replaceFillColors);
    }
  }
  // Summary: Function that is going to passed a prop to the svg image component.
  // Description: Create a step object, which keeps track of what is being filled in and what color that section is being colored. Adds the new color to the fillColors array to update the svg image and addes to the lastFilled array to keep track of the previous moves so the user can undo the moves
  function onFillColor(i) {
    // console.log(i);
    let newFillColors = fillColors.slice(0);
    //keep track of the old value so we can revert back to this
    let step = {
      index: i,
      color: newFillColors[i],
    };
    // this will track the current step, could be used later on to make sure the user is not double clicking
    // let currStep = {
    //   index: i,
    //   color: currentColor,
    // };
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
  // Summary: Set the current color to white so the user can use it as an eraser brush
  function handleEraserTool() {
    setCurrentColor("white");
  }
  // Summary: Function that is called when user presses the "Save Image Button".
  // Description: After getting the viewshot screenshot, the function will then ask for permission from the user. If the user already has access to the photo permissions then the app will show the modal that the image has been saved and after 3 seconds it will fade out.
  async function getMediaLibraryAsync() {
    // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
    const { status } = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    ).catch((e) => console.log(e));
    if (status === "granted") {
      const uri = await viewShotRef.current.capture();
      setUri(uri);
      setModalVisible(true);
      setTimeout(() => {
        setModalVisible(false);
      }, 3000);
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
            height={IMAGE_HEIGHT}
            width={IMAGE_WIDTH}
            // handlePress={handlePress}
            fillColors={fillColors}
            onFill={onFillColor}
            style={styles.img}
          />
        );
      default:
        return <Text>There is no Image</Text>;
    }
  }

  const oldColor = hexCodes.purple.aurora;
  const viewShotRef = useRef(null);
  const [fillColors, setFillColors] = useState(Array(50).fill("white"));
  const [value, setValue] = useState(0);
  const [color, setColor] = useState("hsl(240, 100%, 50%)");
  const [currentColor, setCurrentColor] = useState(oldColor);
  const [lastFilled, setLastFilled] = useState();
  const [stepsTaken, setStepsTaken] = useState([]);
  const [currPointer, setCurrPointer] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [uri, setUri] = useState("");
  const { name } = route.params;

  useEffect(() => {
    let interpolatedValue = (value / (SLIDER_HEIGHT - SLIDER_WIDTH / 2)) * 360;
    let tempColor = "hsl(" + interpolatedValue + ", 100%, 50%)";
    setColor(tempColor);
    setCurrentColor(tempColor);
  }, [value]);

  useEffect(() => {
    if (uri) {
      MediaLibrary.saveToLibraryAsync(uri).then(console.log("saved!"));
    } else {
      console.log("there is no image!");
    }
  }, [uri]);

  return (
    <SafeAreaView style={styles.container}>
      <Modal animationType="fade" visible={modalVisible} transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Picture saved to gallery!</Text>
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
          <View
            style={{
              height: windowHeight * 0.03,
              width: windowHeight * 0.03,
              marginTop: "50%",
              backgroundColor: color,
              borderRadius: 4,
              borderWidth: 2,
              borderColor: hexCodes.white.white1,
            }}
          />
          <View
            style={[
              styles.lineupContainer,
              { height: SLIDER_HEIGHT, width: SLIDER_WIDTH },
            ]}
          >
            <MemoizedColorSlider
              height={SLIDER_HEIGHT}
              width={SLIDER_WIDTH}
              knob={KNOB_RADIUS}
              setValue={setValue}
            />
          </View>
          <View style={styles.eraserButtonContainer}>
            <TouchableOpacity onPress={() => handleEraserTool()}>
              <Image source={require("../../assets/coloring/eraser.png")} />
            </TouchableOpacity>
          </View>
          <View style={styles.undoButtonContainer}>
            <TouchableOpacity onPress={() => handleUndo()}>
              <Image source={require("../../assets/coloring/undo.png")} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.colorSelectionContainer}>
        {/* 
        Here are some Debug buttons (mostly for reseting the image and tracking the steps taken)
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => handleReset()}>
            <Text>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress()}>
            <Text>Steps Taken</Text>
          </TouchableOpacity>
        </View> */}
        <View style={styles.saveButtonContainer}>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => getMediaLibraryAsync()}
          >
            <Text
              style={{
                color: hexCodes.purple.aurora,
                fontSize: windowWidth * 0.05,
              }}
            >
              Save Image
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
