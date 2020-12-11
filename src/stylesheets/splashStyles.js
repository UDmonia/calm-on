import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
      },
      image: {
        // flex: 1,
        // resizeMode: "cover",
        // justifyContent: "center",
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
      },
      text: {
        color: "white",
        fontSize: 20,
        fontFamily: "FontReg"
      },
      format: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
      },
      btnContainer: {
        height: 50,
        width: "50%",
        display: "flex",
        marginBottom: "20%",
      },
      btn: {
        height: "100%",
        backgroundColor: "#8AABFF",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
      },
})

export default styles;