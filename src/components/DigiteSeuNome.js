import React, {useState} from 'react'
import {TextInput} from 'react-native'

export default props => {
    const [nome, setNome] = useState('');
    return (
        <>
        <TextInput
            placeholder='Informar Nome'
            value={nome}
            onChangeText={nome => setNome(nome)}
        />
        </>
    )
}