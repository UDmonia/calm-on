import React, {useState, useEffect} from "react";
import { View, Button, Image, TouchableOpacity, Text, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import styles from '../stylesheets/profileStyles.js';
import { useSelector } from "react-redux";

const Verification = ({ route, navigation: { navigate } }) => {

  const [password, setPassword] = useState({a:'',b:''});
  const [verified, setVerified] = useState(false);
  const [passwordsValid, checkPassword] = useState(false);
  const {email} = route.params;

  // handle changes in New Password field
  const handlePasswordA= (a) => {
    const newPassword = {...password};
    newPassword.a = a;
    setPassword(newPassword);
  };

  // handle changes in Re-enter Password field
  const handlePasswordB= (b) => {
    const newPassword = {...password};
    newPassword.b = b;
    setPassword(newPassword);
  };

  // confirm that passwords are exactly the same before submtting
  const confirmNewPassowrd = () => {
    // confirm passwords are same
    if (passwordsValid) {
      // api call
      // go back to profile page?
      navigate('Profile');
    }
  };

  // verify emailed code
  const verifyCode = () => {
    // verify the code
      // successful verification: display 'enter new password page'
      setVerified(true);
  };

  useEffect(()=>{
    if (password.a === password.b) {
      checkPassword(true);
    } else {
      checkPassword(false);
    }
  }, [password]);

  return (
    <View style={styles.container}>
      <View style={[styles.main,{marginTop: '20%'}]}>
      {!verified?
        <View>
          <Text style={styles.header}>
            Enter 4 digit code sent to {email}
          </Text>
          <TextInput keyboardType='numbers-and-punctuation' style={styles.input}/>
        </View>
          :
          <View style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Text style={styles.header}>New Password</Text>
            <TextInput clearButtonMode='while-editing' value={password.a} onChangeText={text=>handlePasswordA(text)}
             style={styles.input} />
            <Text style={styles.header}>Re-enter Password</Text>
            <TextInput clearButtonMode='while-editing' value={password.b} onChangeText={text=>handlePasswordB(text)} style={[styles.input,{marginBottom:'0%'}]} />
            {password.b.length !== 0 && !passwordsValid?
              <Text style={styles.authError}>Passwords don't match</Text>
            :
              null
            }
          </View>
        }
        <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={verified? confirmNewPassowrd:verifyCode} style={[styles.button,{marginTop:'10%'}]} ><Text style={styles.buttonText}>Enter</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Verification;
