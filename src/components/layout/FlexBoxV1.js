import React from 'react'
import {View, StyleSheet} from 'react-native'
import Quadrado from './Quadrado' 


export default props => {
    return (<View style={estilos.FlexExer}>
                <Quadrado cor='#FF0000' />
                <Quadrado cor='#00FF00' />
                <Quadrado cor='#0000FF' />
                <Quadrado cor='#FF0000' />
                <Quadrado cor='#00FF00' />
                <Quadrado cor='#0000FF' />
            </View>);    
}

const estilos = StyleSheet.create({
    FlexExer :{
        backgroundColor: '#F00F0F',
        flexGrow: 1,
        justifyContent: 'space-around',
        width: '100%',
        alignItems: 'flex-start',
    }
});