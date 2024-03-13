import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import RessourcesList from "./screens/ressources_list.screen";
import InscriptionScreen from "./screens/inscription.screen.js";
import ConnexionScreen from "./screens/connexion.screen.js";
import RessourceScreen from "./screens/ressource.screen.js";
import IndexScreen from "./screens/index.screen.js";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TabNav from "./components/TabNav";
import UserAccountScreen from "./screens/userAccount.screen.js";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Italic": require("./assets/fonts/Roboto-Italic.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
  });

  if (!fontsLoaded) {
    // Affichez un indicateur de chargement ou un écran de chargement jusqu'à ce que les polices soient chargées
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
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
            name="Index"
            component={IndexScreen}
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
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
