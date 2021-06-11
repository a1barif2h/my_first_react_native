import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('Arif')
  const [age, setAge] =useState(29)

  const handleState = () => {
    setName('Mohammad Arif Hossain')
    setSon({name: 'Mohammad Arif Hossain', age: 8.5})
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textSize}>Name: {name}, Age: {age} </Text>
      <Text>Enter Name:</Text>
      <TextInput onChangeText={(val) => setName(val)} placeholder='e.g. Jhon Due' style={styles.textInput} />
      <Text>Enter Age:</Text>
      <TextInput keyboardType='numeric' onChangeText={(val) => setAge(val)} placeholder='e.g. 99' style={styles.textInput} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSize: {
    fontSize: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#777',
    width: 200,
    margin: 20,
    padding: 10
  }
});
