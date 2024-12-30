import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import AppScreen from '../screens/AppScreen'; // La pantalla principal de tu app

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer> {/* Asegúrate de que este componente esté aquí */}
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="AppScreen" component={AppScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
