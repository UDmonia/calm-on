import { StyleSheet, Platform, StatusBar } from "react-native";
import {windowWidth, windowHeight } from "../util/windowDimensions";
import hex from "./hexCodes";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "pink"
    },
    mainContainer: {
        flex: 1,
        paddingTop: StatusBar.currentHeight, // need to rework this height for later uses need to test on IOS devices to see if this still works
    },
    exitContainer: {
        flex: 1,
        backgroundColor: "lightblue",
        marginHorizontal: "5%",
        marginVertical: "5%",
    },
    mainImageContainer: {
        flex: 8,
        backgroundColor: "lightgreen",
    },
    colorSelectionContainer: {
        flex: 4,
        backgroundColor: "grey",
    }
});