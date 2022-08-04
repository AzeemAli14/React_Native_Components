import React from 'react';
import {ActivityIndicator, View, Text, StyleSheet} from 'react-native';

export default function Activity_Indicate({ route }) {
    const {ItemName} = route.params;
  return (
    <View style={styles.body}>
      <Text style={{color: 'black', marginBottom: 30, fontSize: 20}}> Component Name: {JSON.stringify(ItemName)}</Text>
      <ActivityIndicator size="large" color="#ff0000" />
    </View>
  );
}

const styles = StyleSheet.create ({
    body: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})
