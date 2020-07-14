import React, { useState } from 'react';

import { View, Button, TouchableOpacity, Image, Text } from 'react-native';
import styles from '../stylesheets/storytimeStyles';

const storytime = props => {
  return (
    <View>
      <View style={styles.main}>
        <TouchableOpacity onPress={() => props.navigation.navigate('milkMilkMilk')}>
          <Image style={styles.btn1}
            source={require('../../assets/milk.png')} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.btn2}
            source={require('../../assets/anger.png')} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.btn2}
            source={require('../../assets/fears.png')} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.btn}
            source={require('../../assets/anxiety.png')} />
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default storytime;