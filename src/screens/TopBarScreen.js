import {SafeAreaView, StatusBar} from 'react-native';
import React, {Component} from 'react';
import Top_Route from '../navigation/Top_Route';

export default function TopBarScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#0099ff"
        translucent={true}
      />
      <Top_Route />
    </SafeAreaView>
  );
}
