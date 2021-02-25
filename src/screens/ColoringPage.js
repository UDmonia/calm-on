import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  Slider,
  SafeAreaView,
  StatusBar,
} from "react-native";
import styles from "../stylesheets/coloringPageStyles";
import Exit from "../components/Exit";
import FreeSample from "../data/ColoringActivityImages/Freesample";
import { windowWidth, windowHeight } from "../util/windowDimensions";
import hexCodes from "../stylesheets/hexCodes";

export default function ColoringPage() {
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
    console.log("----------");
    console.log(lastFilled);
    console.log(currStep);
    console.log(currStep === lastFilled);
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
  const changeColor = (color, resType) => {
    if (resType == "end") {
      setCurrentColor(tinycolor(color).toHexString());
    }
  };
  const oldColor = hexCodes.purple.aurora;
  const [fillColors, setFillColors] = useState(Array(50).fill("white"));
  const [currentColor, setCurrentColor] = useState(oldColor);
  const [lastFilled, setLastFilled] = useState();
  const [stepsTaken, setStepsTaken] = useState([]);
  const [currPointer, setCurrPointer] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.exitContainer}>
        <Exit />
      </View>
      <View style={styles.mainImageContainer}>
        <View style={styles.leftSide} />
        <View style={styles.centerSection}>
          <FreeSample
            height={windowHeight * 0.785}
            width={windowWidth * 0.72}
            handlePress={handlePress}
            fillColors={fillColors}
            onFill={onFillColor}
            style={styles.img}
          />
        </View>
        <View style={styles.rightSide}>
          <View style={styles.lineupContainer}>
            <View style={styles.sliderContainer}>
              <Slider />
            </View>
          </View>
          <View style={styles.eraserButtonContainer}>
            <TouchableOpacity onPress={() => handleEraserTool()}>
              <Text>E</Text>
            </TouchableOpacity>
          </View>
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
        </View>
        <View style={styles.sliderContainer}></View>
      </View>
    </SafeAreaView>
  );
}
