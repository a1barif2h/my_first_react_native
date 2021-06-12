import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TodoItem({item, handleRemove}) {
    return (
        <TouchableOpacity onPress={() => handleRemove(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name='delete' size={18} color='#333' />
                <Text style={styles.itemText}> {item.title} </Text>
            </View>
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
        marginTop: 10,
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 10
    }
})
