import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Loader } from "./components/Loader";
import NavBar from "./components/NavBar";
import RessourcesList from "./screens/ressources_list.screen";
import InscriptionScreen from "./screens/inscription.screen";
import ConnexionScreen from "./screens/connexion.screen";
import RessourceScreen from "./screens/ressource.screen";
import IndexScreen from "./screens/index.screen";
import UserAccountScreen from "./screens/userAccount.screen";
import UploadScreen from "./screens/upload.screen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Upload">
          <Stack.Screen
            name="Index"
            component={IndexScreen}
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
           <Stack.Screen
            name="Upload"
            component={UploadScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NavBar"
            component={NavBar}
            options={{ headerShown: false }}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
