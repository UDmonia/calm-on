import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

/**
 * Description: The Exit component takes the current screen and
 *              pops it off of the navigation stack
 */
export default Exit = (props) => {
  // using useNavigation allows us to access the navigations stack
  navigation = useNavigation();

  const styles = StyleSheet.create({
    img: {
      height: props.height ? props.height : 30,
      width: props.width ? props.width : 30,
    },
  });

  return (
    <TouchableOpacity
      onPress={() => {
        if (props.navTo) {
          navigation.navigate(props.navTo);
        } else {
          navigation.pop();
        }
      }}
    >
      <Image
        style={styles.img}
        source={
          props.img ? props.img : require("../../assets/exit/blkExitBtn.png")
        }
      />
    </TouchableOpacity>
  );
};
