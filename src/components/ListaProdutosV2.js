import React from 'react'
import {Text, FlatList} from 'react-native'
import produtos from './produtos'

export default props => {
    return (
        <>
        <Text>Lista de Produtos V2:</Text>
        <FlatList
        data={produtos}
        renderItem={({item:p})=>{return <Text>{p.id}) {p.nome}</Text>}}
        keyExtractor={i => `${i.id}`}
        />
        </>
    );
}