import React, {useState} from "react";
import { View, Button, Image, TouchableOpacity, Text } from "react-native";
import { logout } from "../actions/session_actions.js";
import { useDispatch } from "react-redux";
import styles from '../stylesheets/profileStyles.js';
import { useSelector } from "react-redux";

const coaches = [
  {name: 'Auora',img: require('../../assets/profile/auora.png')},
  {name: 'Flynn',img: require('../../assets/profile/flynn.png')},
  {name: 'Sprite', img: require('../../assets/profile/sprite.png')}
];

const Profile = ({ navigation: { navigate, setOptions } }) => {
  const dispatch = useDispatch();

  // pull coach from redux when ready
  const email = useSelector(state=>state.session.user.email);
  const name = useSelector(state=>state.session.user.name);
  const [coachIndex, setIndex] = useState(0);

  const settings = [
    {field: 'Email', data: email},
    {field: 'Password', data: '••••••••••', description: 'Enter your old password'},
    {field: 'Name', data: name},
    {field: 'Coach', data: coaches[coachIndex].name}
  ];

  const [setting, updateSetting] = useState(settings);

  const logoutUser = () => {
    dispatch(logout());
    navigate("Splash");
  };

  const selectSetting =(setting)=> {
      navigate('Setting', {
        header: setting.field,
        description: setting.description? setting.description: null,
        data: setting.data,
        email
      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
          {settings.map((setting,k)=>(
            <TouchableOpacity onPress={()=>selectSetting(setting)} style={styles.field} key={k}>
            <View style={styles.fieldContainer}>
              <Text style={styles.header} >{setting.field}</Text>
              {setting.field !== 'Coach'?
              <Text style={styles.text}>{setting.data}</Text>
              :
              <View style={styles.coachContainerProfile}>
                <Image source={coaches[coachIndex].img} />
              </View>
              }
            </View>
            <Image style = {styles.chevron} source={require('../../assets/profile/chevronLeft.png')}/>
            </TouchableOpacity>
          ))}

        <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button,{marginTop:'10%'}]} onPress={logoutUser}><Text style={styles.buttonText}>Log Out</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;
