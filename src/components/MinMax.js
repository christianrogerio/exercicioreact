import React from 'react'
import {View, Text} from 'react-native'
import Estilo from './estilo'

export default props=>
(
    <Text style={Estilo.fontG}>Valor minimo: {props.min}, máximo: {props.max}</Text>
)