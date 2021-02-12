import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ScreenOne from '../../screens/ScreenOne'
import MenuIcon from '../MenuIcon'

const ScreenOneStack = createStackNavigator()

const ScreenOneNavigator = () => {

  return (
    <ScreenOneStack.Navigator>
      <ScreenOneStack.Screen 
        name="ScreenOne"
        component={ScreenOne}
        options={{
          headerTitle: 'Single-Level Stack',
          headerRight: () => <MenuIcon />
        }} />
    </ScreenOneStack.Navigator>
  )
}

export default ScreenOneNavigator