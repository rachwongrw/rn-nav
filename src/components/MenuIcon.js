import React from 'react'
import { TouchableOpacity } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { useCallback } from 'react'

export default function MenuIcon() {
  return (
    <EvilIcons name="navicon" size={30} color="black" style={{marginRight: 20}}/>
  )
}