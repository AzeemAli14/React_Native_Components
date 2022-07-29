import { Text, View } from 'react-native'
import React, { Component, useState } from 'react'

// const [text, setText] = useState('Press me');

// function onPressHandler() {
//     setText('I\'m Impressed')
// }

class Text_View extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
                <Text style={{color: 'black', borderColor: 'black'}}>Press ME</Text>
            </View>
        )
    }
}

// const styles = StyleSheet.create ({
//     container: {
//         Col
//     }
// })

export default Text_View;