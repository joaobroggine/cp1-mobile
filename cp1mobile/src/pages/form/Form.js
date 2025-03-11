import React from 'react'
import { Image, Text, TextInput, View } from 'react-native'
import Logo from '../../../assets/logo.png'
import { style } from './Style'

export default function Form() {
    return (
        <View style={style.container}>
            <View style={style.titleBox}>
                <Image source={Logo} alt='Logo' style={style.logo} />
                <Text style={style.titleText}>Calculadora Porcentual</Text>
                <Text style={style.titleText}>Preencha os campos abaixo</Text>
            </View>
            <View style={style.midBox}>
                <View style={style.inputBox}>
                    <Text>NOME DO PRODUTO</Text>
                    <TextInput
                        style={style.inputText}
                    />
                    <Text>VALOR ORIGINAL DO PRODUTO</Text>
                    <TextInput
                        style={style.inputText}
                    />
                    <Text>PORCENTUAL GANHO</Text>
                    <TextInput
                        style={style.inputText}
                    />
                </View>
            </View>
            <View style={style.buttonBox}>
                <Text>Button Box</Text>
            </View>
        </View>
    )
}
