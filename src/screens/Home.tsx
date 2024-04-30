/* eslint-disable prettier/prettier */
// Anime Listing View

import React from 'react';
import { Text, StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import { Status } from '../utils/constants';
import { useFetchAnimeListing } from '../hooks/useFetchAnimeListing';

interface HomeProps {
    status: Status;
}

export default function Home({ status }: HomeProps) {

    const { animeList, isLoading, isError } = useFetchAnimeListing(status);

    if (isLoading) { return <ActivityIndicator size={'large'} style={styles.loading} />; }
    if (isError) { return <Text>Error...</Text>; }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{status}</Text>
            <FlatList
                data={animeList}
                keyExtractor={(item, index) => item.mal_id.toString() + index.toString()}
                renderItem={({ item }) => (
                    <Text>{item.title}</Text>
                )} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        marginVertical: 16,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
})
