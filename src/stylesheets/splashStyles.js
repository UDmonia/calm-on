import { StyleSheet } from 'react-native';

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
        color: "grey",
        fontSize: 30,
        fontWeight: "bold"
      },
      format: {
        padding: 0,
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
      },
      btn: {
        borderRadius: 6,
        marginBottom: 80,

        // position: 'relative',
        width: 104,
        height: 40,
        // top: 321,
      },
})

export default styles;