import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import ScreenOne from '../../screens/ScreenOne'
import { EvilIcons } from '@expo/vector-icons'
import ScreenTwoA from '../../screens/ScreenTwoA'

const BottomTab = createBottomTabNavigator()
const ScreenOneStack = createStackNavigator()
const ScreenTwoStack = createStackNavigator()

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
  );
}

const ScreenOneNavigator = () => {
  return (
    <ScreenOneStack.Navigator>
      <ScreenOneStack.Screen
        name="ScreenOne"
        component={ScreenOne}
        options={{headerTitle: 'Single-Level Stack'}}
      />
    </ScreenOneStack.Navigator>
  )
}

const ScreenTwoNavigator = () => {
  return (
    <ScreenTwoStack.Navigator>
      <ScreenTwoStack.Screen
        name="ScreenTwo"
        component={ScreenTwoA}
      />
    </ScreenTwoStack.Navigator>
  )
}