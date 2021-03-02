import React, { useState } from 'react'
import {View, Text, StyleSheet, Button, SafeAreaView} from 'react-native'
import Primeiro from './components/Primeiro'
import Comp, {Comp1, Comp2} from './components/Multi'
import MinMax from './components/MinMax'
import Aleatorio from './components/Aleatorio'
import Botao from './components/Botao'
import Contador from './components/Contador'
import Indireta from './components/Indireta'
import ParImpar from './components/ParImpar'
import Grupo from './components/familia/grupo'
import Membro from './components/familia/membro'
import UsuarioLogado from './components/UsuarioLogado'
import ListaProdutos from './components/ListaProdutos'
import ListaProdutosV2 from './components/ListaProdutosV2'
import DigiteSeuNome from './components/DigiteSeuNome'
import FlexBoxV1 from './components/layout/FlexBoxV1'
import Mega from './components/mega/Mega'

export default function(){
const [msg, setMsg] = useState('vazio');

function callFazer(valor){
  setMsg(valor)
}

  return (        
        <SafeAreaView style={style.App}>
          <Mega qtdNumeros={10} />
          { /* <FlexBoxV1 />
           <DigiteSeuNome />
           
          <ListaProdutosV2/>          
          <ListaProdutos/>         
          <UsuarioLogado nome="Christian" />          
          <UsuarioLogado nome="" />          
          <UsuarioLogado />          
          <UsuarioLogado nome="Rogério" />          
          
            <Grupo>
            <Membro nome="Christian"/>
            <Membro nome="Mauren"/>
            <Membro nome="Rogério"/>
            </Grupo>          
          
          <ParImpar></ParImpar>
          <Text>{msg}</Text>
          <Text>Mudou</Text>
          <Indireta funcao={callFazer} />
          <Contador inicial={10} />  
         
          <Botao />
          <Aleatorio min={0} max={999}/>
          <MinMax min={0} max={999}/>
          <Text style={style.Titulo}>Teste</Text>
          <Comp></Comp>
          <Comp1/>
          <Comp2/>
          <Primeiro/> */ }
        </SafeAreaView> 
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
