import { StyleSheet } from "react-native";

export const style = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 20,
    },

    logo: {
        width: 110,
        height: 110,
        marginBottom: 15,
    },

    titleBox: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
    },

    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingVertical: 3,
    },

    midBox: {
        backgroundColor: 'blue',
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputBox: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonBox: {
        backgroundColor: 'green',
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },

})