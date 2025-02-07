import React from 'react';
import {  View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useHeaderHeight } from "@react-navigation/elements";
import { ListOfAvatars } from '../components/ListOfAvatars';
import { ListOfCards } from '../components/ListOfCards';





export const Feed = () => {

    const headerHeight = useHeaderHeight();
    return (
        <SafeAreaView style={{ flex: 1, paddingTop: headerHeight + 20, paddingHorizontal: 20 }}>
            <View >
                <ListOfAvatars />
                <ListOfCards />
            </View>
        </SafeAreaView>

    );
};

