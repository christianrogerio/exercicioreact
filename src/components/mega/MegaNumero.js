import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

export default props =>{    

    return (
            <Text style={style.Bolinha}>{props.num}</Text>
    );

}

const style = StyleSheet.create({
    Bolinha: {
        borderRadius: 25,
        borderColor: '#0000FF',
        borderWidth: 2,
        backgroundColor: '#00FF00',
        width: 55,
        height: 55,
        margin: 5,
        padding: 5,
        alignContent:'center',
        justifyContent: 'center',
        
    }
});