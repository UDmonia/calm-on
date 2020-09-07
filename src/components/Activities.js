import React from 'react';
import { View,Text, Image, ScrollView} from 'react-native';
import styles from "../stylesheets/activitiesStyles";
import feelings from "../../assets/activities/feelings.png";
import why from "../../assets/activities/why.png";
import nums from "../../assets/activities/54321.png";
import counting from "../../assets/activities/counting.png";
import painter from "../../assets/activities/painter.png"

export default Activities =()=>{
    return (
        <View style= {styles.container}>
            <View style= {styles.allActivities}>
                <Text>All Activities</Text>
            </View>
            <View style= {styles.allActivities}>
                <Text>Basic Skills</Text>
            </View>
            <View>
                <Text>Learning about our feelings</Text>
                <ScrollView style={styles.scrollView}
                    horizontal={true}>
                <View style = {styles.activity}>
                    <Image source={feelings}/>
                    <Text>
                        place holder
                    </Text>
                </View>
                <View style = {styles.activity}>
                    <Image source={why}/>
                    <Text>
                        place holder 2
                    </Text>
                </View>
                <View style = {styles.activity}>
                    <Image source={feelings}/>
                    <Text>
                        place holder 3
                    </Text>
                </View>
                <View style = {styles.activity}>
                    <Image source={why}/>
                    <Text>
                        place holder 4
                    </Text>
                </View>
                <View style = {styles.activity}>
                    <Image source={feelings}/>
                    <Text>
                        place holder 5
                    </Text>
                </View>
                </ScrollView>
            </View>
            <View>
                <Text>Tackiling uncomftable feelings</Text>
                <ScrollView style={styles.scrollView}
                    horizontal={true}>
                <View style = {styles.activity}>
                    <Image source={nums}/>
                    <Text>
                        place holder
                    </Text>
                </View>
                <View style = {styles.activity}>
                    <Image source={counting}/>
                    <Text>
                        place holder 2
                    </Text>
                </View>
                <View style = {styles.activity}>
                    <Image source={nums}/>
                    <Text>
                        place holder 3
                    </Text>
                </View>
                <View style = {styles.activity}>
                    <Image source={counting}/>
                    <Text>
                        place holder 4
                    </Text>
                </View>
                <View style = {styles.activity}>
                    <Image source={nums}/>
                    <Text>
                        place holder 5
                    </Text>
                </View>
                </ScrollView>
            </View>
            <View>
                <Text>Storytime</Text>
                <ScrollView style={styles.scrollView}
                    horizontal={true}>
                <View style = {styles.activity}>
                    <Image source={painter}/>
                    <Text>
                        place holder
                    </Text>
                </View>
                <View style = {styles.activity}>
                    <Text>
                        place holder 2
                    </Text>
                </View>
                <View style = {styles.activity}>
                    <Image source={painter}/>
                    <Text>
                        place holder 3
                    </Text>
                </View>
                <View style = {styles.activity}>
                    <Text>
                        place holder 4
                    </Text>
                </View>
                <View style = {styles.activity}>
                    <Image source={painter}/>
                    <Text>
                        place holder 5
                    </Text>
                </View>
                </ScrollView>
            </View>
        </View>
    )
}