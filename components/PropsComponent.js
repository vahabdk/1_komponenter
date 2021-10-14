import React from 'react'
import {Text,View} from 'react-native'


const PropsComponent = ({name}) => {
    return(
        <View>
            <Text>Mit navn er {name}</Text>
        </View>
    )
}

export default PropsComponent;