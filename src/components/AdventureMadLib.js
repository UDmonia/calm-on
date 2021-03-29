import React from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import { navigate } from "../components/RootNavigation";
import { windowHeight, windowWidth } from "../util/windowDimensions";
import styles from '../stylesheets/adventureLocationMadLibStyles';

function AdventureMadLib(props) {

  console.log(props);

  function conditionalMadLibRender() {
    switch(props.location){
      // Picnic
      case 0:
        switch(props.randomStory){
          // Picnic Story 1
          case 0:
            switch(props.progress){
              case 0:
                return (
                  <Text style={styles.storyText}>
                    Dear Diary,{"\n"}It was a beautiful day outside. There were birds
                    chirping and the sun was shining bright. I wanted to go on a
                    picnic with my friends, but they were busy so I went with mom. Dad
                    said he was too busy doing boring grown-up stuff. I took an{" "}
                    <Image style={styles.inlineImage} source={props.randomWords[0].img} />,
                    my{" "}
                    <Image style={styles.inlineImage} source={props.randomWords[1].img} />,
                    my{" "}
                    <Image style={styles.inlineImage} source={props.randomWords[2].img} />,
                    and my stuffed{" "}
                    <Image style={styles.inlineImage} source={props.randomWords[3].img} />.
                    When I got there, I sat on my{" "}
                    <Image style={styles.inlineImage} source={props.randomWords[4].img} />{" "}
                    with mom </Text>
                )
              case 1:
                return (
                  <Text style={styles.storyText}>
                    and saw people drawing{" "}
                    <Image style={styles.inlineImage} source={props.randomWords[5].img} />.
                    There was a farm near the park which had{" "}
                    <Image style={styles.inlineImage} source={props.randomWords[6].img} />,{" "}
                    <Image style={styles.inlineImage} source={props.randomWords[7].img} />,
                    and{" "}
                    <Image style={styles.inlineImage} source={props.randomWords[8].img} />.
                    After visiting the farm, we started to play various games such as
                    hopscotch. We spent an hour at the swings and then mom said we had
                    to go home. It was a good day overall. I hope tomorrow will be a
                    good day as well.
                  </Text>
                )
              default:
                navigate("kpi", {
                  bg: props.bg,
                  pMsg: props.pMsg,
                  sMsg: props.sMsg,
                });
            }
          // Picnic Story 2
          case 1:
            switch(props.progress){
              case 0:
                return (
                  <Text style={styles.storyText}>
                    Dear Diary,{"\n"}
                    Mom took us to the park to have a picnic today and I saw the strangest things. On my way there, I saw a boy and girl running with a <Image style={styles.inlineImage} source={props.randomWords[0].img} />. Then, I heard a sound and looked up to see a <Image style={styles.inlineImage} source={props.randomWords[1].img} /> holding a <Image style={styles.inlineImage} source={props.randomWords[2].img} /> on the tree. A <Image style={styles.inlineImage} source={props.randomWords[3].img} /> was reading a book called <Image style={styles.inlineImage} source={props.randomWords[4].img} /> and <Image style={styles.inlineImage} source={props.randomWords[5].img} />.
                  </Text>
                )
              case 1:
                return (
                  <Text style={styles.storyText}>We sat down next to an <Image style={styles.inlineImage} source={props.randomWords[6].img} /> playing with a <Image style={styles.inlineImage} source={props.randomWords[7].img} /> and <Image style={styles.inlineImage} source={props.randomWords[8].img} />. We stayed at the park until Mom said it was time to go. What an interesting day!</Text>
                )
              default:
                navigate("kpi", {
                  bg: props.bg,
                  pMsg: props.pMsg,
                  sMsg: props.sMsg,
                });
            }
          // Picnic Story 3
          case 2:
            switch(props.progress){
              case 0:
                return (
                  <Text style={styles.storyText}>
                    Dear Diary,{"\n"}
                    Picnic Day today! I made sure to pack <Image style={styles.inlineImage} source={props.randomWords[0].img} /> and <Image style={styles.inlineImage} source={props.randomWords[1].img} />. Sprite came along too! Sprite brought some funny-looking <Image style={styles.inlineImage} source={props.randomWords[2].img} /> and some delicious <Image style={styles.inlineImage} source={props.randomWords[3].img} />. It was an amazing day. We saw some jumping <Image style={styles.inlineImage} source={props.randomWords[4].img} />, flying <Image style={styles.inlineImage} source={props.randomWords[5].img} />, and a purple <Image style={styles.inlineImage} source={props.randomWords[6].img} />.  Aurora and Flynn were there as well.  Both of them
                  </Text>
                )
              case 1:
                return (
                  <Text style={styles.storyText}>
                    got <Image style={styles.inlineImage} source={props.randomWords[7].img} /> and <Image style={styles.inlineImage} source={props.randomWords[8].img} /> and they gave their prizes to their siblings.  Overall it was a great day.  Flynn’s birthday is coming up.  Maybe we can come back here?
                  </Text>
                )
              default:
                navigate("kpi", {
                  bg: props.bg,
                  pMsg: props.pMsg,
                  sMsg: props.sMsg,
                });
            }
          default:
            return <Text>No Story</Text>
        }
      // Movie
      case 1:
        return <Text>Movie</Text>
      // Amusement Park
      case 2:
        return <Text>Park</Text>
      default: 
        return <Text>No Location</Text>
    }
  }
  return (
    <TouchableOpacity style={{flex: 1}} onPress={() => props.setProgress(props.progress + 1)}>
      {conditionalMadLibRender()}
    </TouchableOpacity>
  );
}

export default AdventureMadLib;
