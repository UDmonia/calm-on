import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Mindfulness from './mindfulness'
import Techniques from './techniques'
import BigSqueeze from './bigSqueeze'
import MonsterHug from './monsterHug'
import { Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();


export default function mindfulnessStack(props) {
  const headerOptions1 ={
    headerBackTitleVisible: false,
    headerTitle: 'Mindfulness',
    headerRight: ()=>homeButton,
    headerRightContainerStyle:{marginRight: '80%'},
    headerTitleStyle: {fontSize: 24},

  }

  const headerOptions2 ={
    headerBackTitleVisible: false,
    headerTitle: 'Mindfulness',
    headerTitleStyle: {fontSize: 24},
    headerRight:()=>level,
    headerRightContainerStyle:{marginRight: '8%'},
  }

  const homeButton = (
    <TouchableOpacity onPress = {()=>props.navigation.navigate('homescreen')}>
      <Image source = {require('./images/MindfulnessNav/home.png')}/>
    </TouchableOpacity>
  )

  const level = (
    <Image source = {require('./images/misc/level.png')} />
  )
 
    return (
    
        <Stack.Navigator intialRouteName = 'Mindfulness'>
          <Stack.Screen options = {headerOptions1} name='Mindfulness' component={Mindfulness} />
          <Stack.Screen options = {headerOptions2} name= 'Techniques' component ={Techniques}/>
          <Stack.Screen options = {headerOptions2} name= 'BigSqueeze' component ={BigSqueeze}/>
          <Stack.Screen options = {headerOptions2} name= 'MonsterHug' component ={MonsterHug}/>
        </Stack.Navigator>
      
    );
  }
  