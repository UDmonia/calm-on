import React, { memo } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Animated, { diffClamp } from "react-native-reanimated";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { hsv2color } from "../util/reanimatedColor";

const {
    cond,
    eq,
    add,
    set,
    Value,
    event,
    interpolate,
  } = Animated;

const MemoizedColorSlider = memo(function (props) {
    const gestureState = new Value(State.UNDETERMINED);
    const translationY = new Value(0);
    const offsetY = new Value(0);
    const gestureHandler = event([{
      nativeEvent:{
        state: gestureState,
        translationY: translationY,
      }
    }]);
    const y = diffClamp(
      cond(
        eq(gestureState, State.END),
        [set(offsetY, add(offsetY, translationY)), offsetY],
        add(offsetY, translationY)
      ),
    -(props.height * 0.5 - props.width/2), (props.height * 0.5 - props.width/2));
    const hue = interpolate(y, {
      inputRange: [-(props.height * 0.5 - props.knob), (props.height * 0.5 - props.knob)],
      outputRange: [0.0001, 360]
    });
    // const h = new Value(359);
    // this code below can used to change the color value at another day
    // This is currently overkill code for just setting the color of the knob to white
    const h = new Value(0);
    const s = new Value(0);
    const v = new Value(1);
    const rgbcolor = hsv2color(h, s, v);
    return (
        <View style={styles.mainContainer}>
        <View
          style={[
            styles.imgContainer,
            { borderWidth: 2, borderRadius: 50, borderColor: "white" },
          ]}
        >
          <Image
            source={require("../../assets/coloring/rainbow_slider.png")}
            style={styles.backgroundImage}
          />
        </View>
        <PanGestureHandler
          maxPointers={1}
          onGestureEvent={gestureHandler}
          onHandlerStateChange={gestureHandler}
        >
          <Animated.View
            onLayout={(event) => {props.setValue(event.nativeEvent.layout.y)}}
            style={[
              styles.box,
              {
                top: y,
                height: props.knob,
                width: props.knob,
                backgroundColor: rgbcolor,
                // white border for if we want to change the color of the knob
                // borderWidth: 2,
                // borderColor: "white",

              },
            ]}
          />
        </PanGestureHandler>
      </View>
    )
})

const styles = StyleSheet.create({
    mainContainer: {
      height: "100%",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    backgroundImage: {
      height: "100%",
      width: "100%",
      resizeMode: "stretch",
      position: "absolute",
    },
    imgContainer: {
      position: "absolute",
      height: "100%",
      width: "100%",
      overflow: "hidden",
    },
    animatedView: {
      backgroundColor: "black",
    },
    box: {
      backgroundColor: "#61dafb",
      borderRadius: 40,
    },
    displayText: {
      position: "absolute",
      top: 100,
      left: 100,
    },
  });

  export default MemoizedColorSlider;