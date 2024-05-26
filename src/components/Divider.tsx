import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../utils/colors';

function Divider() {
    return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
    divider: {
        height: StyleSheet.hairlineWidth,
        width: '100%',
        marginVertical: 4,
        backgroundColor: COLORS.lightGray,
    },
});

export default Divider;
