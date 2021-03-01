import React from 'react'
import {View} from 'react-native'

export default props => {
    const tamanho = 50;
    return <View style={{
        width: tamanho,
        height: tamanho, 
        backgroundColor: props.cor,
    }}></View>;    
}