import { Text, Image, TouchableOpacity, View} from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';
import styles from "../stylesheets/activityCardStyles";
/*
Activity Card Prop for the activity cards themselves
*/
function ActivityCard(props) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.activityContainer, {backgroundColor: props.bgColor}]}
                onPress={() => navigation.navigate(props.navigateLink, {
                    name: props.title,
                    actNav: props.introPageData.ActRoute,
                    about: props.introPageData.about,
                    helpful: props.introPageData.helpful,
                    img: props.introPageData.img,
                })}>
                <Text style={styles.title}>{props.title}</Text>
                <Image source={props.imagePath}/>
            </TouchableOpacity>
        </View>
    );
}
export default ActivityCard;