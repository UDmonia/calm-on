import React from 'react';
import { View,Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from "../stylesheets/activitiesStyles";
import feelings from "../../assets/activities/feelings.png";
import why from "../../assets/activities/why.png";
import nums from "../../assets/activities/54321.png";
import counting from "../../assets/activities/counting.png";
import painter from "../../assets/activities/painter.png"

export default Activities =()=>{
    const [all, setAll] = useState(false);
    return (
        <View style={styles.container}>
            <ScrollView 
                style={styles.btnContainer}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <TouchableOpacity 
                    style={all ? styles.btnDefult : styles.btnPressed}
                    onPress = {() => {setAll(true); console.log('All')}}
                >
                    <Text style={styles.txtDefult}>All Activities</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.btnDefult}
                    onPress = {() => {console.log('Fear');}}
                >
                    <Text style={styles.txtDefult}>Fear</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.btnDefult}
                    onPress = {() => {console.log('Anger');}}
                >
                    <Text style={styles.txtDefult}>Anger</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.btnDefult}
                    onPress = {() => {console.log('Excitment');}}
                >
                    <Text style={styles.txtDefult}>Excitement</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.btnDefult}
                    onPress = {() => {console.log('Happiness');}}
                >
                    <Text style={styles.txtDefult}>Happiness</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.btnDefult}
                    onPress = {() => {console.log('Worry');}}
                >
                    <Text style={styles.txtDefult}>Worry</Text>
                </TouchableOpacity>

            </ScrollView>
            {/* <View style={styles.btnContainer}>
                <TouchableOpacity style= {styles.btnPressed}>
                    <Text>Basic Skills</Text>
                </TouchableOpacity>
            </View> */}
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
            {/* <View>
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
            </View> */}
            {/* <View>
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
            </View> */}
        </View>
    )
}