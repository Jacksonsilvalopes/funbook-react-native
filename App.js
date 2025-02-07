import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Login } from "./src/surfaces/Login"
import { Feed } from "./src/surfaces/Feed";
import { Conversations } from "./src/surfaces/Conversations";
import { AddPost } from "./src/surfaces/AddPost";
import { Favorites } from "./src/surfaces/Favorites";
import { Profile } from "./src/surfaces/Profile";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaProvider } from "react-native-safe-area-context";
// Atualizado 2
import { Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AppLoading from "expo-app-loading";
import { requestBase } from "./src/utils/constants";
import { UserListContext } from "./src/context";



// Atualizado 2
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

// Atualizado 1
const Tab = createBottomTabNavigator();

function Home() {
  return (
    // Atualizado 1
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Feed") {
            iconName = focused ? "home" : "home-outline";
          }
          else
            if (route.name === "Conversations") {
              iconName = focused ? "chatbox" : "chatbox-outline";
            }
            else
              if (route.name === "Favorites") {
                iconName = focused ? "heart" : "heart-outline";
              }
              else
                if (route.name === "Profile") {
                  iconName = focused ? "person-circle" : "person-circle-outline";
                }
          return <Ionicons name={iconName} size={size} color={color} />;

        },
        tabBarActiveTintColor: "#25A0B0",
        tabBarInactiveTintColor: "#000000",
        tabBarShowLabel: false,
        headerTransparent: true,
        headerTitleAlign: "left",
        headerStyle: {
          height: 160,
        },
        headerTitleStyle: {
          textAlign: "left",
          fontWeight: "bold",
          fontFamily: "Poppins_700Bold",
          fontSize: 24,
        },
      }


      )}
    >
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
  const [userList, setUserList] = useState(true);

  async function fetchUserData() {
    const response = await fetch(requestBase + "/users.json");
    setUserList(await response.json());
  }

  useEffect(() => {
    fetchUserData();
  }, []);



  if (!userList) {
    return <AppLoading />;
  }
  
  /*
  async function fetchUserData() {
    try {

      const response = await fetch(requestBase + "/users.json");
      const json = await response.json();

      setUserList(json);
    } catch (error) {
      console.error(error);

    } finally {
      setIsUserLoggedIn(true);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (!userList && !error) {
    return null;
  }
*/

  // Atualizado 2
  const [loaded, error] = useFonts({
    'Poppins_Regular': Poppins_400Regular,
    'Poppins_Medium': Poppins_500Medium,
    'Poppins_Bold': Poppins_700Bold
  });

  // Atualizado 2
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  // Atualizado 2
  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider >
      <UserListContext.Provider value={{ userList: userList }} >
        <NavigationContainer>
          <Stack.Navigator>
            {!userLoggedIn ? (
              <Stack.Screen name="Login" component={Login} />
            ) : (
              <Stack.Screen
              name='Home'
              component={Home}
              options={{ headerShown: false }}
              />         
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </UserListContext.Provider>
    </SafeAreaProvider>

  );
}
