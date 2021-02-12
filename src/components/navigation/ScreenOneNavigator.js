import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ScreenOne from '../../screens/ScreenOne'
import MenuIcon from '../MenuIcon'
import { Platform } from 'react-native'

const ScreenOneStack = createStackNavigator()

const ScreenOneNavigator = () => {

  const iosOptions = {
    headerTitle: 'Single-Level Stack'
  } 
  const androidOptions = {
    headerTitle: 'Single-Level Stack',
    headerRight: () => <MenuIcon />
  }

  return (
    <ScreenOneStack.Navigator>
      <ScreenOneStack.Screen 
        name="ScreenOne"
        component={ScreenOne}
        options={Platform.OS === "ios" ? iosOptions : androidOptions}
        />
    </ScreenOneStack.Navigator>
  )
}

export default ScreenOneNavigator