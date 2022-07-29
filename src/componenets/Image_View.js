import React,{Component} from "react";
import { View, Image } from "react-native";

class Image_View extends Component {
    render () {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
                <Image
                source={require('../assets/active.png')}
                />
            </View>
        );
    }
}

export default Image_View;