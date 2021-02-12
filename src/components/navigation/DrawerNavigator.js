import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import ScreenOne from '../../screens/ScreenOne'
import MenuIcon from '../MenuIcon'
import ScreenTwoA from '../../screens/ScreenTwoA'
import ScreenTwoB from '../../screens/ScreenTwoB'

const Drawer = createDrawerNavigator()
const ScreenOneStack = createStackNavigator()
const ScreenTwoStack = createStackNavigator()

export default function DrawerNavigator() {
  return (
      <Drawer.Navigator initialRouteName="ScreenOne">
        {/* ScreenOne Stack */}
        <Drawer.Screen 
          name="ScreenOne"
          component={ScreenOneNavigator}
        />
        {/* ScreenTwo A/B Stack */}
        <Drawer.Screen
          name="ScreenTwo"
          component={ScreenTwoNavigator}
          options={{
            tabBarIcon: () => <EvilIcons name="user" size={30} color="black"/>
          }}
        />
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

const ScreenTwoNavigator = () => {
  return (
    <ScreenTwoStack.Navigator>
      <ScreenTwoStack.Screen
        name="ScreenTwoA"
        component={ScreenTwoA}
        options={{
          headerTitle: "1 of 2",
          headerRight: () => <MenuIcon />
        }}
      />
      <ScreenTwoStack.Screen
        name="ScreenTwoB"
        component={ScreenTwoB}
        options={{
          headerTitle: "2 of 2",
          headerRight: () => <MenuIcon />
        }}
      />
    </ScreenTwoStack.Navigator>
  )
}