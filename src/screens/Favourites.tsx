/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

import { useFavourites } from '../hooks';
import AnimeItem from '../components/AnimeItem';

export default function Favourites() {

    const { favourites } = useFavourites();

    return (
        <View style={styles.container}>
            {(favourites && favourites.length > 0) ? <FlatList
                key={favourites.length}
                data={favourites}
                keyExtractor={(item, index) => item?.mal_id?.toString() + index.toString()}
                renderItem={({ item }) => <AnimeItem animeItem={item} />}
                showsVerticalScrollIndicator={false}
            /> : <Text>No favourites added yet.</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
    },
});
