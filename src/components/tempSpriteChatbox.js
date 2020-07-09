import React, { useState } from 'react';

import { View, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Sprite = props => {
  return (
    <View>
      {/* <Button
        title='Storytime'
        onPress={() =>
          props.navigation.navigate('Storytime')
        }
        style={styles.btn}
      /> */}
      <TouchableOpacity onPress={() => props.navigation.navigate('Storytime')}>
        <Image style={styles.btn}
          source={require('../../assets/start_btn.png')}
        />
      </TouchableOpacity>
      {/* <Button
          title='Mindfulness'
          onPress={() =>
            props.navigation.navigate('Mindfulness')
          }
        /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#000000',
    height: '100%',
  },
  btn: {
    // height: 200,
    // width: 300,
  }
});

export default Sprite;