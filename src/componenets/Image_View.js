import React,{Component} from "react";
import { View, Image } from "react-native";
import ImagePath from "../constants/ImagePath";

class Image_View extends Component {
    render () {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
                <Image
                source={ImagePath.icImage}
                />
            </View>
        );
    }
}

export default Image_View;