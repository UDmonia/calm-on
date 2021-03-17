import React, { useState , memo, useCallback} from "react";
import { StyleSheet, View, Dimensions, Image, Text } from "react-native";
import Animated, {block, diffClamp} from "react-native-reanimated";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { hsv2color } from "../util/reanimatedColor";

const {
    cond,
    eq,
    add,
    call,
    set,
    Value,
    event,
    interpolate,
    interpolateColors,
    Extrapolate,
    useCode,
    color,
  } = Animated;

const MemoizedColorSlider = memo(function (props) {
    // console.log(props);

    const gestureState = new Value(State.UNDETERMINED);
    const translationY = new Value(0);
    const offsetY = new Value(0);
    const test = 0;
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
    const h = new Value(0);
    const s = new Value(0);
    const v = new Value(1);
    const rgbcolor = hsv2color(h, s, v);
    // useCode(() => [set(h, hue)], [h, hue])
    // const color = interpolateColors(colorValue, {
    //   inputRange: [0.0001,1],
    //   outputColorRange: ['red','blue']
    // })
    // useCode(
    //     () =>
    //         block([
    //               cond(
    //                 eq(gestureState, State.ACTIVE),
    //                 // eslint-disable-next-line no-console
    //                 call([colorValue], ([v]) => console.log(v))
    //               ),
    //         ]),
    //         [gestureState, y]
    // );
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
                borderWidth: 2,
                borderColor: "white",

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