/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { COLORS } from '../utils/colors';

interface AnimeItemProps {
    animeItem: AnimeCatalog.Anime;
    isFavourite?: boolean;
}

export default function AnimeItem({ animeItem }: AnimeItemProps) {

    return (
        <View style={styles.container}>
            <ImageBackground source={{ uri: animeItem.images.jpg.image_url }} style={styles.featuredImage} resizeMode="cover">
                <View style={styles.imageOverlay} />
                <Text style={styles.titleLabel} numberOfLines={2} ellipsizeMode="tail">{animeItem.title}</Text>
                {animeItem.rating && <Text style={styles.ratingLabel}>{animeItem.rating}</Text>}
                {animeItem.score && <Text style={styles.scoreLabel}>★ {animeItem.score}</Text>}
                {animeItem.year && <Text style={styles.yearLabel}>{animeItem.year}</Text>}
            </ImageBackground>
            <View style={styles.favouriteButtonContainer}>
                {/* TODO: REMOVE THIS UI TEST CONDITION */}
                <Text style={styles.favouriteLabel}>{(animeItem.mal_id % 2 === 0) ? '♡' : '♥'}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 6,
    },
    featuredImage: {
        flex: 1,
        height: 120,
        justifyContent: 'flex-end',
        padding: 12,
    },
    favouriteButtonContainer: {
        backgroundColor: COLORS.blue,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
        width: 50,
    },
    favouriteLabel: {
        fontSize: 22,
        color: COLORS.white,
    },
    scoreLabel: {
        fontSize: 12,
        color: COLORS.white,
    },
    imageOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'black',
        opacity: 0.5, // Adjust the opacity to get the desired darkness
        // borderRadius: 12, // Ensure it matches the image if using borderRadius
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 6,
        justifyContent: 'center',
    },
    titleLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.white,
    },
    ratingLabel: {
        fontSize: 12,
        color: COLORS.white,
    },
    yearLabel: {
        fontSize: 12,
        fontWeight: 'bold',
        color: COLORS.white,
    },
});
