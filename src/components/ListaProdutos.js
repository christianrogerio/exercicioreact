import React from 'react'
import {Text} from 'react-native'
import produtos from './produtos'

export default props => {
    return (
        <>
            {
                produtos.map(p => { return <Text key={p.id}>Nome: {p.nome}, Preço: {p.preco}</Text>})
            }        
        </>
    )
}