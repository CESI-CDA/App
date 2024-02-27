import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InscriptionScreen from './screens/inscription.screen.js';
import ConnexionScreen from './screens/connexion.screen.js';
import IndexScreen from './screens/index.screen.js';
import UploadScreen from './screens/upload.screen.js';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Upload'>
        <Stack.Screen name="Index" component={IndexScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Connexion" component={ConnexionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Inscription" component={InscriptionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Upload" component={UploadScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}