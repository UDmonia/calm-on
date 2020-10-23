import React, { useState, useRef } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import Exit from "./Exit";
import styles from "../stylesheets/picnicStyles";
import picnicData from "./picnicData";
import { navigate } from "./RootNavigation";
import chatPlaceholder from "./chatPlaceholder";

export default Picnic = ({ navigation }) => {
  const [letter, setLetter] = useState(0);
  const [selected, setSelected] = useState([]);
  const [done, setDone] = useState(false);
  const scrollViewRef = useRef();

  const alphaButton = (item) => {
    return (
      <TouchableOpacity
        onPress={() => {
          // add item to the bottom basket
          if (letter < picnicData.length - 1) {
            setSelected([
              ...selected,
              { id: item.id, name: item.itemName, img: item.image },
            ]);
            setLetter(letter + 1);
          } else if (letter === picnicData.length - 1 && !done) {
            setSelected([
              ...selected,
              { id: item.id, name: item.itemName, img: item.image },
            ]);
            setDone(true);
          }
          // TODO: when designs are finalized replace "true" with another flag that will end
          else if (done && true) {
            navigate("chatPlaceholder");
          }
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
        justifyContent: "center",
      }}
    >
      <ImageBackground
        source={require("../../assets/adventure/locations/picnic/picnicBackground.png")}
        style={styles.background}
        imageStyle={{
          resizeMode: "cover",
          flex: 1,
          width: "100%",
          height: "110%",
          top: undefined,
          overflow: "hidden",
        }}
      >
        <View
          style={{ alignSelf: "flex-start", marginLeft: 50, marginBottom: 30 }}
        >
          <Exit navTo={"chatPlaceholder"} />
        </View>
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
                navigation.navigate("PicnicSeeAll", { arr: selected });
              }}
            >
              <Text style={{ color: "white" }}>See all {">"}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          style={styles.basket}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({ animated: true })
          }
        >
          {selected.map((item) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  marginTop: 10,
                }}
              >
                <View key={item.itemName} style={styles.basketItem}>
                  <Image style={styles.img} source={item.img} />
                  <Text style={{ textAlign: "center" }}>{item.name}</Text>
                </View>
                {/* <View> */}
                <View
                  style={{
                    backgroundColor: "grey",
                    height: 59,
                    width: 1,
                  }}
                />
                {/* </View> */}
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};
