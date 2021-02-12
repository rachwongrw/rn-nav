import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MenuIcon from '../MenuIcon'
import ScreenTwoA from '../../screens/ScreenTwoA'
import ScreenTwoB from '../../screens/ScreenTwoB'

const ScreenTwoStack = createStackNavigator()

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

export default ScreenTwoNavigator