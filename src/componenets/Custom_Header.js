import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

export default function Custom_Header() {
  function goBack () {}
  return (
    <View style={styles.body}>
      <TouchableOpacity onPress={goBack}>
        <Text> Go Back </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff6600',
  },
});
