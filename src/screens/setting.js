import React, {useState, useLayoutEffect, useEffect} from "react";
import { View, Button, Image, TouchableOpacity, TextInput,Text } from "react-native";
import { logout } from "../actions/session_actions.js";
import { useDispatch } from "react-redux";
import styles from '../stylesheets/profileStyles.js';
import { useSelector } from "react-redux";

const coaches = [
  {name: 'Auora',img: require('../../assets/profile/auora.png')},
  {name: 'Flynn',img: require('../../assets/profile/flynn.png')},
  {name: 'Sprite', img: require('../../assets/profile/sprite.png')}
];

const Setting = ({ route, navigation: { navigate, setOptions } }) => {
  const {description, header, data, email} = route.params;
  const [coachIndex, setIndex] = useState(0);

  useLayoutEffect(()=>{
    setOptions({
      title: header
    })
  }, [header]);

  const cycleCoach =(next)=>{
    if (next) {
      setIndex(coachIndex=>coachIndex+1);
    } else {
      setIndex(coachIndex=>coachIndex-1);
    }
  };

  const handleUpdate =(header)=>{
    // email
    // password
    if (header === 'Password') {
      // api call
        // successful return: navigate to verification page
        navigate('Verification', {email: email})
    }
    // name
    // coach

    // some kind of successful message
    // some kind of error message
  }

  useEffect(()=>{
    if (coachIndex > coaches.length-1) {
      setIndex(0);
    }
    if (coachIndex < 0) {
      setIndex(coaches.length-1);
    }
  },[coachIndex]);



  return (
    <View style={styles.container}>
      <View style={[styles.main,{marginTop: '20%'}]}>
        {header !== 'Coach'?
        // display any other settings but Coach
        <View>
          <Text style={styles.header}>{description? description: header}</Text>
          <TextInput secureTextEntry= {header==='Password'} style={styles.input} defaultValue={data} clearButtonMode='while-editing'/>
        </View>
          :
          // display current coach and can cycle through all coaches
        <View style={styles.coachContainer}>
          <TouchableOpacity onPress={()=>cycleCoach(false)}>
            <Image style = {styles.chevron} source={require('../../assets/profile/chevronLeft_Med.png')}/>
          </TouchableOpacity>
          <Image style = {styles.chevron} source={coaches[coachIndex] && coaches[coachIndex].img}/>
          <TouchableOpacity onPress={()=>cycleCoach(true)}>
            <Image style = {styles.chevron} source={require('../../assets/profile/chevronRight_Med.png')}/>
          </TouchableOpacity>
        </View>
          }
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=>handleUpdate(header)} style={[styles.button,{backgroundColor:'#8AABFF'}]}><Text style={[styles.buttonText,{color:'white'}]}>Update {header}</Text></TouchableOpacity>
      </View>
    </View>
  );
};

export default Setting;
