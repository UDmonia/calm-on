import { StyleSheet, Platform, StatusBar } from "react-native";
import {windowWidth, windowHeight } from "../util/windowDimensions";
import hex from "./hexCodes";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "grey",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    exitContainer: {
        paddingLeft: "5%",
        paddingTop: "5%",
    },
    main: {
        flex: 3,
        backgroundColor: "lightblue",
    },
    bottom: {
        flex: 1,
        backgroundColor: "lightgreen",
    },
    imageList: {
        flex: 1,
    },
    imageBoxContainer: {
        flex: 1,
        margin: "5%",
        maxWidth: "40%",
        backgroundColor: "white",
        borderWidth: windowWidth * 0.01,
        borderColor: hex.purple.purple2,
        borderRadius: windowWidth * 0.01
    },
    img: {
        height: windowHeight * 0.25,
        width: "100%",
        resizeMode: "contain",
    }
});