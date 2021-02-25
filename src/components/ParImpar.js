import React from 'react'
import {View, Text} from 'react-native'

export default props => {
    let valor = 1;
    return (
        <View>
            {valor == 1?
                <Text>Valor é um</Text>
                :<Text>Outro valor</Text>
            }
        </View>
    );
}