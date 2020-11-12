import { Text, Image, TouchableOpacity, View} from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';
import styles from "../stylesheets/activityCardStyles";

function ActivityCard(props) {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity 
                style={[styles.activityContainer, {backgroundColor: props.bgColor}]}
                onPress={() => navigation.navigate(props.navigateLink)}>
                <Text>{props.title}</Text>
                <Image source={props.imagePath}/>
            </TouchableOpacity>
        </View>
    );
}

export default ActivityCard;