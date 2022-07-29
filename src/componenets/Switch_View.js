import { Switch, View } from 'react-native'
import React, { useState } from 'react'

export default function Switch_View() {
    const [isEnabled, setIsEnabled] = useState(false)
    function toggleswitch() {
        setIsEnabled(previosState => !previosState)
    }
    return (
        <View style={{alignItems: 'center', marginVertical: '70%'}}>
            <Switch trackColor={{ false: "red", true: "green" }}
                thumbColor={isEnabled ? "Yellow" : "pink"}
                onValueChange={toggleswitch}
                value={isEnabled}
            />
        </View>
    )
}