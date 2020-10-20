import React from "react";
import { Text, View, ImageBackground, Image } from "react-native";

export default PicnicSeeAll = ({ route }) => {
  const { arr } = route.params;
  return (
    <ImageBackground
      source={require("../../assets/adventure/locations/picnic/picnicBackgroundTint.png")}
      style={{
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {arr.map((item) => {
        return (
          <View
            style={{
              height: 89,
              width: 89,
              margin: 5,
              backgroundColor: "#E9E9E9",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={item.img}
              style={{
                height: 50,
                width: 50,
                resizeMode: "contain",
                margin: 5,
              }}
            />
            <Text key={item.name}>{item.name}</Text>
          </View>
        );
      })}
    </ImageBackground>
  );
};
