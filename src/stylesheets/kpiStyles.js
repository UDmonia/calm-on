import { StyleSheet } from "react-native";

export default StyleSheet.create({
    mainContainer: {
        backgroundColor: "#090E24",
        height: "100%",
    },
    container: {
        height: "80%",
        marginTop: "35%",
        marginHorizontal: "10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    modalContainer: {
        justifyContent: "center",
        backgroundColor: "blue",
        height: 40,
        width: 40,
    },
    top: {
        alignItems: "center",
    },
    text: {
        color: "white",
        fontFamily: "FontReg"
    },
    title: {
        fontSize: 60,
    },
    subtext: {
        fontSize: 20,
    },
    backButtonText: {
        fontSize: 20,
    },
    feedbackButtons: {
        height: "20%",
        width: "80%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    buttons: {
        height: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    backButtonContainer: {
        width: "100%",
        height: "7%",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "15%",
    },
    backButton: {
        backgroundColor:"#2E7D32",
        minWidth: "100%",
        minHeight: "20%",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    centeredView: {
        display: "flex",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        width: "90%",
        margin: "5%",
        backgroundColor: "white",
        borderRadius: 20,
        padding: "5%",
        alignItems: "center",
    },
    modalSubmitButton: {
        display: "flex",
        justifyContent: "center",
        maxHeight: 200,
    },
    modalExitButton: {
        alignSelf:"flex-start",
    },
    textAreaContainer: {
        borderColor:  "black",
        borderWidth: 1,
        borderRadius: 20,
        height: "60%",
        width: "80%",
        marginVertical: 7,
        paddingHorizontal: 14,
    },
    textArea: {
        fontFamily: "FontReg",
        justifyContent: "flex-start",
    },
    modalText: {
        fontFamily: "FontReg",
        textAlign: "center",
        fontSize: 40,
    },
    ModalBackButton: {
        backgroundColor:"#2E7D32",
        minWidth: "50%",
        height: "50%",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    modalSubText: {
        fontFamily: "FontReg",
        fontSize: 20,
    }
});