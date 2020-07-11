import React, { useState } from 'react';

import { View, Button, TouchableOpacity, TouchableWithoutFeedback, Image, Text, ImageBackground, Animated } from 'react-native';
import styles from '../stylesheets/milkMilkMilkStyles';

class milkMilkMilk extends React.Component {
  constructor(props) {
    super(props);

    this.moveAnimationMilk = new Animated.ValueXY({ x: 400, y: 320 })
    this.moveAnimationFridge = new Animated.ValueXY({ x: 400, y: 320})
    this.moveAnimationHouse = new Animated.ValueXY({ x: 400, y: 190 })

    this.fadeValueSprite = new Animated.Value(1)
    this.fadeValueCrystalBall = new Animated.Value(0)

    this.questions = [
      'Hey [insert name], would you like to hear something really cool?',
      'Great! You will love it! Could you say the word "milk" once?',
      'Alright, what came to mind when you said it? You can choose one of the options above:',
      'Do any of these pop up in your mind when we say milk? You can choose one of the options above:',
      'Great, what else do you think of when we say milk?',
      'You can imagine what it feels like to drink a glass of milk, right? It is cold, creamy, and coats your mouth!',
      'You were thinking about actual milk and your past experiences with milk. Together, we made a sound--milk, but do you realie there is no milk physically?',
      'Yet it felt very present. We were seeing milk and tasting it, but it was only present in our minds. If you want, we can try an exercise together!',
    ]

    this.answers = [
      [
        { option: 'Yes, please!', func: () => this._fade()},
        { option: 'Maybe later' }
      ],
      [
        { option: 'I said it!', func: () => this._moveMilk() },
        { option: 'I thought it!', func: () => this._moveMilk() }
      ],
      [
        { option: 'refrigerator' },
        { option: 'I like milk' },
        { option: 'I have some at home' }
      ],
      [
        { option: 'it\'s in a glass' },
        { option: 'cows' },
        { option: 'ice cream' }
      ],
      [
        { option: 'I can taste it' },
        { option: 'it tastes cold' },
        { option: 'it\'s refreshing' }
      ],
      [
        { option: 'A bit' },
        { option: 'Exactly' },
        { option: 'I guess' }
      ],
      [
        { option: 'Next' }
      ],
      [
        { option: 'Yes!' },
        { option: 'Maybe later!' }
      ],
    ]

    this.state = {
      question: 0,
      answers: 0,
      show: 'sprite',
      exit: false,
    }

    this.exit = this.exit.bind(this);
    this.exitOut = this.exitOut.bind(this);
    this.dontExitOut = this.dontExitOut.bind(this);
  }

  exit() {
    this.setState({ exit: true });
  }

  exitOut() {
    this.props.navigation.navigate('Storytime');
  }

  dontExitOut() {
    this.setState({ exit: false });
  }

  _moveMilk = () => {
    Animated.timing(this.moveAnimationMilk, {
      toValue: {x: 240, y: 300},
      // duration: 1000,
    }).start();

    setTimeout(() => {
      Animated.timing(this.moveAnimationFridge, {
      toValue: {x: 60, y: 300},
      // duration:1000,  
      }).start()
      setTimeout(() => {Animated.timing(this.moveAnimationHouse, {
        toValue: {x: 140, y: 160},
        // duration:1000,  
      }).start()}, 1000)
  }, 1000)
    
    this.setState({
      question: this.state.question + 1,
      answers: this.state.answers + 1,
    });
  }
  
  _fade = () => {
    this._fadeSprite();
    setTimeout(() => {
      this.setState({ 
        show: 'ball',  
        question: this.state.question + 1,
        answers: this.state.answers + 1,
      });
      this._fadeCrystalBall();
    }, 1000);
  }

  _fadeCrystalBall = () => {
    Animated.timing(this.fadeValueCrystalBall, {
      toValue: 1,
      duration: 1000,
    }).start();
  }

  _fadeSprite = () => {
    Animated.timing(this.fadeValueSprite, {
      toValue: 0,
      duration: 1000,
    }).start();
  }

  render() {
    let spriteOrBall;
    if (this.state.show === 'sprite') {
      spriteOrBall = 
      <Animated.View style={{opacity: this.fadeValueSprite, position: 'absolute', top:'34%', right: 0}}>
        <Image source={require('../../assets/sprite_still.png')}
          style={styles.sprite} />
      </Animated.View>
    } else if (this.state.show === 'ball') {
      spriteOrBall =
      <Animated.View style={{opacity: this.fadeValueCrystalBall}}>
        <View style={styles.circle}>
          <Image source={require('../../assets/crystal_ball.png')}
            style={styles.ball} />
        </View>
      </Animated.View>
    }

    return (
      <View>
        <ImageBackground source={require('../../assets/storytime_background.png')} 
        style={styles.image}>
  
          <View style={styles.main}>
            {spriteOrBall}
          </View>
          
          <TouchableOpacity style={styles.exit}
            onPress={() => this.exit()}
            >
            <Image source={require('../../assets/exit_storytime.png')}
            style={styles.exit}/>
          </TouchableOpacity>

          {this.state.exit ? 
            (
              <View style={styles.exitBox}>
                <View style={styles.exitTop}>
                  <Text style={styles.exitText}>Are you sure you want to quit storytime?</Text>
                </View>
                <View style={styles.exitBottom}>
                  <TouchableOpacity style={styles.yesNo}
                    onPress={() => this.exitOut()}
                    >
                    <Text style={styles.exitYNText}>Yes</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.no}
                    onPress={() => this.dontExitOut()}
                    >
                    <Text style={styles.exitYNText}>No</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : null
          }

          <Animated.View  style={[styles.milk, this.moveAnimationMilk.getLayout()]}>
            <TouchableWithoutFeedback style={styles.milk} >
              <Image source={require('../../assets/milk2.png')} style={styles.milkImage} />
            </TouchableWithoutFeedback>
          </Animated.View>

          <Animated.View  style={[styles.fridge, this.moveAnimationFridge.getLayout()]}>
            <TouchableWithoutFeedback style={styles.fridge} >
              <Image source={require('../../assets/fridge.png')} style={styles.fridgeImage} />
            </TouchableWithoutFeedback>
          </Animated.View>

          <Animated.View  style={[styles.house, this.moveAnimationHouse.getLayout()]}>
            <TouchableWithoutFeedback style={styles.house} >
              <Image source={require('../../assets/house.png')} style={styles.houseImage} />
            </TouchableWithoutFeedback>
          </Animated.View>

          <View style={styles.box}>
            <View style={styles.top}>
              <Text style={styles.question}>{this.questions[this.state.question]}</Text>
            </View>
  
            <View style={styles.bottom}>
              {this.answers[this.state.answers].map((a, i) => {
                if (i === 0) {
                  return (
                    <TouchableOpacity key={i} style={styles.answer1} onPress={a.func}>
                      <Text style={styles.a}>{a.option}</Text>
                    </TouchableOpacity>
                  )
                } else {
                  return (
                    <TouchableOpacity key={i} style={styles.answer} 
                      onPress={a.func}>
                      <Text key={i} style={styles.a}>{a.option}</Text>
                    </TouchableOpacity>
                  )
                }
              }
              )}
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

export default milkMilkMilk;