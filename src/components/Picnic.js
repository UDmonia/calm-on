import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import styles from "../stylesheets/picnicStyles";
import picnicData from "./picnicData";

export default Picnic = ({ navigation: { navigate } }) => {
  const [letter, setLetter] = useState(0);
  const [selected, setSelected] = useState([]);

  const alphaButton = (item) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (letter < picnicData.length - 1) {
            setSelected([
              ...selected,
              { id: item.id, name: item.itemName, img: item.image },
            ]);
            setLetter(letter + 1);
          } else {
            return null;
          }

          letter < picnicData.length - 1 ? setLetter(letter + 1) : null;
        }}
        key={item.id}
        style={styles.itemContainer}
      >
        <Image source={item.image} />
        <Text>{item.itemName}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        height: "100%",
        width: "100%",
        // alignItems: "center",
        justifyContent: "center",
        // Todo take out
        backgroundColor: "yellow",
      }}
    >
      <ImageBackground
        source={require("../../assets/adventure/locations/picnic/picnicBackground.png")}
        style={styles.background}
        imageStyle={{
          resizeMode: "cover",
          width: "100%",
          height: "100%",
          top: undefined,
          overflow: "hidden",
          // position: "absolute",
          // bottom: 0,
        }}
      >
        <View style={styles.locationContainer}>
          <Text style={styles.txtLetter}>
            What should we bring that starts with{" "}
            {picnicData[letter.valueOf()].letter}?
          </Text>
        </View>
        <View style={styles.row}>
          {picnicData[letter.valueOf()].items.map((item) => {
            return alphaButton(item);
          })}
        </View>
        <View style={styles.imgSpiritContainer}>
          <Image
            style={styles.imgSpirit}
            source={require("../../assets/adventure/spirit.png")}
          />
        </View>
      </ImageBackground>
      <View style={styles.basketContainer}>
        <View
          style={{
            backgroundColor: "#027E2A",
            width: "100%",
            minHeight: 50,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{ color: "white", marginHorizontal: 10, marginRight: 235 }}
          >
            Selected Items
          </Text>
          <View style={{ justifyContent: "flex-end", color: "white" }}>
            <TouchableOpacity
              onPress={() => {
                // console.log("hello");
                navigate("PicnicSeeAll", { arr: selected });
              }}
              style={{ color: "white" }}
            >
              <Text>See all {">"}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          style={styles.basket}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {selected.map((item) => {
            console.log(item.id);
            return (
              <View key={item.itemName} style={styles.basketItem}>
                <Image style={styles.img} source={item.img} />
                <Text style={{ textAlign: "center" }}>{item.name}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};
