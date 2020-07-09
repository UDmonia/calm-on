import React, { useState } from 'react';

import { View, Button, TouchableOpacity, Image, Text, ImageBackground } from 'react-native';
import styles from '../stylesheets/milkMilkMilkStyles';

class milkMilkMilk extends React.Component {
  constructor(props) {
    super(props);

    this.questions = [
      'Hey [insert name], would you like to hear something really cool?',
      'Alright, what came to mind when you said it? You can choose one of the options above:',
      'Do any of these pop up in your mind when we say milk? You can choose one of the options above:',
      'Great, what else do you think of when we say milk?',
      'You can imagine what it feels like to drink a glass of milk, right? It is cold, creamy, and coats your mouth!',
      'You were thinking about actual milk and your past experiences with milk. Together, we made a sound--milk, but do you realie there is no milk physically?',
      'Yet it felt very present. We were seeing milk and tasting it, but it was only present in our minds. If you want, we can try an exercise together!',
    ]

    this.answers = [
      [
        'I said it!',
        'I thought it!'
      ],
      [
        'refrigerator',
        'I like milk',
        'I have some at home'
      ],
      [
        'it\'s in a glass',
        'cows',
        'ice cream'
      ],
      [
        'I can taste it',
        'it tastes cold',
        'it\'s refreshing'
      ],
      [
        'A bit',
        'Exactly',
        'I guess'
      ],
      [
        'Next'
      ],
      [
        'Yes!',
        'Maybe later!'
      ],
    ]
  }

  render() {

    return (
      <View>
        <ImageBackground source={require('../../assets/storytime_background.png')} 
        style={styles.image}>
  
          <View style={styles.main}>
            <Image source={require('../../assets/sprite_still.png')}
            style={styles.sprite}/>
          </View>
  
          <View style={styles.box}>
            <View style={styles.top}>
              <Text style={styles.question}></Text>
            </View>
  
            <View style={styles.bottom}>
  
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

export default milkMilkMilk;