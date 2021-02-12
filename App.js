import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTabNavigator from './src/components/navigation/BottomTabNavigator'
import DrawerNavigator from './src/components/navigation/DrawerNavigator'


export default function App() {
  const Stack = createStackNavigator()
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Root" component={DrawerNavigator}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}