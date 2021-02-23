import React from 'react'
import {Button} from 'react-native'

export default props =>
{
    function btClick(){
        props.funcao('Hello do Filho!')
    }

    return (
        <Button title="Chama Indireta a CallBack" onPress={btClick}/>
    );
}