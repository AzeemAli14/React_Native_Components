import React, { Component }from "react";
import {ActivityIndicator, View} from "react-native";

class Activity_Indicate extends Component {
    render () {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                
                <ActivityIndicator size="large" color="#ff0000" />
            </View>
        );
    }
}

export default Activity_Indicate;