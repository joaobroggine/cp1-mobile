import { StyleSheet } from "react-native";

export const style = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 20,
        backgroundColor: '#F6F0F0'
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
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 3,
    },

    midBox: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%'
    },

    inputText: {
        fontSize: 16,
        color: 'gray',
        paddingVertical: 15,
    },

    input: {
        paddingHorizontal: 10,
        fontSize: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 40,
        backgroundColor: '#d7d8d7',
        borderWidth: 1,
        borderColor: '#d7d8d7',
        borderRadius: 40
    },

    buttonBox: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        backgroundColor: '#80CBC4',
        width: 200,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#80CBC4',
        borderRadius: 40
    },

    buttonText: {
        fontSize: 20,
        color: 'white'
    },

})