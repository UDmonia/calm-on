import React, {useState, useEffect} from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import styles from '../stylesheets/cashShopStyles.js';

const Toggler =({text1, text2, callback})=>{
  const [option1, isOption1] = useState(true);

  const activeStyle = {
    backgroundColor: '#A5DFF0',
    borderRadius: 10
};

    return(
      <View style={styles.slider}>
      <TouchableOpacity onPress={()=>{
        isOption1(true);
        callback(true);
        }} style={[styles.textContainer, option1 && activeStyle]}>
          <Text style={styles.text}>{text1}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        isOption1(false);
        callback(false);
        }} style={[styles.textContainer, !option1 && activeStyle]}>
          <Text style={styles.text}>{text2}</Text>
      </TouchableOpacity>
  </View>
    )
};

export default Toggler;

