import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const GridItem  = ({deletable, image, name, coach, cost, isCheckout}) => {
  return (
    <TouchableOpacity onPress={()=>isCheckout(true)} style={styles.gridItem}>
    <View style={styles.image}>
        <Text style={styles.text}>Image here</Text>
    </View>
    <View style={styles.bottom}>
        <View style={styles.nameContainer}>
        <Text style={[styles.text, styles.name]}>
            {name}
        </Text>
        <Text style={[styles.text, styles.name]}>
            {coach}
        </Text>
        </View>
        <Text style={[styles.text, styles.score]}>
            {cost}
        </Text>
    </View>
</TouchableOpacity>

  )
};

export default GridItem;