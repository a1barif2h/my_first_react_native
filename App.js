import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [peoples, setPeoples] = useState([
    {name: 'Arif', id: 1},
    {name: 'Semi', id: 2},
    {name: 'Araf', id: 3},
    {name: 'Sajib', id: 4},
    {name: 'Asif', id: 5},
    {name: 'Anis', id: 6},
    {name: 'Hosneara', id: 7},
    {name: 'Arif', id: 8},
    {name: 'Semi', id: 9},
    {name: 'Araf', id: 10},
    {name: 'Sajib', id: 11},
    {name: 'Asif', id: 12},
    {name: 'Anis', id: 13},
    {name: 'Hosneara', id: 14},
  ])
  return (
    <View style={styles.container}>
      <FlatList 
        numColumns='2'
        keyExtractor={(item) => item.id}
        data={peoples}
        renderItem={({item}) => (
            <View style={styles.list} key={item.key}>
              <Text> {item.name} </Text>
            </View>
        )}
      />
      {/* <ScrollView>
        {
          peoples.map(item => (
            <View style={styles.list} key={item.key}>
              <Text> {item.name} </Text>
            </View>
          ))
        }
      </ScrollView> */}
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
