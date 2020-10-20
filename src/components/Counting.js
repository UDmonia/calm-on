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
import { navigate } from "./RootNavigation";
import styles from "../stylesheets/countingStyles";
import bg from "../../assets/counting/backdrop.png";
import sprit from "../../assets/counting/spirit1.png";
import apple from "../../assets/counting/apple.png";
import pie from "../../assets/counting/pie.png";

const stuff = [
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
];

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

function fruitObjects(fruit, boxed, setBox, count, setCount) {
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
            //setCount(count + 1);
            //console.log(count);
          }}
        >
          <Image source={fruit.img} />
        </TouchableOpacity>
      </View>
    );
  }
  return null;
}

const DialogBox = ({ message }) => (
  <View style={message.style}>
    {/* change text color */}
    <Text>{message.text}</Text>
  </View>
);

export default Counting = () => {
  const [boxed, setBox] = useState([]);
  const [count, setCount] = useState(0);
  // if(count === 3){
  //     console.log('All Done!!!!! <>');
  //     return (
  //         <View>
  //             <Text>Here!!!!!!!</Text>
  //         </View>
  //     )
  //     //console.log(boxed[boxed.length - 1].id)
  // }
  return (
    <View style={styles.container}>
      {count < 3 ? (
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
            {/* {stuff.map((fruit) => 
                                    {return getBoxes();})} */}
            {boxed.map((box) => {
              return getBoxes(box);
            })}
          </ScrollView>
          <View style={styles.fruitZone}>
            {/* {stuff.map((fruit) => {
              return fruitObjects(fruit, boxed, setBox, count, setCount);
            })} */}
          </View>
          <View style={styles.spritBox}>
            <Image style={styles.sprit} source={sprit} />
          </View>
          {count == 0 ? (
            <DialogBox
              message={{
                style: styles.textBox,
                text:
                  "Let’s make an apple pie together! " +
                  "We’re going to need 7 apples. " +
                  "Can you help me count them?",
              }}
            />
          ) : null}
          {/* <Button 
                                title= "Back To Activities"
                                onPress={() => navigate('Activities')}
                                //onPress={() => setCount(count + 1)}
                            /> */}
          <Button
            title="Counter + 1"
            //onPress={() => navigate('Activities')}
            onPress={() => setCount(count + 1)}
          />
        </ImageBackground>
      ) : (
        <ImageBackground source={bg} style={styles.image}>
          <View style={styles.countDis}>
            {count > 0 ? (
              //   <Text>{boxed[boxed.length - 1].name + ": " + count}</Text>
              <Text>{"Count: " + count}</Text>
            ) : null}
          </View>
          <View style={styles.spritBox2}>
            <Image style={styles.pie} source={pie}/>
            <Image style={styles.sprit} source={sprit} />
          </View>
          <DialogBox
            message={{
              style: styles.textBox2,
              text: "All done! With your help, we made a delicious apple pie!",
            }}
          />
        </ImageBackground>
      )}
      {/* <Button
        title="Counter + 1"
        //onPress={() => navigate('Activities')}
        onPress={() => setCount(count + 1)}
      /> */}
    </View>
  );
};
