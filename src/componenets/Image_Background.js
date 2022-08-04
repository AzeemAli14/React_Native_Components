import React,{Component} from "react";
import { View, Image, ImageBackground, StyleSheet } from "react-native";
import ImagePath from "../constants/ImagePath";

class Image_Background extends Component {
    render () {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
                <ImageBackground source={ImagePath.icBackground} resizeMode='contain' style={styles.image}>
                <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 300}}>
                <Image
                source={ImagePath.icImage} 
                />
                </View>
                </ImageBackground>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    image: {
      flex: 1,
      alignItems: 'center',
      justifyContent: "center",

      width: '100%',
      height: '100%',
    }
  });

export default Image_Background;