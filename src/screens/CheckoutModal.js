import React, {useState, useEffect} from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import { useSelector } from "react-redux";
import styles from '../stylesheets/checkoutModalStyles.js';

const CheckoutModal=({isCheckout})=>{
    return(
        <View style={styles.main}>
          <TouchableOpacity style={styles.closeButton} onPress={()=>{isCheckout(false)}}>
            <Text>Close</Text>
          </TouchableOpacity>
          <Text>checkout page</Text>
        </View>
    )
};

export default CheckoutModal;

