import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Login } from "./src/surfaces/Login"
import { Feed } from "./src/surfaces/Feed";

const Stack = createNativeStackNavigator();
  // Atualizado
const Tab = createBottomTabNavigator();

function Home() {
  return (
    // Atualizado
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [userLoggedIn, setIsUserLoggedIn] = useState(true);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userLoggedIn ? (
          <Stack.Screen name="Login" component={Login} />
        ) : (
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
      </NavigationContainer>
  );
}
