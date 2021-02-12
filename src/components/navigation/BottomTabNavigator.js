import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import ScreenOne from '../../screens/ScreenOne';

const BottomTab = createBottomTabNavigator()
const ScreenOneStack = createStackNavigator()

export default function BottomTabNavigator() {

  return (
    <BottomTab.Navigator initialRouteName="ScreenOne">
      {/* ScreenOne Stack */}
      <BottomTab.Screen 
        name="ScreenOne"
        component={ScreenOneNavigator}
      />
      {/* ScreenTwo A/B Stack */}
      {/* <BottomTab.Screen /> */}
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