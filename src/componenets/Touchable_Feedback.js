import {
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

export default function Touchable_Feedback() {
  const [name, SetName] = useState('');
  const [submitted, SetSubmitted] = useState(false);
  const onPressHandler = () => {
    SetSubmitted(!submitted);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Please write your name:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. John"
        onChangeText={value => SetName(value)}
      />
      <TouchableWithoutFeedback onPress={onPressHandler}>
        <View style={styles.button}>
          <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
        </View>
      </TouchableWithoutFeedback>

      {submitted ? (
        <Text style={styles.text}>You are registered as {name}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    margin: 10,
  },
  input: {
    color: 'black',
    backgroundColor: 'grey',
    width: 250,
    borderWidth: 5,
    borderColor: '#555',
    borderRadius: 50,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
  },
});
