import { StyleSheet } from "react-native";
import hex from "./hexCodes";

export default StyleSheet.create({
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
        backgroundColor: hex.green.green1,
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 25,
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10,
        shadowColor: hex.black.black1,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 6,
    }
    
});