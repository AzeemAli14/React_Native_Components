import React,{Component} from "react";
import { View, Image, ImageBackground, StyleSheet } from "react-native";

class Image_Background extends Component {
    render () {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
                <ImageBackground source={require('../assets/orange.jpeg')} resizeMode='cover' style={styles.image}>
                <Image
                source={require('../assets/active.png')} style={{justifyContent: 'center', alignItems: 'center', margin: '30%'}}
                />
                </ImageBackground>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: "center",
      width: '100%',
      height: '100%',
    }
  });

export default Image_Background;