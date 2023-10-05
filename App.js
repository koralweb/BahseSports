// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import {
  faBars,
  faClose,
  faShoppingBasket,
  faAngleLeft,
  faTrash,
  faCheckSquare,
} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
import TranslationScreen from './src/screens/TranslationScreen';
import CatalogScreen from './src/screens/CatalogScreen';
import BronScreen from './src/screens/BronScreen';
import BasketScreen from './src/screens/BasketScreen';

library.add(
  faBars,
  faClose,
  faShoppingBasket,
  faAngleLeft,
  faTrash,
  faCheckSquare,
);

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Catalog"
          component={CatalogScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Bron"
          component={BronScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Trans"
          component={TranslationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Basket"
          component={BasketScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
