import { StyleSheet } from "react-native";

export default StyleSheet.create({
    mainContainer: {
        backgroundColor: "#019F66",
        height: "100%",
    },
    imgBackground: {
        resizeMode: "cover",
        flex: 1,
        width: "100%",
        height: "100%",
        top: undefined,
        overflow: "hidden",
    },
    container: {
        height: "80%",
        marginTop: "20%",
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
        // backgroundColor: 'blue',
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
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    modalView: {
        width: "90%",
        marginHorizontal: "5%",
        backgroundColor: "white",
        borderRadius: 20,
        padding: "5%",
        marginTop: "5%",
        alignItems: "center",
        justifyContent: "space-between",
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
        paddingVertical: 7,
        paddingHorizontal: 14,
    },
    textArea: {
        fontFamily: "FontReg",
        justifyContent: "flex-start",
        flex: 1,
        textAlignVertical: "top",
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