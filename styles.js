import { StyleSheet } from "react-native";

export default StyleSheet.create({
    background: {
        backgroundColor: 'black',
        flex: 1,
        marginTop: 30
    },
    imageCard:{
        width: 250,
        height: 350,
    },
    appBar:{
        height: 60,
        backgroundColor: "black",
        shadowColor: 'white',
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        gap: 5
    },
    appText:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    }
})