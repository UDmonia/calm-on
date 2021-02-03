import { StyleSheet } from 'react-native';
import { windowWidth, windowHeight } from "../util/windowDimensions";

export default  StyleSheet.create({
    screen: {
        flex: 1,
    },
    backgroundImage: {
        height: "100%",
        width: "100%",
        resizeMode: "contain",
    },
    container: {
        flex: 1,
        marginVertical: "10%",
        marginHorizontal: "7%",
    },
    top: {
        flex: .25,
    },
    image: {
        flex: 6,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        height: windowHeight * 0.35,
        width: windowHeight * 0.35,
        alignItems: "center",
    },
    img: {
        resizeMode: "stretch",
        height: "100%",
        width: "95%",
    },
    arrows: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    arrow: {
        resizeMode: "contain",
    },
    bottom: {
        flex: 6,
        flexDirection: "row",
        alignItems: "flex-end",
    },
    flynn: {
        justifyContent: "flex-end",
        height: "100%",
        width: "33%",
    },
    flynnImg: {
        resizeMode: "contain",
        height: "80%",
        width: "100%",
        minHeight: 220,
    },
    box: {
        flex: 2,
        height: "100%",
        justifyContent: "flex-end",
    },
    textBox: {
        backgroundColor: "#B24A2B",
        borderRadius: 5,
        width: "90%",
        height: "35%",
        marginBottom: "15%",
        alignItems: "center",
        justifyContent: "center",
        padding: "10%",
    },
    text: {
        color: "white",
        fontSize: windowWidth * 0.035,
        fontFamily: "FontReg"
    }
});