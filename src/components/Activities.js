import React from 'react';
import { View,Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from "../stylesheets/activitiesStyles";
import feelings from "../../assets/activities/feelings.png";
import why from "../../assets/activities/why.png";
import nums from "../../assets/activities/54321.png";
import counting from "../../assets/activities/counting.png";
import painter from "../../assets/activities/painter.png"

export default Activities =()=>{
    return (
        <View style={styles.container}>
            <ScrollView 
                style={styles.btnContainer}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <TouchableOpacity 
                    style={styles.btn}
                    onPress = {() => {console.log('All');}}
                >
                    <Text style={styles.txt}>All Activities</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.btn}
                    onPress = {() => {console.log('Fear');}}
                >
                    <Text style={styles.txt}>Fear</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.btn}
                    onPress = {() => {console.log('Anger');}}
                >
                    <Text style={styles.txt}>Anger</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.btn}
                    onPress = {() => {console.log('Excitment');}}
                >
                    <Text style={styles.txt}>Excitement</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.btn}
                    onPress = {() => {console.log('Happiness');}}
                >
                    <Text style={styles.txt}>Happiness</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.btn}
                    onPress = {() => {console.log('Worry');}}
                >
                    <Text style={styles.txt}>Worry</Text>
                </TouchableOpacity>

            </ScrollView>
            <View style={styles.btnContainer}>
                <TouchableOpacity style= {styles.btn}>
                    <Text>Basic Skills</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.header}>Learning about our feelings</Text>
                <ScrollView 
                    style={styles.scrollView}
                    horizontal={true}
                    showsHorizontalScrollIndicator= {false}>
                <TouchableOpacity 
                    style = {styles.activity}
                    onPress = {() => {console.log('Feeling Faces');}}
                    >
                    <Image source={feelings}/>
                    <Text style={styles.label}>
                        Feeling Faces 
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.activity}
                    onPress = {() => {console.log('Why we get sad');}}
                >
                    <Image
                        style={styles.actImage} 
                        source={why}/>
                    <Text style={styles.label}>
                        Why do we get sad?
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {styles.activity}
                    onPress = {() => {console.log('what is anger');}}
                >
                    <Image source={feelings}/>
                    <Text style={styles.label}>
                        What is anger?
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity  
                    style = {styles.activity}
                    onPress = {() => {console.log('Place holder 4');}}
                >
                    <Image source={why}/>
                    <Text style={styles.label}>
                        place holder 4
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {styles.activity}
                    onPress = {() => {console.log('Place holder 5');}}
                >
                    <Image source={feelings}/>
                    <Text style={styles.label}>
                        place holder 5
                    </Text>
                </TouchableOpacity>
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
                    <Text styles= {styles.lable}>
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