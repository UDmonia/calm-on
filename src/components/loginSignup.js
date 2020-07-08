
import React, { useState } from 'react';
import { DatePickerIOS, ImageBackground, Image, Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

//import { LinearGradient } from 'expo-linear-gradient'
import styles from './loginSignup.styles'
import DatePicker from 'react-native-datepicker';



export default function LoginSignup() {
  //state for switching between login and signup page
  const [login, setLogin] = useState(true)

  //state for birthdate... not workin
  const [chosenDate, setChosenDate] = useState(new Date());

  return (

    //Outer most container
    <View style={styles.container}>

      {/*background image*/}
      <ImageBackground style={styles.background} source={require('./images/backgroundImage.png')}>

        {/*inner container for adjusting the background image rgb*/}
        <View style={styles.innerContainer}>

          {/*logo*/}
          <View style={styles.logo}>
            <Image style={styles.image} source={require('./images/logo.png')} />
          </View>

          {/*Login page button*/}
          <View style={styles.buttonGroup}>
            <TouchableOpacity onPress={() => setLogin(true)}
              style={login ? { ...styles.topButtons, borderBottomWidth: 5, } : null}>
              <Text style={login ? { ...styles.topButtonText, fontWeight: 'bold' } : { ...styles.topButtonText }}>Login</Text>
            </TouchableOpacity>

            {/*Signup page button*/}
            <TouchableOpacity onPress={() => setLogin(false)}
              style={!login ? { ...styles.topButtons, marginLeft: 50, borderBottomWidth: 5, } : { marginLeft: 50 }}>
              <Text style={!login ? { ...styles.topButtonText, fontWeight: 'bold' } : { ...styles.topButtonText }}>Sign Up</Text>
            </TouchableOpacity>
          </View>


          {/*Switch between signup and login, if login is true, switch to login, if signup is true, switch to signup*/}
          {login ?

            //**************************************Login Form***********************************
            <View>
              <View style={styles.form}>

                <Text style={styles.description} >Email*</Text>
                <View style={styles.inputAndIcon}>
                  <Image styles={styles.icon} source={require('./images/mail.png')} />
                  <TextInput clearButtonMode={'while-editing'} placeholder='Email...' style={styles.input} />
                </View>

                <Text style={styles.description} >Password*</Text>
                <View style={styles.inputAndIcon}>
                  <Image styles={styles.icon} source={require('./images/password.png')} />
                  <TextInput secureTextEntry={true} clearButtonMode={'while-editing'} placeholder='Password...' style={styles.input} />
                </View>

              </View>

              <View>
                <TouchableOpacity title='Log in' style={styles.bottomButton} >
                  <Text>Log In</Text>
                </TouchableOpacity>
              </View>

            </View>
            //***********************************end of log in form*****************************************

            :

            //**************************************Signup Form***********************************
            <View>
              <View style={styles.form}>

                <Text style={styles.description} >Email*</Text>
                <View style={styles.inputAndIcon}>
                  <Image styles={styles.icon} source={require('./images/mail.png')} />
                  <TextInput clearButtonMode={'while-editing'} placeholder='Email...' style={styles.input} />
                </View>

                <Text style={styles.description} >Password*</Text>
                <View style={styles.inputAndIcon}>
                  <Image styles={styles.icon} source={require('./images/password.png')} />
                  <TextInput clearButtonMode={'while-editing'} placeholder='Password...' style={styles.input} />
                </View>

                <Text style={styles.description} >Confirm Password*</Text>
                <View style={styles.inputAndIcon}>
                  <Image styles={styles.icon} source={require('./images/passwordConfirmed.png')} />
                  <TextInput secureTextEntry={true} clearButtonMode={'while-editing'} placeholder='Confirm Password...' style={styles.input} />
                </View>

                <Text style={styles.description} >Birthday</Text>
                <View style={styles.inputAndIcon}>
                  <Image styles={styles.icon} source={require('./images/date.png')} />
                  <TextInput dataDetectorTypes={'calendarEvent'} placeholder='mm/dd/yyyy' style={styles.input} />
                </View>
              </View>

              <View>
                <TouchableOpacity style={{ ...styles.bottomButton, width: 155 }} >
                  <Text>Create Account</Text>
                </TouchableOpacity>
              </View>

            </View>
            //***********************************end of sign up form*****************************************

          }
        </View>

      </ImageBackground>
    </View>
  );
}