import React, {useState, useLayoutEffect} from "react";
import { View, Button, Image, TouchableOpacity, TextInput,Text } from "react-native";
import { logout } from "../actions/session_actions.js";
import { useDispatch } from "react-redux";
import styles from '../stylesheets/profileStyles.js';
import { useSelector } from "react-redux";

const coaches = [
  {name: 'Auora',img: 'auora.png'},
  {name: 'Flynn',img: 'auora.png'},
  {name: 'Sprite', img: 'auora.png'}];

const Setting = ({ route, navigation: { navigate, setOptions } }) => {
  const {description, header, data} = route.params;

  useLayoutEffect(()=>{
    setOptions({
      title: header
    })
  }, [header])

  return (
    <View style={styles.container}>
      <View style={[styles.main,{marginTop: '20%'}]}>
        <Text style={styles.header}>{description? description: header}</Text>
        <TextInput style={styles.input} defaultValue={data} clearButtonMode='while-editing'/>
      </View>


      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button,{backgroundColor:'#8AABFF'}]}><Text style={[styles.buttonText,{color:'white'}]}>Update {header}</Text></TouchableOpacity>
      </View>
    </View>
  );
};

export default Setting;
