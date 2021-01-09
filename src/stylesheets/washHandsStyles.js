import { ImageBackground, StyleSheet } from 'react-native';
import { windowWidth } from "../util/windowDimensions";

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
        flex: 1,
    },
    image: {
        flex: 5,
    },
    imageContainer: {
        flex: 1,
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
        flex: 1,
        resizeMode: "cover",
    },
    bottom: {
        flex: 5,
        flexDirection: "row",
        alignItems: "flex-end",
    },
    flynn: {
        justifyContent: "flex-end",
        height: "100%",
        width: "33%",
    },
    flynnImg: {
        resizeMode: "stretch",
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
        height: "40%",
        marginBottom: "5%",
    }
});