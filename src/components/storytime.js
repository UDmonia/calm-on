import React, { useState } from 'react';

import { View, Button, TouchableOpacity, Image, } from 'react-native';
import Text from './Text';
import styles from '../stylesheets/storytimeStyles';

const storytime = props => {
  return (
    <View>
      <View style={styles.main}>
        <TouchableOpacity onPress={() => props.navigation.navigate('milkMilkMilk')}>
          <Image style={styles.btn1}
            source={require('../../assets/images/milk.png')} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.btn2}
            source={require('../../assets/images/anger.png')} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.btn2}
            source={require('../../assets/images/fears.png')} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.btn}
            source={require('../../assets/images/anxiety.png')} />
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default storytime;