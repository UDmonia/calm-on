import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        display: "flex",
    },
    center: {
        paddingTop: 25,
        paddingBottom: 25,
        alignItems: "center",
    },
    activityContainer: {
        display: "flex",
        flexDirection: "row",
        height: 100,
        width: "80%",
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 25,
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 6,
    }
    
});