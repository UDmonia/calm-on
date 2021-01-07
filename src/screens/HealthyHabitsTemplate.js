import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from "../stylesheets/healthyHabitsTemplateStyles";
import Exit from "../components/Exit.js";
import habitData from "../data/habitData";

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
export default function App() {
    return (
      <View style={styles.container}>
        <Exit navTo={"Modal"} />
        <View style={styles.topText}>
          <Text style={styles.title}>Healthy Habits</Text>
        </View>
        <View style={styles.bottomContainer}>
          {habitData.healthyHabits.steps.map((step, index) =>
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