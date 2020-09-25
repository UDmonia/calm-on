//This file is a temporary placeholder
import { TextInput,ImageBackground, Text, View, TouchableOpacity, Image, Keyboard } from 'react-native';
import React, {useState} from 'react';


const chatPlaceholder =({navigation: { navigate }})=>{
    return (
        <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Placeholder page</Text>
            <TouchableOpacity onPress = {()=>navigate('milkMilkMilk')}>
                <Text>Milk Milk Milk</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=>navigate('boxBreathing')}>
                <Text>Box Breathing</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=>navigate('Mindfulness')}>
                <Text>Mindfulness</Text>
            </TouchableOpacity>

            {/*Activities*/}
            <TouchableOpacity onPress = {()=>navigate('Activities')}>
                <Text>Activities</Text>
            </TouchableOpacity>


        </View>
    )
}

export default chatPlaceholder