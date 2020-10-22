import React from "react";
import { Text, View, ImageBackground, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Exit from "./Exit";

export default PicnicSeeAll = ({ route }) => {
  const { arr } = route.params;
  return (
    <ImageBackground
      source={require("../../assets/adventure/locations/picnic/picnicBackgroundTint.png")}
      style={{
        flex: 1,
        // flexDirection: "row",
        flexWrap: "wrap",
        // justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      {/* <SafeAreaView
        style={{
          flex: 1,
          // flexDirection: "row",
          flexWrap: "wrap",
          // justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      > */}
      <View
        style={{
          width: "100%",
          marginVertical: 50,
          marginLeft: "15%",
          alignSelf: "flex-start",
        }}
      >
        <Exit
          height={21}
          width={12}
          img={require("../../assets/kpi/chevronLeft.png")}
        />
      </View>
      <Text style={{ color: "white", fontSize: 18, marginVertical: 5 }}>
        Selected Items
      </Text>
      <View
        style={{
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
                margin: 3,
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
                  margin: 3,
                }}
              />
              <Text key={item.name}>{item.name}</Text>
            </View>
          );
        })}
      </View>
      {/* </SafeAreaView> */}
    </ImageBackground>
  );
};
