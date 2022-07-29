import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

export class Touchable_Opacity extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            alert('I am tapped');
          }}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Custom Button</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginVertical: 20,
    height: 50,
    width: 190,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#0099cc',
    backgroundColor: '#00ccff'
  },
  buttonText: {
    textTransform: 'uppercase',
    color: '#5d57ff',
    fontSize: 16,
  },
});

export default Touchable_Opacity;
