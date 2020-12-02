import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "../stylesheets/countingStyles";
import sprit from "../../assets/counting/spirit1.png";
import bg from "../../assets/counting/backdrop.png";
import Exit from "./Exit";
import kpiData from "../data/kpiData";

/**
 * This componet is an intermediate step
 * for handeling recipe transitions
 *
 * The componet will render all necessary objects and when necessary
 * will navigate to counting and pass the {actData}
 * (which is the data for the next recipe) to counting
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

export default CountingPrompt = ({ route, navigation: { navigate } }) => {
  const [next, setNext] = useState(true);
  const { boxes } = route.params;
  const { actData } = route.params;
  const { counter } = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.backImage}>
        <View style={styles.exitPosition}>
          <Exit navTo={"chatPlaceholder"} />
        </View>
        <View style={styles.countDis}>
          <Text style={{ color: "#FFFFFF" }}>
            {counter + " " + actData.groupName}
          </Text>
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
          <View style={styles.recpImgBox}>
            <Image style={styles.groupImg} source={actData.groupImg} />
          </View>
        </View>
        {next ? (
          <View style={styles.fin}>
            <DialogBox
              message={{ style: styles.textBox2, text: actData.dialog[1] }}
            />
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => setNext(!next)}
            >
              <Text style={{ color: "#3B96B2" }}>Next</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.fin}>
            <DialogBox
              message={{ style: styles.textBox2, text: actData.dialog[2] }}
            />
            {actData.next != null ? (
              <View style={styles.buttonView}>
                <TouchableOpacity
                  style={styles.navButton}
                  onPress={() => navigate("chatPlaceholder")}
                >
                  <Text style={{ color: "#3B96B2" }}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.navButton}
                  onPress={() => {
                    setNext(!next),
                      navigate("Counting", { stuff: actData.next });
                  }}
                >
                  <Text style={{ color: "#3B96B2" }}>Next Recipe</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.buttonView}>
                <TouchableOpacity
                  style={styles.navButton}
                  onPress={() => navigate("kpi", {
                    bg: bg,
                    pMsg: kpiData.counting.primMsg,
                    sMsg: kpiData.counting.secMsg,
                    image: kpiData.counting.img,
                  })}
                >
                  <Text style={{ color: "#3B96B2" }}>Next</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      </ImageBackground>
    </View>
  );
};
