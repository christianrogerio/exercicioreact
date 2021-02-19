import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Primeiro from './components/Primeiro'
import Comp, {Comp1, Comp2} from './components/Multi'
import MinMax from './components/MinMax'
import Aleatorio from './components/Aleatorio'
import Botao from './components/Botao'

export default function(){
  return (
        <View style={style.App}>
          <Botao />          
          { /*
          <Aleatorio min={0} max={999}/>
          <MinMax min={0} max={999}/>
          <Text style={style.Titulo}>Teste</Text>
          <Comp></Comp>
          <Comp1/>
          <Comp2/>
          <Primeiro/> */ }
        </View> 
  )
}

const style = StyleSheet.create(
{
  App:{
     /* backgroundColor:'#009900',*/ 
    flexGrow:1,
    justifyContent: "center",
    alignItems: "center"
  },
  Titulo: {
    fontSize:40
  }
}  
)
