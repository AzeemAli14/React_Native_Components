import {Text, View, StyleSheet, StatusBar} from 'react-native';
import React, {Component} from 'react';

export class SignupScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#b3e6ff"
          barStyle="dark-content"
          hidden={false}
          translucent={true}
        />
        <Text style={{color: 'red'}}>ForgotPassword</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default SignupScreen;
