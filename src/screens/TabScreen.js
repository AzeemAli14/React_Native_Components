import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import Tab_Route from '../navigation/Tab_Route';

export default function TabScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#00cc66"
          translucent={true}
        />
      <Tab_Route />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
    }
})
