import React, { useState } from 'react';
import { Text, View,TextInput, Button,StyleSheet, ImageBackground, TouchableOpacity, Image, ScrollView,Dimensions } from 'react-native';
import styless from '../stylesheets/homeStyles';
import { AntDesign } from '@expo/vector-icons';
const widthF = Dimensions.get('window').width;


class Sprite extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      status : true,
      chatMessage: "",
      chatMessages: [
        {
          action:"receive",
          msg:"Hi I'm Spirite! Choose an activity we can work on together or you can tell me what is on your mind."
        }
      ],
    }
  }

  componentDidUpdate(prevProps, prevState) {
    var me = this;
    setTimeout(function(){
      if (prevState.chatMessages !== me.state.chatMessages) {
          if(me.state.chatMessages[me.state.chatMessages.length-1].msg.toLowerCase()=='i am feeling sad'){
            var data = {
              action : 'receive',
              msg : 'Oh No! Would you like to try something to make you happy?' 
            };
            me.setState({ chatMessages: [...me.state.chatMessages, data]});
          }else if(me.state.chatMessages[me.state.chatMessages.length-1].msg.toLowerCase()=='i am feeling happy'){
            var data = {
              action : 'receive',
              msg : 'That’s what I like to hear! Would you like to check out some of my stories?' 
            };
            me.setState({ chatMessages: [...me.state.chatMessages, data]});
          }else if(me.state.chatMessages[me.state.chatMessages.length-1].msg.toLowerCase()=='i am feeling anxious'){
            var data = {
              action : 'receive',
              msg : 'Oh No! Let’s try to relieve that anxiousness. Would you like to try something to do deal with your anxiety?' 
            };
            me.setState({ chatMessages: [...me.state.chatMessages, data]});
          }else if(me.state.chatMessages[me.state.chatMessages.length-1].msg.toLowerCase()=='i am feeling angry'){
            var data = {
              action : 'receive',
              msg : 'That’s what I like to hear! Would you like to check out some of my stories?' 
            };
            me.setState({ chatMessages: [...me.state.chatMessages, data]});
          }else if(me.state.chatMessages[me.state.chatMessages.length-1].msg.toLowerCase()=='i am feeling scared'){
            var data = {
              action : 'receive',
              msg : 'Oh No! Let’s try to make that go away. Would you like to try something to relieve feeling scared?' 
            };
            me.setState({ chatMessages: [...me.state.chatMessages, data]});
          }
          if(me.state.chatMessages[me.state.chatMessages.length-1].msg.toLowerCase()=='no'){
            var data = {
              action : 'receive',
              msg : 'Well, I hope you can reconsider…' 
            };
            me.setState({ chatMessages: [...me.state.chatMessages, data]});
          }else if(me.state.chatMessages[me.state.chatMessages.length-1].msg.toLowerCase()=='yes'){
            var data = {
              action : 'receive',
              msg : 'Would you like to hear a story or do some engaging activites?' 
            };
            me.setState({ chatMessages: [...me.state.chatMessages, data]});
          }
          if(me.state.chatMessages[me.state.chatMessages.length-1].msg.toLowerCase()=='engaging activites'){
            me.props.navigation.navigate('Storytime')
          }else if(me.state.chatMessages[me.state.chatMessages.length-1].msg.toLowerCase()=='please tell me a story'){
            me.props.navigation.navigate('mindfulnessStack')
          }
      }
    },500)
  }

  submitChatMessage() {
    console.log(this.state.chatMessage);
    if(this.state.chatMessage){
      var data = {
        action : 'send',
        msg : this.state.chatMessage 
      };
      this.setState({ chatMessages: [...this.state.chatMessages, data]});
      this.setState({chatMessage:""})
    }
  }

  render(){
    return (
      <View style={[styles.container, { justifyContent: "flex-start" }]}>
        <ImageBackground
          style={styles.image}
          source={require('../../assets/storytime_background.png')}
        />
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={[styles.fixed, styles.scrollView]}
        >
          <View style={[styles.boxP]}>
            <ScrollView nestedScrollEnabled = {true}
              style={[styles.fixed, styles.scrollView]}
            >
              {(()=>{
                if(this.state.chatMessages)
                {
                  if(this.state.chatMessages.length)
                  {
                    return(
                      <CHATTING data = {this.state.chatMessages}/>
                    )
                  }
                }
              })()}
            </ScrollView>
          </View>
          {
            this.state.status ? (
              <View style={{position:'absolute'}}>
                <View style={[{zIndex:1000, backgroundColor:'#c4c4c4', width:widthF, height:70 ,marginTop:Dimensions.get('window').height-70, justifyContent: "space-between",flexDirection: "row",  alignItems: "center",}]}>
                  <TextInput 
                    maxLength = {30} 
                    onChangeText={chatMessage => {this.setState({chatMessage});}}
                    value={this.state.chatMessage}
                    onSubmitEditing={() => this.submitChatMessage()}
                    placeholder = {'Enter Massage'}
                    style={{ marginLeft:10, borderRadius:30, paddingLeft: 30, paddingRight: 30, backgroundColor:'#f5f5f5', alignItems: "center", justifyContent: "center", height: 45, width:Dimensions.get('window').width-70, borderColor:'transparent', color: "#000", borderWidth: 1, fontSize: 20 }}
                  />
                  <TouchableOpacity onPress={()=>this.setState({status:!this.state.status})} style={{marginRight:10, borderRadius:50, width:40, height:40, justifyContent: "center", alignItems: "center"}}>
                    <AntDesign name="up" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            ):(
              <View style={{position:'absolute'}}>
                <View style={[{backgroundColor:'#c4c4c4', width:widthF, height:70 ,marginTop:Dimensions.get('window').height-300, justifyContent: "space-between",flexDirection: "row",  alignItems: "center",}]}>
                  <TextInput 
                    maxLength = {30} 
                    onChangeText={chatMessage => {this.setState({chatMessage});}}
                    value={this.state.chatMessage}
                    onSubmitEditing={() => this.submitChatMessage()}
                    placeholder = {'Enter Massage'}
                    style={{ marginLeft:10, borderRadius:30, paddingLeft: 30, paddingRight: 30, backgroundColor:'#f5f5f5', alignItems: "center", justifyContent: "center", height: 45, width:Dimensions.get('window').width-70, borderColor:'transparent', color: "#000", borderWidth: 1, fontSize: 20 }}
                  />
                  <TouchableOpacity onPress={()=>this.setState({status:!this.state.status})} style={{marginRight:10, borderRadius:50, width:40, height:40, justifyContent: "center", alignItems: "center"}}>
                    <AntDesign name="down" size={24} color="black" />
                  </TouchableOpacity>
                </View>
                <View style={{width:widthF, height:235 , backgroundColor:'#e5f2d8',}}>
                  <View style={[{width:widthF,justifyContent: "space-between",flexDirection: "row",  alignItems: "center",}]}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Storytime')}>
                      <Image style={[styles.btn]}
                        source={require('../../assets/storytime.png')} 
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('mindfulnessStack')}>
                      <Image style={[styles.btn]}
                        source={require('../../assets/mindfulness.png')} 
                        />
                    </TouchableOpacity>
                  </View>
                  <View style={{width:widthF, alignItems: "center",}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Stories')}>
                      <Image style={[styles.btn1]}
                        source={require('../../assets/showAchievements.png')} 
                        />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )
          }
        </ScrollView>
      </View>
    )
  }
}

const CHATTING = ({ data }) => {
  return data && data.length > 0 ? (
    data.map((obj, key) => {
      if(obj.action=='send'){
        return (
            <View key = {key} style = {{  padding:5, justifyContent: "flex-end",flexDirection: "row",  alignItems: "center"}}>
              <View style={{justifyContent: "space-between",flexDirection: "row",  alignItems: "center"}}>
                <Text style = {{ maxWidth:widthF/1.5, borderRadius:10, padding:20, backgroundColor:'#6dc166', fontSize:15, color:'white'}}>{obj.msg}</Text>
                <Image style={[{width:50, height:50, borderRadius:50}]} source={require('../../assets/user.png')} />
              </View>
            </View>
        )
      }else{
        return (
          <View key = {key} style = {{  padding:5, justifyContent: "flex-start",flexDirection: "row",  alignItems: "center"}}>
            <View style={{justifyContent: "space-between",flexDirection: "row",  alignItems: "center"}}>
              <Image style={[{width:50, height:50, borderRadius:50}]} source={require('../../assets/user.png')} />
              <Text  style = {{marginLeft:5, maxWidth:widthF/1.5, borderRadius:10, padding:20, backgroundColor:'#6dc166', fontSize:15, color:'white'}}>{obj.msg}</Text>
            </View>
          </View>
        )
      }
    })
  ) : (
    <View/>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    width: '100%',
    height: '100%',
    
  },
  fixed: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  scrollView: {
    backgroundColor: "transparent",
  },
  boxP: {
    width: widthF,
    height: Dimensions.get('window').height,
    display: "flex",
    alignItems: "center",
    borderRadius: 10,
  },
  btn: {
    borderRadius: 6,
    position: 'relative',
    width: 120,
    height: 120,
    margin:25
  },
  btn1: {
    borderRadius: 6,
    position: 'relative',
    width: widthF/1.5,
    height: 40,
  },
});

export default Sprite;



