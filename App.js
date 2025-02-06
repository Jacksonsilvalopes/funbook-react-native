import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Login } from "./src/surfaces/Login"
import { Feed } from "./src/surfaces/Feed";
import { Conversations } from "./src/surfaces/Conversations";
import { AddPost } from "./src/surfaces/AddPost";
import { Favorites } from "./src/surfaces/Favorites";
import { Profile } from "./src/surfaces/Profile";

const Stack = createNativeStackNavigator();
  // Atualizado
const Tab = createBottomTabNavigator();

function Home() {
  return (
    // Atualizado
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Conversations" component={Conversations} />
      <Tab.Screen name="AddPost" component={AddPost} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    
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
