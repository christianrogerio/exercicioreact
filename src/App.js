import React, { useState } from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import Primeiro from './components/Primeiro'
import Comp, {Comp1, Comp2} from './components/Multi'
import MinMax from './components/MinMax'
import Aleatorio from './components/Aleatorio'
import Botao from './components/Botao'
import Contador from './components/Contador'
import Indireta from './components/Indireta'

export default function(){
const [msg, setMsg] = useState('vazio');

function callFazer(valor){
  setMsg(valor)
}

  return (        
        <View style={style.App}>
          <Text>{msg}</Text>
          <Indireta funcao={callFazer} />
          <Contador inicial={10} />  
          { /*
          <Botao />
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
