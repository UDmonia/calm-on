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
import { ScrollView } from "react-native-gesture-handler";

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
                    <Image style={styles.inlineImage} source={props.randomWords[3].img} />.                    When I got there, I sat on my{" "}
                    <Image style={styles.inlineImage} source={props.randomWords[4].img} />{" "}
                    with mom and saw people drawing{" "}
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
              case 1:
                return (
                  <Text style={styles.storyText}>
                  </Text>
                )
              case 2:
                return (
                  <Text style={styles.storyText}>
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
                    Mom took us to the park to have a picnic today and I saw the strangest things. On my way there, I saw a boy and girl running with a <Image style={styles.inlineImage} source={props.randomWords[0].img} />. Then, I heard a sound and looked up to see a <Image style={styles.inlineImage} source={props.randomWords[1].img} /> holding a <Image style={styles.inlineImage} source={props.randomWords[2].img} /> on the tree. A <Image style={styles.inlineImage} source={props.randomWords[3].img} /> was reading a book called <Image style={styles.inlineImage} source={props.randomWords[4].img} /> and <Image style={styles.inlineImage} source={props.randomWords[5].img} />. We sat down next to an <Image style={styles.inlineImage} source={props.randomWords[6].img} /> playing with a <Image style={styles.inlineImage} source={props.randomWords[7].img} /> and <Image style={styles.inlineImage} source={props.randomWords[8].img} />. We stayed at the park until Mom said it was time to go. What an interesting day!
                  </Text>
                )
              case 1:
                return (
                  <Text style={styles.storyText}></Text>
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
                    Picnic Day today! I made sure to pack <Image style={styles.inlineImage} source={props.randomWords[0].img} /> and <Image style={styles.inlineImage} source={props.randomWords[1].img} />. Sprite came along too! Sprite brought some funny-looking <Image style={styles.inlineImage} source={props.randomWords[2].img} /> and some delicious <Image style={styles.inlineImage} source={props.randomWords[3].img} />. It was an amazing day. We saw some jumping <Image style={styles.inlineImage} source={props.randomWords[4].img} />, flying <Image style={styles.inlineImage} source={props.randomWords[5].img} />, and a purple <Image style={styles.inlineImage} source={props.randomWords[6].img} />.  Aurora and Flynn were there as well. Both of them got <Image style={styles.inlineImage} source={props.randomWords[7].img} /> and <Image style={styles.inlineImage} source={props.randomWords[8].img} /> and they gave their prizes to their siblings.  Overall it was a great day.  Flynn’s birthday is coming up.  Maybe we can come back here?
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
        switch(props.randomStory){
          // Movie Story 1
          case 0:
            switch(props.progress){
              case 0:
                return (
                  <Text style={styles.storyText}>
                    Dear Diary, {"\n"}
                    Today was my best friend, Aurora’s birthday.  Her mom invited Flynn, Aurora, and me to go to the movies with them.  When we got there, it took us a while to figure out what movie we wanted to watch. Aurora wanted to watch a movie called <Image style={styles.inlineImage} source={props.randomWords[0].img} /> and the Butterfly but I did not want to. Flynn wanted to watch something about <Image style={styles.inlineImage} source={props.randomWords[1].img} /> but Aurora finds them scary. I went to the snack place and got <Image style={styles.inlineImage} source={props.randomWords[2].img} /> in the shape of a <Image style={styles.inlineImage} source={props.randomWords[3].img} />.  Aurora got a stuffed <Image style={styles.inlineImage} source={props.randomWords[4].img} /> in a <Image style={styles.inlineImage} source={props.randomWords[5].img} />.  Flynn was eating healthy all week so he wanted some junk food today.  He got <Image style={styles.inlineImage} source={props.randomWords[6].img} /> in the shape of <Image style={styles.inlineImage} source={props.randomWords[7].img} />. It came in a bag shaped like a <Image style={styles.inlineImage} source={props.randomWords[8].img} /> tree. Overall, it was a good day and I was happy! </Text>
                )
              default:
                navigate("kpi", {
                  bg: props.bg,
                  pMsg: props.pMsg,
                  sMsg: props.sMsg,
                });
            }
          // Movie Story 2
          case 1:
            switch(props.progress){
              case 0:
                return (
                  <Text style={styles.storyText}>
                    Dear Diary,{"\n"}
                    We watched a movie at school today. It was called <Image style={styles.inlineImage} source={props.randomWords[0].img} /> of the <Image style={styles.inlineImage} source={props.randomWords[1].img} />. There was a <Image style={styles.inlineImage} source={props.randomWords[2].img} /> playing with a <Image style={styles.inlineImage} source={props.randomWords[3].img} />. A <Image style={styles.inlineImage} source={props.randomWords[4].img} />  turned an otter into <Image style={styles.inlineImage} source={props.randomWords[5].img} />. Then, the <Image style={styles.inlineImage} source={props.randomWords[6].img} /> ate <Image style={styles.inlineImage} source={props.randomWords[7].img} /> and made a hot <Image style={styles.inlineImage} source={props.randomWords[8].img} /> of nuts. Do you think this is strange or cool? I will tell Auntie about this later and maybe we can watch it again later!
                  </Text>
                )
              default:
                navigate("kpi", {
                  bg: props.bg,
                  pMsg: props.pMsg,
                  sMsg: props.sMsg,
                });
            }
          // Movie Story 3
          case 2:
            switch(props.progress){
              case 0:
                return (
                  <Text style={styles.storyText}>
                    Dear Diary,{"\n"}
                    I went to the movies today with Sprite! I was so excited, I brought my <Image style={styles.inlineImage} source={props.randomWords[0].img} /> and my <Image style={styles.inlineImage} source={props.randomWords[1].img} /> along. There were many weird movies playing today like <Image style={styles.inlineImage} source={props.randomWords[2].img} /> the movie, the adventures of Kelly the <Image style={styles.inlineImage} source={props.randomWords[3].img} /> and <Image style={styles.inlineImage} source={props.randomWords[4].img} />, Fast <Image style={styles.inlineImage} source={props.randomWords[5].img} />, and the wizard of <Image style={styles.inlineImage} source={props.randomWords[6].img} />. Sprite and I went to see the Lord of the <Image style={styles.inlineImage} source={props.randomWords[7].img} />. It was funny and awesome.  I hope we can watch it again when school is done!
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
      // Amusement Park
      case 2:
        switch(props.randomStory){
          // Amusement Park Story 1
          case 0:
            switch(props.progress){
              case 0:
                return (
                  <Text style={styles.storyText}>
                    Dear Diary,{"\n"}
                    Our class had a field trip today! Aurora, Flynn, and some of our other friends went on our fairy school bus to Fairylantis Boardwalk in Fairyland.  Fairylantis had a zoo that had <Image style={styles.inlineImage} source={props.randomWords[0].img} /> that were friends with <Image style={styles.inlineImage} source={props.randomWords[1].img} />. Aurora wanted to get an <Image style={styles.inlineImage} source={props.randomWords[2].img} /> from a <Image style={styles.inlineImage} source={props.randomWords[3].img} />. After that, Flynn and I went on a <Image style={styles.inlineImage} source={props.randomWords[4].img} /> called <Image style={styles.inlineImage} source={props.randomWords[5].img} />. Aurora was scared so she did not want to tag along. Our class went for lunch at a nearby park.  None of us had blankets so we had to sit on <Image style={styles.inlineImage} source={props.randomWords[6].img} />. After that, all three of us went to the arcade to play some games. Flynn won a new <Image style={styles.inlineImage} source={props.randomWords[7].img} /> and I won new <Image style={styles.inlineImage} source={props.randomWords[8].img} />. Aurora was upset she did not win anything so I gave her my prize. Sadly, our day came to an end and we had to go back to school.  I cannot wait till I go to Fairylantis again! 
                  </Text>
                )
              default:
                navigate("kpi", {
                  bg: props.bg,
                  pMsg: props.pMsg,
                  sMsg: props.sMsg,
                });
            }
          // Amusement Park Story 2
          case 1:
            switch(props.progress){
              case 0:
                return (
                  <Text style={styles.storyText}>
                    Dear Diary,{"\n"}
                    It's my birthday today and Dad promised to take me to my favorite amusement park! I took my <Image style={styles.inlineImage} source={props.randomWords[0].img} />, <Image style={styles.inlineImage} source={props.randomWords[1].img} />, <Image style={styles.inlineImage} source={props.randomWords[2].img} />, <Image style={styles.inlineImage} source={props.randomWords[3].img} /> and toy <Image style={styles.inlineImage} source={props.randomWords[4].img} />. I went on my favorite rides called The Spinning <Image style={styles.inlineImage} source={props.randomWords[5].img} /> and Space <Image style={styles.inlineImage} source={props.randomWords[6].img} />. It was so fun I went on it twice! Then, Dad took us to play games at the arcade and we won a giant <Image style={styles.inlineImage} source={props.randomWords[7].img} />. We ate a cheeseburger and fries at my favorite restaurant  next to the <Image style={styles.inlineImage} source={props.randomWords[8].img} />. Sadly, it got dark and we had to go back home. Still, today was a good day and I was happy. I can't wait to go again!
                  </Text>
                )
              default:
                navigate("kpi", {
                  bg: props.bg,
                  pMsg: props.pMsg,
                  sMsg: props.sMsg,
                });
            }
          // Amusement Park Story 3
          case 2:
            switch(props.progress){
              case 0:
                return (
                  <Text style={styles.storyText}>
                    Dear Diary,{"\n"}
                    Today I went to the Fairylantis amusement park! I was super excited to go on all the fun rides. My favorite rides were the roaring <Image style={styles.inlineImage} source={props.randomWords[0].img} />, splash <Image style={styles.inlineImage} source={props.randomWords[1].img} />, and Space <Image style={styles.inlineImage} source={props.randomWords[2].img} />. After going on all the rides, I went to the arcade and won a bunch of prizes! I won a yellow <Image style={styles.inlineImage} source={props.randomWords[3].img} />, a stuffed <Image style={styles.inlineImage} source={props.randomWords[4].img} />, and a robot <Image style={styles.inlineImage} source={props.randomWords[5].img} />. I also won a talking <Image style={styles.inlineImage} source={props.randomWords[6].img} /> and a rubber <Image style={styles.inlineImage} source={props.randomWords[7].img} /> that I will give to my friends later.
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
      default: 
        return <Text>No Location</Text>
    }
  }
  return (
    <ScrollView 
      style={{flex: 1}} 
      onPress={() => props.setProgress(props.progress + 1)}
      showsVerticalScrollIndicator={false}>
      {conditionalMadLibRender()}
    </ScrollView>
  );
}

export default AdventureMadLib;
