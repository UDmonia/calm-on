import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from "../stylesheets/healthyHabitsTemplateStyles";
import Exit from "../components/Exit.js";
import habitData from "../data/habitData";

<script src="http://localhost:8097"></script>
//Item component
function Item(props) {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.item}>
                <View style={styles.leftSide}>
                    <Text style={styles.itemTitle}>{props.index}. {props.title}</Text>
                    <Text style={styles.itemDescription}>{props.description}</Text>
                </View>
                <View style={styles.rightSide}>
                    <Image style={styles.img} source={props.img}/>
                </View>
            </View>
        </View>
    );
}
//Main component
export default function HealthyHabitsTemplate({ route }) {

    // takes the name passed in through the route and converts it into the key name
    // the key name is just the title without spaces (ex. Healthy Habits -> HealthyHabits)
    // This currently only works when the page is displayed directly after the activity screen this is because nothing is being passed from intro screen to the acitivites themselves so this is the solution for the meantime.

    var pageName = route.params.name;
    pageName = pageName.replace(/\s/g, '');

    return (
      <View style={[styles.container, {backgroundColor: habitData[pageName].color }]}>
        <Exit img={require("../../assets/exit/whtExitBtn.png")} navTo={"Modal"} />
        <View style={styles.topText}>
          <Text style={styles.title}>{route.params.name}</Text>
        </View>
        <View style={styles.bottomContainer}>
          {habitData[pageName].steps.map((step, index) =>
            <Item
                key={index}
                index={index + 1}
                title={step.title}
                description={step.description}
                img={step.img}
            />
          )}
        </View>
      </View>
    );
  }