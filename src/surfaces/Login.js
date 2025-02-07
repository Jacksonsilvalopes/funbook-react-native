import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useHeaderHeight } from "@react-navigation/elements";

export const Login = () => {
 
  const headerHeight = useHeaderHeight();

  return (


    <SafeAreaView style={{ flex: 1, paddingTop: headerHeight }}>
      <View>
      <Text>
            This will be the  login screen 
        </Text>
      </View>
    </SafeAreaView>

  )
}
