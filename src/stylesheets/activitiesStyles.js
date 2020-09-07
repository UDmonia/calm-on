import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: "column",
        //alignItems: 'center',
        //justifyContent:"center",
        backgroundColor: "white",
    },
    allActivities:{
        marginTop: 10,
        marginLeft: 10,
        marginRight:10,
        //width: 100,
        height: 30,
        borderColor: 'green',
        borderWidth: 5,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    activity: {
       width: 100,
       height: 100,
       marginLeft: 4,
       backgroundColor: 'blue' 
    },
    scrollView:{
        backgroundColor: 'white',
        maxHeight: 100,
    },

    
});