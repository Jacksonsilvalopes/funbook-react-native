import { Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useHeaderHeight } from "@react-navigation/elements";

export const AddPost = () => {
  const headerHeight = useHeaderHeight();

  return (


    <SafeAreaView style={{ flex: 1, paddingTop: headerHeight }}>
      <View>
        <Text>this will be the AddPost</Text>
      </View>
    </SafeAreaView>

  )
}

