import React from 'react'
import { StyleSheet, Text, Pressable } from 'react-native'
import { BLACK, LIME, W } from '../../constants'
import Ionicons from 'react-native-vector-icons/Ionicons'

export function ButtonLong({ title, onPress, iconName }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [container, pressed && pressedCont]}
    >
      <Text style={titleS}>{title}</Text>
      <Ionicons color={BLACK} size={25} name={iconName} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  titleS: {
    color: BLACK,
    fontSize: 20,
    fontFamily: 'AvenirNext-DemiBold'
  },
  container: {
    borderColor: BLACK,
    borderWidth: 2,
    width: W - 70,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  pressedCont: {
    backgroundColor: 'rgba(28, 40, 51, .1)'
  }
})
const { titleS, container, pressedCont } = styles
