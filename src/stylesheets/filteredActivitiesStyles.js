import { StyleSheet } from "react-native";
import { windowWidth } from "../util/windowDimensions"; 

export default StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
    },
    top: {
        flex: 1,
        justifyContent: "center",
        marginHorizontal: "5%",
    },
    bottom: {
        flex: 8,
    },
    scrollContainer: {
    },
    filterBarContainer: {
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 7.5,
    },
    button: {
        paddingHorizontal: windowWidth * 0.065,
        paddingVertical: 2,
    },
    filled: {
        borderRadius: 2.5,
        color: "white",
        paddingHorizontal: windowWidth * 0.065,
        paddingVertical: 2,
    },
    filledText: {
        color: "white",
        fontSize: windowWidth * 0.035,
    },
    regText: {
        color: "grey",
        fontSize: windowWidth * 0.035,
    }
});