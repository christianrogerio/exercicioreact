import React, { useState } from 'react'
import {Text, Button, StyleSheet, View} from 'react-native'

export default ({inicial=1}) => {
    const [numero, setNumero] = useState(inicial);

    function inc(){
        setNumero(numero+1)
    }

    function dec(){
        setNumero(numero-1)
    }

    return (
        <>
        <Text style={estilo.Display}>{numero}</Text>
        <View style={estilo.Botoes} >           
            <Button title="+" onPress={inc}  />
            <Button title="-" onPress={dec}  />
        </View>
        </>
    );
}

const estilo = StyleSheet.create({
    Botoes : {
        flexDirection: 'row'
    },
    Display:{
        backgroundColor: '#000000',
        color: '#FFFFFF',
        padding: 10,
        fontSize: 20,
    }
});