import React, { useState } from 'react';
import { Alert, FlatList, Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    {title: 'Buy Coffee', key: 1},
    {title: 'Write Code ', key: 2},
    {title: 'Play with Switch', key: 3},
  ])

  const handleRemove = (key) => {
    setTodos(prevState => {
      return prevState.filter(item => item.key != key)
    })
  }

  const handleAddTodo = todo => {
    if(todo && todo.length > 3) {
      setTodos(prevState => {
        return [
          {title: todo, key: Math.random()},
          ...prevState
        ]
      })
    } else {
      Alert.alert('Oops!', 'Write Your Todo. Min chars 3.', [{
        text: 'Understand',
        onPress: () => console.log('Alert cancel')
      }])
    }
  }
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('Keyboard dismessed')
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo handleAddTodo={handleAddTodo} />
          <FlatList 
          data={todos}
          renderItem={({item}) => (
            <View style={styles.list}>
              <TodoItem item={item} handleRemove={handleRemove} />
            </View>
          )}
        />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  content: {
    marginTop: 20,
    padding: 30,
  }
});
