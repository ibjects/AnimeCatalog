/* eslint-disable prettier/prettier */
import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { Image, Text, StyleSheet, View, ScrollView, Linking, TouchableOpacity, Alert } from 'react-native';

import { RootStackParamList } from '../utils/RootStackParmsList';
import { useAnimeDetails, useFavourites } from '../hooks';
import Loading from '../components/Loading';
import { COLORS } from '../utils/colors';
import Divider from '../components/Divider';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

export default function Details() {

    const route = useRoute<DetailsScreenRouteProp>();
    const { selectedAnimeItemMalId } = route.params;

    const { data, isLoading, isError } = useAnimeDetails(selectedAnimeItemMalId);
    const { favourites, addFavourite, removeFavourite } = useFavourites();

    if (isLoading) { return <Loading />; }
    if (isError) { return <Text>Error occured. Please try again.</Text>; }

    const {
        title,
        source,
        duration,
        rating,
        score,
        rank,
        year,
        popularity,
        background,
        synopsis,
        images,
        trailer,
    } = data.data ?? {};

    const isFavourite = favourites.some(item => item.mal_id === selectedAnimeItemMalId);

    const openTrailerURL = async (url: string) => {
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert('There was a problem opening the trailer.');
        }
    };

    const getFavButtonTitle = () => {
        if (isFavourite) {
            return '♡ Remove from Favourites';
        }
        return '♡ Add to Favourites';
    };

    const setFav = () => {
        if (isFavourite) {
            removeFavourite(selectedAnimeItemMalId);
        } else {
            const favData: AnimeCatalog.Anime = {
                mal_id: selectedAnimeItemMalId,
                images: {
                    jpg: {
                        image_url: images.jpg.image_url,
                    },
                },
                title, rating, score, year,
            };
            addFavourite(favData);
        }
    };

    return (
        <ScrollView>
            <View style={styles.headerContainer}>
                <Image
                    style={styles.featuredImage}
                    source={{ uri: images.jpg.image_url }}
                    resizeMode="contain" />
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subTitle}>{source} {year && `• ${year} `}• {duration}</Text>
                    <Text style={styles.headerDescriptionText}>{rating}</Text>
                    <Divider />
                    <Text style={styles.scoreText}>⭐ {score ?? '0.0'} {' '} {rank && `🌐 ${rank} `} 🔥 {popularity} </Text>
                    <Divider />
                    {trailer.url && <TouchableOpacity onPress={() => openTrailerURL(trailer.url)}>
                        <Text style={styles.trailerButtonText}>Watch Trailer</Text>
                    </TouchableOpacity>}
                </View>
            </View>
            <TouchableOpacity style={[styles.favButton, { backgroundColor: isFavourite ? COLORS.red : COLORS.blue }]} onPress={() => setFav()}>
                <Text style={styles.favButtonLabel}>{getFavButtonTitle()}</Text>
            </TouchableOpacity>
            <View style={styles.detailsContainer}>
                <Text style={styles.detailsText}>{synopsis}</Text>
                {background && <>
                    <Text style={styles.detailsHeading}>Background</Text>
                    <Text style={styles.detailsText}>{background}</Text>
                </>}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: COLORS.bg_black,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    featuredImage: {
        width: 100,
        height: 200,
    },
    contentContainer: {
        flex: 1,
        marginLeft: 12,
        justifyContent: 'center',
    },
    title: {
        fontWeight: '400',
        fontSize: 24,
        color: COLORS.white,
    },
    subTitle: {
        fontSize: 16,
        color: COLORS.white,
    },
    headerDescriptionText: {
        fontSize: 12,
        color: COLORS.white,
    },
    scoreText: {
        fontWeight: '300',
        fontSize: 12,
        color: COLORS.white,
    },
    trailerButtonText: {
        color: COLORS.blue,
        fontWeight: 'bold',
    },
    favButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
    },
    favButtonLabel: {
        color: COLORS.white,
        fontWeight: 'bold',
    },
    detailsContainer: {
        padding: 16,
    },
    detailsText: {
        fontSize: 12,
        color: COLORS.bg_black,
    },
    detailsHeading: {
        fontWeight: 'bold',
        color: COLORS.blue_shade,
        marginVertical: 8,
    },
});
