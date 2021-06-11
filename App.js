import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [peoples, setPeoples] = useState([
    {name: 'Arif', id: 1},
    {name: 'Semi', id: 2},
    {name: 'Araf', id: 3},
    {name: 'Sajib', id: 4},
    {name: 'Asif', id: 5},
    {name: 'Anis', id: 6},
    {name: 'Hosneara', id: 7},
  ])

  const handleRemove = (id) => {
    console.log(id)
    setPeoples(prevState => {
      return prevState.filter(item => item.id != id)
    })
  }
  return (
    <View style={styles.container}>
      <FlatList 
        numColumns='2'
        keyExtractor={(item) => item.id}
        data={peoples}
        renderItem={({item}) => (
          <TouchableOpacity onPress={ () => handleRemove(item.id)}>
            <View style={styles.list} key={item.key}>
              <Text> {item.name} </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    marginHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  list: {
    fontSize: 20,
    padding: 30,
    marginTop: 20,
    backgroundColor: 'pink',
    marginHorizontal: 10
  }
});
