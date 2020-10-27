import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "../stylesheets/countingStyles";
import pie from "../../assets/counting/pie.png";
import sprit from "../../assets/counting/spirit1.png";
import bg from "../../assets/counting/backdrop.png";
import apple from "../../assets/counting/apple.png";

var Fruit = {
  groupName: "fruit",
  dialog: [
    "Let’s make an apple pie together! We’re going to need 7 apples. Can you help me count them?",
    "All done! With your help, we made a delicious apple pie!",
    "Do you want to try another recipe?",
  ],
  fruits: [
    {
      id: 4,
      name: "apple",
      img: apple,
      xpos: {
        top: 10,
        left: 10,
      },
    },
    {
      id: 5,
      name: "apple",
      img: apple,
      xpos: {
        top: 60,
        left: 10,
      },
    },
    {
      id: 6,
      name: "apple",
      img: apple,
      xpos: {
        top: 60,
        left: 60,
      },
    },
    {
      id: 7,
      name: "apple",
      img: apple,
      xpos: {
        top: 90,
        left: 90,
      },
    },

  ],
};

function getBoxes(box) {
  if (box != null) {
    return (
      <View key={box.id} style={styles.itemBox}>
        <Image source={box.img} />
      </View>
    );
  }
  return null;
}

export default CountingPrompt = ({ route, navigation: { navigate } }) => {
  const [next, setNext] = useState(true);
  const { boxes } = route.params;
  const { actData } = route.params;
  const { counter } = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.image}>
        <View style={styles.countDis}>
          <Text>{"Count: " + counter}</Text>
        </View>
        <ScrollView
          style={styles.itemBoxes}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {boxes.map((box) => {
            return getBoxes(box);
          })}
        </ScrollView>
        <View style={styles.spritBox2}>
          <Image style={styles.sprit} source={sprit} />
          <Image style={styles.pie} source={pie} />
        </View>
        {next ? (
          <View style={styles.fin}>
            <DialogBox
              message={{ style: styles.textBox2, text: actData.dialog[1] }}
            />
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => setNext(false)}
            >
              <Text>NEXT</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.fin}>
            <DialogBox
              message={{ style: styles.textBox2, text: actData.dialog[2] }}
            />
            <View style={styles.buttonView}>
              <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigate("Home")}
              >
                <Text>HOME</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigate("Counting",  { stuff: Fruit })}
              >
                <Text>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ImageBackground>
    </View>
  );
};
