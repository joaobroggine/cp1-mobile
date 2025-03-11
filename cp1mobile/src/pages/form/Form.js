import React, { useState } from 'react'
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Logo from '../../../assets/logo.png'
import { style } from './Style'

export default function Form() {

    const [nome, setNome] = useState('')
    const [valor, setValor] = useState('')
    const [percentual, setPercentual] = useState('')

    async function getCalculo() {
        try {
            if (!nome || !valor || !percentual) {
                return Alert.alert("Preencha os campos obrigatórios.", "Todos os campos devem ser preenchidos")
            }
        } catch (error) {
            console.log(error)
        }
    }


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
                            value={nome}
                            onChangeText={setNome}
                        />
                        <Text style={style.inputText}>VALOR ORIGINAL DO PRODUTO</Text>
                        <TextInput
                            style={style.input}
                            keyboardType='numeric'
                            value={valor}
                            onChangeText={setValor}
                        />
                    </View>
                    <View style={style.inputBox}>
                        <Text style={style.inputText}>PERCENTUAL GANHO</Text>
                        <TextInput
                            style={style.input}
                            keyboardType='numeric'
                            value={percentual}
                            onChangeText={setPercentual}
                        />
                    </View>
                </View>
            </View>
            <View style={style.buttonBox}>
                <TouchableOpacity style={style.button} onPress={() => getCalculo()}>
                    <Text style={style.buttonText}>Calcular</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
