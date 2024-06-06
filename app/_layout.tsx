import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import ListScreen from './ListScreen';
import ImageScreen from './ImageScreen';
import CounterScreen from './CounterScreen';
import SquareScreen from './SquareScreen';

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: "App",
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Image" component={ImageScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="SquareScreen" component={SquareScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}