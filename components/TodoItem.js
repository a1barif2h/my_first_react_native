import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function TodoItem({item, handleRemove}) {
    return (
        <TouchableOpacity onPress={() => handleRemove(item.key)}>
            <Text style={styles.item}> {item.title} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        fontSize: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        borderStyle: 'dashed',
        borderRadius: 10,
        marginTop: 10
    }
})
