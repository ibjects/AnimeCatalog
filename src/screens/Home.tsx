// Anime Listing View

import React from 'react'
import { Text, View } from 'react-native'

interface HomeProps {
    status: 'airing' | 'complete' | 'upcoming';
}

export default function Home({ status }: HomeProps) {
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}
