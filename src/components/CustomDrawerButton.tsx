/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import { COLORS } from '../utils/colors';

export default function CustomDrawerButton() {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} // Opens or closes the drawer
        >
            <Text style={styles.buttonText}>☰</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        marginLeft: 15,
    },
    buttonText: {
        color: COLORS.blue_shade,
        fontSize: 20,
    },
});
