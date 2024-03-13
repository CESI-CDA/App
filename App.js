import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, View } from "react-native";
import RessourcesList from "./screens/ressources_list.screen";
import InscriptionScreen from "./screens/inscription.screen.js";
import ConnexionScreen from "./screens/connexion.screen.js";
import RessourceScreen from "./screens/ressource.screen.js";
import IndexScreen from "./screens/index.screen.js";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TabNav from "./components/TabNav";
import UserAccountScreen from "./screens/userAccount.screen.js";
import { Loader } from "./components/Loader";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  });

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {loading ? (
          <Loader />
        ) : (
          <Stack.Navigator initialRouteName="Index">
            <Stack.Screen
              name="Index"
              component={IndexScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TabNav"
              component={TabNav}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Inscription"
              component={InscriptionScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Connexion"
              component={ConnexionScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ressource"
              component={RessourceScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ressources"
              component={RessourcesList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserAccount"
              component={UserAccountScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
