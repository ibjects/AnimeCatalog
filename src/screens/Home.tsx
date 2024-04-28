// Anime Listing View

import React from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import { Status } from '../utils/constants';

interface HomeProps {
    status: Status;
}

export default function Home({ status }: HomeProps) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.heading}>{status}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})
