import React from 'react';
import {  View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useHeaderHeight } from "@react-navigation/elements";
import { ListOfAvatars } from '../components/ListOfAvatars';
import { ListOfCards } from '../components/ListOfCards';





export const Feed = () => {

    const headerHeight = useHeaderHeight();
    return (
        <SafeAreaView style={{ flex: 1, paddingTop: 80,paddingHorizontal: 20, backgroundColor: "rgba(255,255,255, 1)", }}>
            <View 
             style={{
                backgroundColor: "rgba(255,255,255, 1)",
                height: "100%",
                width: "100%",
                zIndex: 100,
              }}
            
            >
                <ListOfAvatars />
                <ListOfCards />
            </View>
        </SafeAreaView>

    );
};

