import React from 'react'
import {Text} from 'react-native'
import If from './If'

export default props =>
{
    return (
        <>
            <If teste={props.nome} >
                <Text>Usuário Logado: {props.nome}</Text>
            </If>
        </>
    );
}