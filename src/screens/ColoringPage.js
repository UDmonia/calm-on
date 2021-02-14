import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
} from "react-native";
import styles from "../stylesheets/coloringPageStyles";
import Exit from "../components/Exit";
import FreeSample from "../data/ColoringActivityImages/Freesample";
import { windowWidth, windowHeight } from "../util/windowDimensions";

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
  function changeColor(color) {
    setCurrentColor(color);
  }
  const [fillColors, setFillColors] = useState(Array(50).fill("white"));
  const [currentColor, setCurrentColor] = useState("blue");
  const [lastFilled, setLastFilled] = useState(-1);
  const [stepsTaken, setStepsTaken] = useState([]);
  const [currPointer, setCurrPointer] = useState(0);

  const onFillColor = (i) => {
    // console.log(i);
    let newFillColors = fillColors.slice(0);
    //keep track of the old value so we can revert back to this
    let step = {
      index: i,
      color: newFillColors[i],
    };
    newFillColors[i] = currentColor;
    setFillColors(newFillColors);
    setLastFilled(i);
    //add step to step taken array
    let steps = stepsTaken.slice(0);
    steps.push(step);
    setStepsTaken(steps);
    setCurrPointer(currPointer + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.exitContainer}>
        <Exit />
      </View>
      <View style={styles.mainImageContainer}>
        <FreeSample
          height={windowHeight * 0.8}
          width={windowWidth}
          handlePress={handlePress}
          fillColors={fillColors}
          onFill={onFillColor}
        />
        {/* <SvgComponent
              height={Dimensions.get("window").height * 0.8}
              width={Dimensions.get("window").width}
              handlePress={handlePress}
              fillColors={fillColors}
              onFill={onFillColor}
            /> */}
        {/* <SvgComponent2
              height={Dimensions.get("window").height * 0.8}
              width={Dimensions.get("window").width}
              handlePress={handlePress}
              fillColors={fillColors}
              onFill={onFillColor}
            /> */}
        {/* <SvgComponent3
              height={Dimensions.get("window").height * 0.8}
              width={Dimensions.get("window").width}
              handlePress={handlePress}
              fillColors={fillColors}
              onFill={onFillColor}
            /> */}
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
          <TouchableOpacity onPress={() => changeColor("lightgreen")}>
            <Text>Green</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeColor("blue")}>
            <Text>Blue</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sliderContainer}></View>
      </View>
    </View>
  );
}
