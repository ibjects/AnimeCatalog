/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { COLORS } from '../utils/colors';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function CustomDrawerHeader(props: DrawerContentComponentProps) {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Anime Catalog</Text>
                <Text style={styles.subTitle}>Chaudhry Talha • v1.0</Text>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        padding: 20,
        backgroundColor: COLORS.bg_black,
    },
    title: {
        color: COLORS.white,
        fontSize: 20,
    },
    subTitle: {
        color: COLORS.white,
        fontSize: 12,
    },
});
