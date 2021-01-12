import React, { useState, useEffect } from 'react';
import { Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import styles from "../stylesheets/filteredActivitiesStyles";
import ActivityCard from "../components/ActivityCard";

const filters = ["All","Healthy-Habits","Videos","Activities"];

//Button component for the filter bar
function Button(props) {
    return(
        <TouchableOpacity 
            style={props.indices[props.index] ? [styles.filled, {backgroundColor: props.color}]: styles.button}
            onPress={() => {
                var result = new Array(filters.length).fill(false);
                result[props.index] = true
                props.editIndices(result);
                props.setCurr(props.index)
            }}>
            <Text style={props.indices[props.index] ? styles.filledText : styles.regText}>{props.filter}</Text>
        </TouchableOpacity>
    );
}

//Filter Bar component
function FilterBar(props) {
    return (
        <View style={[styles.filterBarContainer, {borderColor: props.color}]}> 
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {filters.map((filter, index) =>
                    <Button 
                        key={index} 
                        filter={filter} 
                        index={index} 
                        indices={props.indices}
                        editIndices={props.edit}
                        color={props.color} 
                        setCurr={props.setCurr} />
                )}
            </ScrollView>
        </View>
    );
}


export default function FilteredActivties({ route }) {

    //route variables
    const { activities } = route.params;
    const { headerColor } = route.params;
    //hooks
    const [filterHighlight, setFilterHighlight ] = useState([true,false,false,false]);
    const [curr, setCurr] = useState(0);

    //sort through the activities that 
    var activityList = [];
    var i;
    for(i = 0; i < activities.length; i++){
        if(activities[i].tag.includes(filters[curr])) {
            activityList.push(activities[i]);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <FilterBar 
                    indices={filterHighlight}
                    edit={setFilterHighlight} 
                    color={headerColor}
                    setCurr={setCurr} />
            </View>
            <View style={styles.bottom}>
                <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                    {activityList.map((activity) => {
                        return (
                            <ActivityCard
                            title={activity.title}
                            key={activity.id}
                            bgColor={activity.color}
                            navigateLink={activity.introPageData.navRoute}
                            imagePath={activity.img}
                            introPageData={activity.introPageData}
                            header={headerColor}
                            />
                        );
                    })}
                </ScrollView>
            </View>
        </View>
    );
}