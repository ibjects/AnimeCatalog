/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, StyleSheet, View, FlatList, TextInput } from 'react-native';
import { Status } from '../utils/constants';
import { useFetchAnimeListing } from '../hooks/useFetchAnimeListing';
import AnimeItem from '../components/AnimeItem';
import { COLORS } from '../utils/colors';
import Loading from '../components/Loading';

interface HomeProps {
    status: Status;
}

export default function Home({ status }: HomeProps) {

    const { animeList, isLoading, isError } = useFetchAnimeListing(status);

    if (isLoading) { return <Loading />; }
    if (isError) { return <Text>Error...</Text>; }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.heading}>{status}</Text>
                <TextInput
                    placeholder="Search by anime name..."
                    style={styles.searchBar}
                />
            </View>
            <FlatList
                data={animeList}
                keyExtractor={(item, index) => item.mal_id.toString() + index.toString()}
                renderItem={({ item }) => <AnimeItem animeItem={item} />}
                showsVerticalScrollIndicator={false} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
    },

    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8,
    },
    searchBar: {
        backgroundColor: COLORS.lightGray,
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 22,
        marginLeft: 8,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
})
