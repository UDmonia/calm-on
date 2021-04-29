import React, {useState} from "react";
import { View, Button, Image, TouchableOpacity, Text } from "react-native";
import { logout } from "../actions/session_actions.js";
import { useDispatch } from "react-redux";
import styles from '../stylesheets/profileStyles.js';
import { useSelector } from "react-redux";

const coaches = [
  {name: 'Auora',img: 'auora.png'},
  {name: 'Flynn',img: 'auora.png'},
  {name: 'Sprite', img: 'auora.png'}];

const Profile = ({ navigation: { navigate } }) => {


  const email = useSelector(state=>state.session.user.email);
  const name = useSelector(state=>state.session.user.name);
  const [coachIndex, setIndex] = useState(0);

  const settings = [
    {field: 'Email', data: email},
    {field: 'Password', data: '1234'},
    {field: 'Name', data: name},
    {field: 'Coach Selection', data: coaches[coachIndex].name}
  ];

  const [setting, updateSetting] = useState(settings);

  const logoutUser = () => {
    dispatch(logout());
    navigate("Splash");
  };

  return (
    <View style={styles.main}>
      {/* <TouchableOpacity style={styles.field}>
        <View >
          <Text style={styles.header} >Email</Text>
          <Text style={styles.text}>{email}</Text>
        </View>
        <Image style = {styles.chevron} source={require('../../assets/profile/chevronLeft.png')}/>
        </TouchableOpacity> */}
        {settings.map((setting,k)=>(
          <TouchableOpacity style={styles.field} key={k}>
          <View >
            <Text style={styles.header} >{setting.field}</Text>
            <Text style={styles.text}>{setting.data}</Text>
          </View>
          <Image style = {styles.chevron} source={require('../../assets/profile/chevronLeft.png')}/>
          </TouchableOpacity>
        ))}

      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={logoutUser}><Text style={styles.buttonText}>Log Out</Text></TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
