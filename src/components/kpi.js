import React from "react";
import { View, Text, Button,Image } from "react-native";
import { StackActions } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default Kpi = ({ navigation: { navigate } }) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>Title Font</Text>
      <Text style = {styles.body}>smaller fonts</Text>
      <TouchableOpacity
        onPress={() => {
          navigate("Activities");
        }}
        
      >
          <View style ={styles.button}>
              <Text style = {styles.body}>Back to Activities</Text>
          </View>
      </TouchableOpacity>
      <View style = {styles.character}>
      </View>
      <View style = {styles.reactions}>
        <TouchableOpacity >
          <Image source = {require('../../assets/kpi/like.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source = {require('../../assets/kpi/confused.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source = {require('../../assets/kpi/dislike.png')}/>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  character:{
    borderWidth:1,
    marginTop:'3%',
    marginBottom:'3%'
  },
  reactions: {
    borderWidth:1,
    width:300,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  title:{
    fontSize:60
  },
  body:{
    fontSize:20,
  },
  button: {
    width: 300,
    justifyContent:'center',
    alignItems:'center',
    height:55,
    borderWidth:1,
    borderRadius:30,
    marginTop:'10%'
  }

})
