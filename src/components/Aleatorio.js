import React from 'react'
import {View, Text} from 'react-native'
import Estilo from './estilo'

export default ({min,max})=>
{
    let ret = getRandomArbitrary(min, max);
    return (
        <Text style={Estilo.fontG}>Número aleatório: {ret}</Text>
    )
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}