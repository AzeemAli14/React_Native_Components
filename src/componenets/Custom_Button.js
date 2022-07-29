import React,{ Component } from "react";
import { Button, View } from "react-native";

class Custom_Button extends Component {
    render () {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
                <Button title="Custom Button"/>
            </View>
        );
    }
}

export default Custom_Button;