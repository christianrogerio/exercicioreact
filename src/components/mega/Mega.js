import React, {Component} from 'react'
import {Text, TextInput, Button, View} from 'react-native'
import MegaNumeros from './MegaNumero'

export default class Mega extends Component{
    state ={
        qtdNumeros : this.props.qtdNumeros,
        numeros : []
    }

    alterarQtdNumeros = (qt) => {
        this.setState({ qtdNumeros : +qt})
    }

    sortearNumero(lista){
        let n = 0;
        do {
            n = parseInt(Math.random() * 60 + 1);
        }while(lista.includes(n) );
        return n;
    }


    gerarNumeros = ()=>{
        let lista = [];
        for(let i=0;i<=this.state.qtdNumeros;i++){
            lista[i]=this.sortearNumero(lista);
        }
        lista.sort(function(a,b){return a-b;});
        this.setState({numeros : lista});
    }

    clickSortear = ()=> {
        this.gerarNumeros();       
    }

    exibirNumeros(){
        const nums = this.state.numeros;
        return nums.map(num => { return <MegaNumeros num={num}/> } );
    }

    render(){
        return (
            <>            
            <Text>!MEGA-SENA {this.state.qtdNumeros}</Text>
            <TextInput 
                keyboardType={'numeric'}
                style={{borderBottomWidth:1}}
                placeholder="Informar valor"
                value={`${this.state.qtdNumeros}`}
                onChangeText={this.alterarQtdNumeros}                               
            />
            <Button title='Sortear!' onPress={this.clickSortear} />
            <View style={{flexDirection:'row', flexWrap:'wrap'  }}>
            {this.exibirNumeros()}
            </View> 
            </>
        )
    }
}

