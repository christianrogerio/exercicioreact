import React from 'react'
import { Button } from 'react-native'

var faz = function(){
    alert('clicou');
}

export default ()=>{
    return <Button title='Clicar' onPress={faz} />   
}