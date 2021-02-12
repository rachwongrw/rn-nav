import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { EvilIcons } from '@expo/vector-icons'
import ScreenOneNavigator from './ScreenOneNavigator'
import ScreenTwoNavigator from './ScreenTwoNavigator'

const BottomTab = createBottomTabNavigator()

export default function BottomTabNavigator() {

  return (
    <BottomTab.Navigator initialRouteName="ScreenOne">
      {/* ScreenOne Stack */}
      <BottomTab.Screen 
        name="ScreenOne"
        component={ScreenOneNavigator}
        options={{
          tabBarIcon: () => <EvilIcons name="star" size={30} color="black"/>
        }}
      />
      {/* ScreenTwo A/B Stack */}
      <BottomTab.Screen
        name="ScreenTwo"
        component={ScreenTwoNavigator}
        options={{
          tabBarIcon: () => <EvilIcons name="user" size={30} color="black"/>
        }}
      />
      
    </BottomTab.Navigator>
  )
}