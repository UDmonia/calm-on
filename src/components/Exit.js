import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

/**
 * Description: The Exit component takes the current screen and
 *              pops it off of the navigation stack
 */
export default Exit = (props) => {
  // using useNavigation allows us to access the navigations stack
  navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        props.navTo ? navigation.navigate(props.navTo) : navigation.pop()
      }
    >
      <Image
        style={{
          height: props.height ? props.height : 30,
          width: props.width ? props.width : 30,
        }}
        source={
          props.img ? props.img : require("../../assets/exit_storytime.png")
        }
      />
    </TouchableOpacity>
  );
};

// const Logo = styled.Image`
//   width: ${(props) => (props.width ? wp(props.width) : "300")}px;
//   height: ${(props) => (props.height ? hp(props.height) : "348")}px;
//   ${(props) =>
//     props.width || props.height ? "resizeMode: contain;" : "margin: 75px auto;"}
//   margin-top: ${(props) => (props.marginTop ? hp(props.marginTop) : "0")}px;
//   margin-bottom: ${(props) =>
//     props.marginBottom ? hp(props.marginBottom) : "0"}px;
// `;
