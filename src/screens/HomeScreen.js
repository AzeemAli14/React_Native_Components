import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.body}>
        <Text style={styles.text}>Home Screen</Text>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    color: 'black'
  }
})

export default HomeScreen