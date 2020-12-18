import { StyleSheet } from "react-native";
import hex from "./hexCodes";

export default StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        width: "100%"
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
        shadowColor: hex.black.activityCardShadow,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 6,
    },
    title: {
        fontFamily: "FontReg",
    }
});