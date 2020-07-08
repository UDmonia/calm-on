import  React , {useState} from 'react';
import {ImageBackground,Image, Text, View, StyleSheet,TextInput, TouchableOpacity } from 'react-native';
//import { LinearGradient } from 'expo-linear-gradient'
import styles from '../stylesheets/loginSignup.styles'
import DatePicker from 'react-native-datepicker';


export default LoginSignup =() => {
  //state for switching between login and signup page
  const [login,isLogin] = useState(true) 

  //state for birthdate... not workin
  
  const [signup,setSignup] = useState({
    email:'',
    password: '',
    confirmPassword: '',
    birthday: '',
    name: ''
  })

  const [signin,setSignin] = useState({
    email:'',
    password: '',

  })

  const handleSignup = () => {
    //send user info to backend

    //input validation:
    
  }

  const handleLogin = ()=> {
    //get user from backend and go to user homepage
  }


  return (

  //Outer most container
    <View style={styles.container}>

      {/*background image*/}
      <ImageBackground style = {styles.background} source = {require('./images/backgroundImage.png')}>

        {/*inner container for adjusting the background image rgb*/}
        <View style = {styles.innerContainer}>

          {/*logo*/}
          <View style = {styles.logo}>
            <Image style = {styles.image} source = {require('./images/logo.png')}/>
          </View>

          {/*Login page button*/}
          <View style = {styles.buttonGroup}>
            <TouchableOpacity onPress = {()=>isLogin(true)} 
              style = {login? {...styles.topButtons,borderBottomWidth:5,}:null}>
              <Text style = {login?{...styles.topButtonText,fontWeight: 'bold'}:{...styles.topButtonText}}>Login</Text>
            </TouchableOpacity>

            {/*Signup page button*/}
            <TouchableOpacity onPress = {()=>isLogin(false)} 
              style = {!login?{...styles.topButtons,marginLeft: 50,borderBottomWidth:5,}:{marginLeft: 50}}>
              <Text style = {!login?{...styles.topButtonText,fontWeight: 'bold'}:{...styles.topButtonText}}>Sign Up</Text>
            </TouchableOpacity>
          </View>

      {/*Switch between signup and login, if login is true, switch to login, if signup is true, switch to signup*/}
      {login?

        //**************************************Login Form***********************************
      <View>
        <View style = {styles.form}>

        <Text style = {styles.description} >Email*</Text>
          <View style = {styles.inputAndIcon}>
          <Image  styles = {styles.icon} source = {require('./images/mail.png')}/>
          <TextInput onChangeText = {text => setSignin({...signin,email:text})} clearButtonMode = {'while-editing'} placeholder = 'Email...' style = {styles.input} />
          </View>

          <Text style = {styles.description} >Password*</Text>
          <View style = {styles.inputAndIcon}>
            <Image  style = {styles.icon} source = {require('./images/password.png')}/>
            <TextInput onChangeText = {text => setSignin({...signin,password:text})} secureTextEntry = {true} clearButtonMode = {'while-editing'}placeholder = 'Password...' style = {styles.input} />
          </View>

        </View>

        <View>
          <TouchableOpacity title = 'Log in' style = {styles.bottomButton} >
          <Image style = {{width:80,height:40,borderRadius: 5}} source = {require('./images/logIn.png')}></Image>
          </TouchableOpacity>
        </View>

        </View>
        //***********************************end of log in form*****************************************

        : 

        //**************************************Signup Form***********************************
        <View>
        <View style = {styles.form}>
      
          <Text style = {styles.description} >Email*</Text>
          <View style = {styles.inputAndIcon}>
            <Image  styles = {styles.icon} source = {require('./images/mail.png')}/>
            <TextInput onChangeText = {text => setSignup({...signup,email:text})} clearButtonMode = {'while-editing'} placeholder = 'Email...' style = {styles.input} />
          </View>

          <Text style = {styles.description} >Password*</Text>
          <View style = {styles.inputAndIcon}>
            <Image  styles = {styles.icon} source = {require('./images/password.png')}/>
            <TextInput textContentType = {'newPassword'} onChangeText = {text => setSignup({...signup,password:text})} clearButtonMode = {'while-editing'} placeholder = 'Password...' style = {styles.input} />
          </View>

          <Text style = {styles.description} >Confirm Password*</Text>
          <View style = {styles.inputAndIcon}>
            <Image  styles = {styles.icon} source = {require('./images/passwordConfirmed.png')}/>
            <TextInput onChangeText = {text => setSignup({...signup,confirmPassword:text})} secureTextEntry = {true} clearButtonMode = {'while-editing'} placeholder = 'Confirm Password...' style = {styles.input} />
          </View>

          <Text style = {styles.description} >Birthday</Text>
          <View style = {styles.inputAndIcon}>
            <Image  styles = {styles.icon} source = {require('./images/date.png')}/>
            {/*Datepicker not working*/}
            <DatePicker
                style={styles.input}
                date={signup.birthday} //initial date from state
                mode="date" //The enum of date, datetime and time
                placeholder="Select Date..."
                format="DD-MM-YYYY"
                customStyles ={{
                  dateInput: {
                    borderWidth: 0,
                    marginBottom: '7%',
                    marginRight: '65%',
                  },
                  placeholderText: {
                    fontSize: 18
                  },
                  dateText: {
                    fontSize: 18
                  },
                  btnTextConfirm: {
                    color: 'blue'
                  },
                  btnTextCancel: {
                    color: 'blue'
                  }
                }}
                
              confirmBtnText="Confirm"
               cancelBtnText="Cancel"
               showIcon = {false}
        
          onDateChange={date => {
            setSignup({...signup,birthday:date});
          }}
        />
          </View>
        </View>

          <View>
              <TouchableOpacity  style = {{...styles.bottomButton,width: 155}} >
              <Image style = {{width:150,height:40,borderRadius: 5}} source = {require('./images/createAcc.png')}></Image>
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

