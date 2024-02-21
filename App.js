import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InscriptionScreen from './screens/inscription.screen.js';
import ConnexionScreen from './screens/connexion.screen.js';
import RessourceScreen from './screens/ressource.screen.js';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Connexion'>
        <Stack.Screen name="Inscription" component={InscriptionScreen} />
        <Stack.Screen name="Connexion" component={ConnexionScreen} />
        <Stack.Screen name="Ressource" component={RessourceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}