/* eslint-disable prettier/prettier */
import React, { useMemo, useState } from 'react';
import { Text, StyleSheet, View, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Status } from '../utils/constants';
import { useFetchAnimeListing } from '../hooks';
import AnimeItem from '../components/AnimeItem';
import { COLORS } from '../utils/colors';
import Loading from '../components/Loading';

interface HomeProps {
    status: Status;
}

export default function Home({ status }: HomeProps) {

    const [searchQuery, setSearchQuery] = useState('');
    const { data, isLoading, isError, hasNextPage, fetchNextPage, isFetchingNextPage } = useFetchAnimeListing(status);

    // Using useMemo to avoid unnecessary recalculations
    const filteredData = useMemo(() => {
        return data?.pages.flatMap(page => page.data)
            .filter(anime => anime?.title?.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [data, searchQuery]);

    const handleClear = () => {
        // Clear search query and reset allRoutes to original data
        setSearchQuery('');
    };

    if (isLoading) { return <Loading />; }
    if (isError) { return <Text>Error...</Text>; }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.heading}>{status}</Text>
                <View style={styles.searchBarContainer}>
                    <TextInput
                        placeholder="Search by name..."
                        style={styles.searchBar}
                        onChangeText={setSearchQuery}
                        value={searchQuery}
                    />
                    <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
                        <Text>X</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {(filteredData && filteredData.length !== 0) ? <FlatList
                data={filteredData}
                keyExtractor={(item, index) => item?.mal_id?.toString() + index.toString()}
                renderItem={({ item }) => <AnimeItem animeItem={item} />}
                showsVerticalScrollIndicator={false}
                onEndReached={() => { if (hasNextPage) { fetchNextPage(); } }}
                onEndReachedThreshold={0.5}
                ListFooterComponent={
                    isFetchingNextPage ? <Loading /> : null
                }
            /> : <Text>No results found.</Text>}
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
    searchBarContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.lightGray,
        marginLeft: 8,
        borderRadius: 22,
    },
    searchBar: {
        flex: 1,
        paddingVertical: 8,
        paddingLeft: 12,
    },
    clearButton: {
        marginTop: 8,
        width: 30,
        height: 30,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
});
