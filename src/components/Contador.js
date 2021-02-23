import React, { useState } from 'react'
import {Text, Button} from 'react-native'

export default ({inicial=1}) => {
    const [numero, setNumero] = useState(inicial);

    function inc(){
        setNumero(numero+1)
    }

    function dec(){
        setNumero(numero-1)
    }

    return (
        <>
            <Text>{numero}</Text>
            <Button title="+" onPress={inc} />
            <Button title="-" onPress={dec} />
        </>
    );
}