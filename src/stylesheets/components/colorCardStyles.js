import { StyleSheet } from "react-native";

export default StyleSheet.create({
    solutionCard: {
        display: "flex",
        height: "10%",
        width: "40%",
        backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 4,
        //overflow: "visible",
    },
    cardText: {
        //fontFamily: "fontReg",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        lineHeight: 15,
        textAlign: "center",
    }
});