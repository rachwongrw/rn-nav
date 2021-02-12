import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTabNavigator from './src/components/navigation/BottomTabNavigator'
import ScreenOne from './src/screens/ScreenOne'
import ScreenTwoA from './src/screens/ScreenTwoA'
import ScreenTwoB from './src/screens/ScreenTwoB'


export default function App() {
  const Stack = createStackNavigator()
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Root" component={BottomTabNavigator}/>
          <Stack.Screen name="ScreenTwoA" component={ScreenTwoA}/>
          <Stack.Screen name="ScreenTwoB" component={ScreenTwoB}/> 
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}