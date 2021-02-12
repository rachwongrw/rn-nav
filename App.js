import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
export default function App() {

  const Stack = createStackNavigator()

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}