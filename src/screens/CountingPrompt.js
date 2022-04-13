import React, { useState } from "react";
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
import Exit from "../components/Exit";
import kpiData from "../data/kpiData";
import hex from "../stylesheets/hexCodes";
import { windowHeight, windowWidth } from "../util/windowDimensions";

/**
 * This componet is an intermediate step for handeling recipe transitions
 *
 * The componet will render all necessary objects and when necessary will
 * navigate to counting and pass the { actData }
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

  var positionList = [];
  async function randomizePosition() {
    console.log("height: " + windowHeight, "width: " + windowWidth);
    var i;
    let topPosArr = [];
    let leftPosArr = [];
    for (i = 0; i < actData.next.items.length; i++) {
      let topPos = (
        Math.random() * (windowHeight * 0.35 - windowHeight * 0.005) +
        windowHeight * 0.005
      ).toFixed(3);
      let leftPos = (
        Math.random() * (windowWidth * 0.895 - windowWidth * 0.005) +
        windowWidth * 0.005
      ).toFixed(3);

      // grid method
      // leftPos start: windowWidth*0.005, end : windowWidth*0.895
      // fruit area width = (0.895 - 0.005)*414  = 0.89*414 = 368
      // topPos start: windowWidth*0.005, end: windowWidth*0.35
      // fruit area height = (0.35-0.005)*896 = 0.345*896 = 317
      // total possible positions = fruit area/ (icon height * icon width)
      // topPos from 0 to 317 in 55 pixels increments
      // leftPos from 0 to 368 in 55 pixels increments

      var xpos = {
        top: parseFloat(topPos),
        left: parseFloat(leftPos),
      };
      positionList.push(xpos);
    }
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.backImage}>
        <View style={styles.exitPosition}>
          <Exit navTo={"Modal"} />
        </View>
        <View style={styles.countDis}>
          <Text style={{ color: hex.white.white1 }}>
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
          <View style={styles.spritImgBox}>
            <Image style={styles.sprit} source={sprit} />
          </View>
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
              <Text style={{ color: hex.white.white1 }}>Next</Text>
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
                  onPress={() => navigate("Home")}
                >
                  <Text style={{ color: hex.grey.grey1 }}>Not Now</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.navButton}
                  onPress={() => {
                    setNext(!next),
                      randomizePosition().then(
                        navigate("Counting", {
                          stuff: actData.next,
                          positionList: positionList,
                        })
                      );
                  }}
                >
                  <Text style={{ color: hex.grey.grey1 }}>Next Recipe</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.buttonView}>
                <TouchableOpacity
                  style={styles.navButton}
                  onPress={() =>
                    navigate("kpi", {
                      bg: bg,
                      pMsg: kpiData.counting.primMsg,
                      sMsg: kpiData.counting.secMsg,
                      image: kpiData.counting.img,
                    })
                  }
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
