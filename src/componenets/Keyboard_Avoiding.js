import { Text, SafeAreaView, TextInput, KeyboardAvoidingView, StyleSheet} from 'react-native'
import React, { Component } from 'react'

export default function Keyboard_Avoiding() {
  const [inputValue, setInputValue] = React.useState("")
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <Text style={{ color: 'black' }}>Enter Text</Text>
        <TextInput style={{ borderBottomColor: 'blue', borderBottomWidth: 2, borderColor: 'green', color: 'black', width: 200 }} value={inputValue} onChangeText={setInputValue} placeholder='Enter Text here' />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  container: {
  flex: 1, 
  alignItems: 'center', 
  justifyContent: 'center', 
  backgroundColor: '#fff'
  }
})