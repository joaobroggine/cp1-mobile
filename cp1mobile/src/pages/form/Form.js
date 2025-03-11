import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
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
                <View style={style.midBox}>
                    <View style={style.inputBox}>
                        <Text style={style.inputText}>NOME DO PRODUTO</Text>
                    </View>
                    <View style={style.inputBox}>
                        <TextInput
                            style={style.input}
                        />
                        <Text style={style.inputText}>VALOR ORIGINAL DO PRODUTO</Text>
                        <TextInput
                            style={style.input}
                        />
                    </View>
                    <View style={style.inputBox}>
                        <Text style={style.inputText}>PORCENTUAL GANHO</Text>
                        <TextInput
                            style={style.input}
                        />
                    </View>
                </View>
            </View>
            <View style={style.buttonBox}>
                <TouchableOpacity style={style.button}>
                    <Text style={style.buttonText}>Calcular</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
