import React, {Component} from 'react';
import TabScreen from '../screens/TabScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroScreen from '../screens/IntroScreen';
import FlatListScreen from '../screens/FlatListScreen';
import Activity_Indicate from '../componenets/Activity_Indicate';
import Custom_Button from '../componenets/Custom_Button';
import Image_Background from '../componenets/Image_Background';
import Image_View from '../componenets/Image_View';
import Modal_View from '../componenets/Modal_View';
import On_Pressable  from '../componenets/On_Pressable';
import Switch_View  from '../componenets/Switch_View';
import Text_Input from '../componenets/Text_Input';
import Text_View from '../componenets/Text_View'
import Keyboard_Avoiding from '../componenets/Keyboard_Avoiding';
import Touchable_Highlight from '../componenets/Touchable_Highlight';
import Touchable_Opacity from '../componenets/Touchable_Opacity';
import Touchable_Feedback from '../componenets/Touchable_Feedback';
import Drawer_Layout from '../componenets/Drawer_Layout';
import Native_Feedback from '../componenets/Native_Feedback';
import Custom_Header from '../componenets/Custom_Header';
import TopBarScreen from '../screens/TopBarScreen';

const Stack = createNativeStackNavigator();
class Navigate extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="IntroScreen">
        <Stack.Screen options={{headerShown:false}} name='IntroScreen' component={IntroScreen} />
        <Stack.Screen name='Flat List' component={FlatListScreen} />
        
        <Stack.Screen name='Activity Indicator' component={Activity_Indicate}/>
        <Stack.Screen name='Buttons' component={Custom_Button} />
        <Stack.Screen name='Image Background' component={Image_Background} />
        <Stack.Screen name='Image View' component={Image_View} />
        <Stack.Screen name='Modal View' component={Modal_View} />
        <Stack.Screen name='Pressable' component={On_Pressable} />
        <Stack.Screen name='Switches' component={Switch_View} />
        <Stack.Screen name='Text Input' component={Text_Input} />
        <Stack.Screen name='Text View' component={Text_View} />
        <Stack.Screen name='Keyboard Avoiding View' component={Keyboard_Avoiding} />
        <Stack.Screen name='Touchable Highlight' component={Touchable_Highlight} />
        <Stack.Screen name='Touchable Opacity' component={Touchable_Opacity} />
        <Stack.Screen name='Touchable Without Feedback' component={Touchable_Feedback} />
        <Stack.Screen name='Touchable Native Feedback' component={Native_Feedback} />
        <Stack.Screen name='Android Drawer Layout' component={Drawer_Layout} />
        <Stack.Screen options={{headerShown: false}} name="Custom Header" component={Custom_Header} />
        <Stack.Screen options={{headerShown: false}} name='Tab Screen' component={TabScreen} />
        <Stack.Screen options={{headerShown: false}} name='TopBar Screen' component={TopBarScreen} />
      </Stack.Navigator>
      
    );
  }
}

export default Navigate;
