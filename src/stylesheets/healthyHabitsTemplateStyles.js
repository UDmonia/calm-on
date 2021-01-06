import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        display:"flex",
        backgroundColor: '#1A2B44',
        height: "100%",
        padding: "7%",
    },
    topText: {
        height: "20%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    title: {
        color: "white",
        fontSize: 25,
        fontFamily: "FontBold",
    },
    bottomContainer: {
        flex: 4.5,
        backgroundColor: "white",
        width: "100%",
        borderRadius: 5,
    },
    itemContainer: {
        flex: 1,
    },
    item: {
        flex: 1,
        flexDirection: "row",
    },
    leftSide: {
        flex: 2,
        justifyContent: "center",
        paddingLeft: "5%",
    },
    rightSide: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    itemTitle: {
        fontSize:  20,
        color: "black",
        fontFamily: "FontBold",
    },
    itemDescription: {
        fontSize: 15,
        color: "black",
        fontFamily: "FontReg",
    },
});