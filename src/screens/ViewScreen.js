import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import Activity_Indicate from '../componenets/Activity_Indicate';
import Custom_Button from '../componenets/Custom_Button';
import Image_Background from '../componenets/Image_Background';
import Modal_View from '../componenets/Modal_View';

class ViewScreen extends Component {
  render() {
    return (
      <View>
        {/* <Text> Activity Indicator Example </Text>
        <Activity_Indicate />
        <Text> Button Example </Text>
        <Custom_Button /> */}
        {/* <Text> Image and ImageBackground Example </Text>
        <Image_Background />
        <Text> Modal Example </Text>
        <Modal_View /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default ViewScreen;
