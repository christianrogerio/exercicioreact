import React, {Component} from 'react'
import {Text} from 'react-native'

export default class Mega extends Component{
    render(){
        return <Text>MEGA SENA {this.props.qtdNumeros}</Text>
    }
}

