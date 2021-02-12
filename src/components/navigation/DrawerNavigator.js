import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import ScreenOne from '../../screens/ScreenOne'
import MenuIcon from '../MenuIcon'

const Drawer = createDrawerNavigator()
const ScreenOneStack = createStackNavigator()

export default function DrawerNavigator() {
  return (
      <Drawer.Navigator initialRouteName="ScreenOne">
        {/* ScreenOne Stack */}
        <Drawer.Screen 
          name="ScreenOne"
          component={ScreenOneNavigator}
        />
        {/* ScreenTwo A/B Stack */}
        {/* <Drawer.Screen /> */}
      </Drawer.Navigator>
  );
}

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