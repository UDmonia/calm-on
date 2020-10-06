import React from 'react';
import { View,Text, Button} from 'react-native';
import { navigate } from './RootNavigation';

export default Counting =()=>{
    return (
        <View >
            <Text>Counting</Text>
            <Button 
                title= "Back To Activities"
                onPress={() => navigate('Activities')}
            />
        </View>
    )
}