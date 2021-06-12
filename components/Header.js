import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor: 'coral',
        marginTop: 30,
        padding: 20
    },
    title: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})