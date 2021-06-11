import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('Arif')
  const [son, setSon] = useState({name: 'Araf', age: 8})

  const handleState = () => {
    setName('Mohammad Arif Hossain')
    setSon({name: 'Mohammad Arif Hossain', age: 8.5})
  }
  return (
    <View style={styles.container}>
      <Text>My name is {name} </Text>
      <Text>My son name is {son.name} and hi is {son.age} months old </Text>
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={handleState} />
      </View>
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
  buttonContainer: {
    marginTop: 20,
  }
});
