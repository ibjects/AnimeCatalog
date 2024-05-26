import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Pressable } from 'react-native';
import { COLORS } from '../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../utils/RootStackParmsList';

type AnimeTabsScreenOwnProps = StackNavigationProp<RootStackParamList, 'AnimeTabs'>;
interface AnimeItemProps {
    animeItem: AnimeCatalog.Anime;
    isFavourite?: boolean;
}

export default function AnimeItem({ animeItem }: AnimeItemProps) {

    const navigation = useNavigation<AnimeTabsScreenOwnProps>();

    return (
        <Pressable style={styles.animeContainer} onPress={() => navigation.navigate('Details', { selectedAnimeItemMalId: animeItem.mal_id })}>
            <ImageBackground source={{ uri: animeItem.images.jpg.image_url }} style={styles.featuredImage} resizeMode="cover">
                <View style={styles.imageOverlay} />
                <Text style={styles.titleLabel} numberOfLines={2} ellipsizeMode="tail">{animeItem.title}</Text>
                {animeItem.rating && <Text style={styles.ratingLabel}>{animeItem.rating}</Text>}
                {animeItem.score && <Text style={styles.scoreLabel}>★ {animeItem.score}</Text>}
                {animeItem.year && <Text style={styles.yearLabel}>{animeItem.year}</Text>}
            </ImageBackground>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    animeContainer: {
        flex: 1,
        marginVertical: 6,
    },
    featuredImage: {
        height: 120,
        justifyContent: 'flex-end',
        padding: 12,
        borderRadius: 12,
        overflow: 'hidden',
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
        opacity: 0.5,
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
