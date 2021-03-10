import React from "react";
import { StyleSheet, View, Dimensions, Image, Text } from "react-native";
import Animated from "react-native-reanimated";
import { PanGestureHandler, State } from "react-native-gesture-handler";
const { width } = Dimensions.get("window");

const {
  cond,
  eq,
  add,
  call,
  set,
  Value,
  event,
  interpolate,
  Extrapolate,
} = Animated;

export default class ColorSlider extends React.Component {
  constructor(props) {
    super(props);
    this.dragY = new Value(0);
    this.absoluteY = new Value(0);
    this.offsetY = new Value(0);
    this.gestureState = new Value(-1);
    this.top = 100;
    this.state = {
      height: 50,
      width: 50,
    };

    this.onGestureEvent = event([
      {
        nativeEvent: {
          translationY: this.dragY,
          absoluteY: this.absoluteY,
          state: this.gestureState,
        },
      },
    ]);

    this.addY = add(this.offsetY, this.dragY);

    this.transY = cond(eq(this.gestureState, State.ACTIVE), this.addY, [
      set(this.offsetY, this.addY),
    ]);
  }

  onLayout = (e) => {
    this.setState({
      width: e.nativeEvent.layout.width + 10,
      height: e.nativeEvent.layout.height,
      x: e.nativeEvent.layout.x,
      y: e.nativeEvent.layout.y,
    });
  };

  onDrop = ([y]) => {
    console.log(`You dropped at y: ${y}!`);
  };

  render() {
    console.log(this.state.height, this.state.width);
    return (
      <View onLayout={this.onLayout} style={styles.mainContainer}>
        <Text style={styles.debugText}>Y</Text>
        <View
          style={[
            styles.imgContainer,
            { borderWidth: 4, borderRadius: 50, borderColor: "white" },
          ]}
        >
          <Image
            source={require("../../assets/coloring/rainbow_slider.png")}
            style={styles.backgroundImage}
          />
        </View>
        <Animated.Code>
          {() =>
            cond(
              eq(this.gestureState, State.END),
              call([this.addY], this.onDrop)
            )
          }
        </Animated.Code>
        <PanGestureHandler
          maxPointers={1}
          onGestureEvent={this.onGestureEvent}
          onHandlerStateChange={this.onGestureEvent}
        >
          <Animated.View
            style={[
              styles.box,
              {
                top: interpolate(this.transY, {
                  inputRange: [
                    this.state.height * -0.5,
                    this.state.height * 0.5,
                  ],
                  outputRange: [
                    this.state.height * -0.5,
                    this.state.height * 0.5,
                  ],
                  extrapolate: Extrapolate.CLAMP,
                }),
                height: this.state.width,
                width: this.state.width,
              },
            ]}
          />
        </PanGestureHandler>
      </View>
    );
  }
}

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
