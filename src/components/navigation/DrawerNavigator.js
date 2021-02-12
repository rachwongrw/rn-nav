import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MenuIcon from '../MenuIcon'
import ScreenOneNavigator from './ScreenOneNavigator'
import ScreenTwoNavigator from './ScreenTwoNavigator'

const Drawer = createDrawerNavigator()

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
