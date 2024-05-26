import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

import { useFavourites } from '../hooks';
import AnimeItem from '../components/AnimeItem';
import { COLORS } from '../utils/colors';

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
            /> : <Text style={styles.noResultFoundLabel}>𓆝 𓆟 𓆞 𓆝 𓆟{'\n'}No favourites added yet{'\n'}𓆝 𓆟 𓆞 𓆝 𓆟</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
    },
    noResultFoundLabel: {
        textAlign: 'center',
        fontSize: 16,
        color: COLORS.blue,
        margin: 'auto',
        fontWeight: 'bold',
    },
});
