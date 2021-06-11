import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [peoples, setPeoples] = useState([
    {name: 'Arif', key: 1},
    {name: 'Semi', key: 2},
    {name: 'Araf', key: 3},
    {name: 'Sajib', key: 4},
    {name: 'Asif', key: 5},
    {name: 'Anis', key: 6},
    {name: 'Hosneara', key: 7},
    {name: 'Arif', key: 8},
    {name: 'Semi', key: 9},
    {name: 'Araf', key: 10},
    {name: 'Sajib', key: 11},
    {name: 'Asif', key: 12},
    {name: 'Anis', key: 13},
    {name: 'Hosneara', key: 14},
  ])
  return (
    <View style={styles.container}>
      <ScrollView>
        {
          peoples.map(item => (
            <View style={styles.list} key={item.key}>
              <Text> {item.name} </Text>
            </View>
          ))
        }
      </ScrollView>
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
    backgroundColor: 'pink'
  }
});
