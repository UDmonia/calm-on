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
import bg from "../../assets/counting/backdrop.png";
import sprit from "../../assets/counting/spirit1.png";
import apple from "../../assets/counting/apple.png";
import pie from "../../assets/counting/pie.png";
import DialogBox from "./dialog";

var applePie = {
  groupName: "apples",
  dialog: [
    "Let’s make an apple pie together! We’re going to need 7 apples. Can you help me count them?",
    "All done! With your help, we made a delicious apple pie!",
    "Do you want to try another recipe?",
  ],
  fruits: [
    {
      id: 1,
      name: "apple",
      img: apple,
      xpos: {
        top: 10,
        left: 10,
      },
    },
    {
      id: 2,
      name: "apple",
      img: apple,
      xpos: {
        top: 60,
        left: 10,
      },
    },
    {
      id: 3,
      name: "apple",
      img: apple,
      xpos: {
        top: 60,
        left: 60,
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

function fruitObjects(fruit, boxed, setBox, count, setCount, flag) {
  const [canSee, setSee] = useState(true);
  if (canSee) {
    return (
      <View key={fruit.id} style={[styles.fruit, fruit.xpos]}>
        <TouchableOpacity
          onPress={() => {
            //console.log(fruit.name);
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
            console.log(count);
          }}
        >
          <Image source={fruit.img} />
        </TouchableOpacity>
      </View>
    );
  }
  return null;
}

// const DialogBox = ({ message }) => {
//   return (
//     <View style={message.style}>
//       {/* change text color */}
//       <Text>{message.text}</Text>
//     </View>
//   );
// };

export default Counting = ({ route, navigation }) => {
  const [boxed, setBox] = useState([]);
  const [count, setCount] = useState(0);
  const { stuff } = route.params;

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
      <ImageBackground source={bg} style={styles.image}>
        <View style={styles.countDis}>
          {count > 0 ? (
            //   <Text>{boxed[boxed.length - 1].name + ": " + count}</Text>
            <Text>{"Count: " + count}</Text>
          ) : null}
        </View>
        <ScrollView
          style={styles.itemBoxes}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {boxed.map((box) => {
            return getBoxes(box);
          })}
        </ScrollView>
        <View style={styles.fruitZone}>
          {stuff.fruits.map((fruit) => {
            return fruitObjects(fruit, boxed, setBox, count, setCount, "fruit");
          })}
        </View>
        <View style={styles.spritBox}>
          <Image style={styles.sprit} source={sprit} />
          {/* {count == stuff.fruits.length ? (
            <Image style={styles.pie} source={pie} />
          ) : null} */}
        </View>
        {count == 0 ? (
          <DialogBox
            message={{
              style: styles.textBox,
              text: stuff.dialog[0],
            }}
          />
        ) : null}
        {count == stuff.fruits.length
          ? doTheThing()
          : // ? navigate("CountingPrompt", {
            //     boxes: boxed,
            //     actData: stuff,
            //     counter: count,
            //   })
            null}
        {/* {count == stuff.fruits.length && !next ? (
          <View style={styles.fin}>
            <DialogBox
              message={{ style: styles.textBox2, text: stuff.dialog[1] }}
            />
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => setNext(true)}
            >
              <Text>NEXT</Text>
            </TouchableOpacity>
          </View>
        ) : null} */}
        {/* {count == stuff.fruits.length && next ? (
          <View style={styles.fin}>
            <DialogBox
              message={{ style: styles.textBox2, text: stuff.dialog[2] }}
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
                onPress={() => {
                  //setRecipe(true);
                  setStuff();
                  console.log("WTF???");
                  setBox([]);
                  setCount(0);
                  setNext(false);
                  navigation.pop()
                  navigate("Counting")
                }}
              >
                <Text>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null} */}
        {/* <Button
          title="Counter + 1"
          //onPress={() => navigate('Activities')}
          onPress={() => setCount(count + 1)}
        /> */}
      </ImageBackground>
    </View>
  );
};
