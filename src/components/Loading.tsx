/* eslint-disable prettier/prettier */
import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { COLORS } from '../utils/colors';

function Loading() {
    return <ActivityIndicator size={'large'} color={COLORS.blue} style={styles.loading} />;
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Loading;
