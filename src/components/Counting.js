import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "../stylesheets/countingStyles";
import bg from "../../assets/counting/backdrop.png";
import sprit from "../../assets/counting/spirit1.png";
import DialogBox from "./dialog";
import Exit from "./Exit";

/**
 * This componet is responsible for preforming the counting activity
 * It does so by reading the recipe data passed to it as {stuff} from the route 
 *
 * @param { object } stuff  - json object containing recipe data
 */

function getBoxes(box) {
  if (box != null) {
    return (
      <View key={box.id} style={styles.itemBox}>
        <Image style={styles.boxImg} source={box.img} />
      </View>
    );
  }
  return null;
}

function fruitObjects(fruit, boxed, setBox, count, setCount, flag) {
  const [canSee, setSee] = useState(true);
  if (canSee) {
    return (
      <View key={fruit.id} style={[styles.fruit, fruit.xpos]}>
        <TouchableOpacity
          onPress={() => {
            setSee(false);
            setBox([
              ...boxed,
              {
                id: fruit.id,
                name: fruit.name,
                img: fruit.img,
              },
            ]);
            setCount(count + 1);
          }}
        >
          <Image source={fruit.img} />
        </TouchableOpacity>
      </View>
    );
  }
  return null;
}

export default Counting = ({ route, navigation }) => {
  const [boxed, setBox] = useState([]);
  const [count, setCount] = useState(0);
  const { stuff } = route.params;
  const scrollViewRef = useRef();

  function doTheThing() {
    navigation.pop();
    navigation.navigate("CountingPrompt", {
      boxes: boxed,
      actData: stuff,
      counter: count,
    });
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.backImage}>
        <View style={styles.exitPosition}>
          <Exit navTo={"chatPlaceholder"} />
        </View>
        <View style={styles.countDis}>
          {count > 0 ? (
            <Text style={{ color: "#FFFFFF" }}>
              {count + " " + stuff.groupName}
            </Text>
          ) : null}
        </View>
        <ScrollView
          style={styles.itemBoxes}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({ animated: true })
          }
        >
          {boxed.map((box) => {
            return getBoxes(box);
          })}
        </ScrollView>
        <View style={styles.fruitZone}>
          {stuff.items.map((fruit) => {
            return fruitObjects(fruit, boxed, setBox, count, setCount, "fruit");
          })}
        </View>
        <View style={styles.spritBox}>
          <Image style={styles.sprit} source={sprit} />
        </View>
        {count == 0 ? (
          <DialogBox
            message={{
              style: styles.textBox,
              text: stuff.dialog[0],
            }}
          />
        ) : null}
        {count == stuff.items.length ? doTheThing() : null}
      </ImageBackground>
    </View>
  );
};
