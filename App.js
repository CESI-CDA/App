import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InscriptionScreen from './screens/inscription.screen.js';
import ConnexionScreen from './screens/connexion.screen.js';
import RessourceScreen from './screens/ressource.screen.js';
import IndexScreen from './screens/index.screen.js';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Ressource'>
        <Stack.Screen name="Inscription" component={InscriptionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Connexion" component={ConnexionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Index" component={IndexScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Ressource" component={RessourceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}