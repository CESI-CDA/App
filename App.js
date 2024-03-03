import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InscriptionScreen from './screens/inscription.screen.js';
import ConnexionScreen from './screens/connexion.screen.js';
import IndexScreen from './screens/index.screen.js';
import UserAccountScreen from './screens/userAccount.screen.js'


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='UserAccount'>
        <Stack.Screen name="Inscription" component={InscriptionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Connexion" component={ConnexionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Index" component={IndexScreen} options={{ headerShown: false }} />
        <Stack.Screen name="UserAccount" component={UserAccountScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}