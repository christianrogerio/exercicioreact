import React, {Component} from 'react'
import {Text, TextInput} from 'react-native'

export default class Mega extends Component{
    state ={
        qtdNumeros : this.props.qtdNumeros
    }

    alterarQtdNumeros = (qt) => {
        this.setState({ qtdNumeros : qt})
    }

    render(){
        return (
            <>            
            <Text>MEGA SENA {this.state.qtdNumeros}</Text>
            <TextInput 
                keyboardType={'numeric'}
                style={{borderBottomWidth:1}}
                placeholder="Informar valor"
                value={this.state.qtdNumeros}
                onChangeText={this.alterarQtdNumeros}                               
            />
            </>
        )
    }
}

