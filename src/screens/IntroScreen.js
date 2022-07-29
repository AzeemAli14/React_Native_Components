import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, StatusBar} from 'react-native';

const IntroScreens = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "white" translucent = {true}/>
      <Text style={{color: 'black', marginBottom: 10, fontSize: 10}}> Intro Screens </Text>
      <Button title="Go to Components" onPress={() => navigation.navigate('Flat List')}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default IntroScreens;
