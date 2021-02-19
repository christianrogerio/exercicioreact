import React, {Fragment} from 'react'
import {Text, View} from 'react-native'
import Estilo from './estilo'

export default () => (
    <Fragment>
        <Text style={Estilo.fontG}>Soma: {1+3}</Text>
        <Text>Primeiro Componente</Text>
        { /* Comentario de componente 
        
        */ }
    </Fragment>    
)

/*
export default () => 
{   //console.log('Opa')
    //console.warn('teste na tela yellow box')
    //alert('oi mundo')
    return (
        <View>
            <Text style={Estilo.fontG}>Soma: {1+3}</Text>
            <Text>Primeiro Componente</Text>
        </View>    
    )
}
*/