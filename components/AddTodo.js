import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function AddTodo({handleAddTodo}) {
    const [newTodo, setNewTodo] = useState('');
    const handleChange = (val) => {
        setNewTodo(val)
    }
    return (
        <View>
            <TextInput onChangeText={handleChange} placeholder='Add todo...' style={styles.input} />
            <Button onPress={() => handleAddTodo(newTodo)} title='Add Todo' color= 'coral' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginTop: 10,
        marginBottom: 10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        fontSize: 16,
        paddingHorizontal: 8,
        paddingVertical: 6
    }
})
