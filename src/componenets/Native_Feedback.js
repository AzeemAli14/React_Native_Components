import {Text, View, StyleSheet, TouchableNativeFeedback} from 'react-native';
import React, {useState} from 'react';

export default function Native_Feedback() {
    const [rippleColor, setRippleColor] = useState("orange")
  const [rippleFlow, setRippleFlow] = useState(false);

  return (
    <View style={StyleSheet.body}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(rippleColor, rippleFlow)}
        onPress={() => setRippleFlow(!setRippleFlow)}>
        <View style={styles.touchable}>
          <Text style={styles.text}>Touchable Native Feedback</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center',
  },
  touchable: {
    flex: 0,
    margin: 90,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    alignSelf: 'center'
  },
});
