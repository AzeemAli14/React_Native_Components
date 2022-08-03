import {useNavigation} from '@react-navigation/native';
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, StatusBar} from 'react-native';

export default function IntroScreens() {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="white"
        translucent={true}
      />
      <Text style={styles.text}> Intro Screens </Text>
      <View>
        <View style={styles.button}>
          <Button
            title="FlatList Components"
            onPress={() => nav.navigate('Flat List')}></Button>
        </View>
        <View>
          <Button
            title="Bottom Bar Nabigation"
            onPress={() => nav.navigate('Tab Screen')}></Button>
        </View>
        <View style={{marginTop: 10}}>
          <Button
            title="Top Bar Nabigation"
            onPress={() => nav.navigate('TopBar Screen')}></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    marginBottom: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    marginBottom: 10,
    marginTop: 10,
  },
});
