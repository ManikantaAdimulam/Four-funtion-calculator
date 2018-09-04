import React, { Component } from 'react'
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native'

const Button = ({ title,onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonView}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}
export default Button
const { height, width } = Dimensions.get('screen')
const styles = StyleSheet.create({
  buttonView: {
    height: (height - (height * 0.2 + 20)) / 4,
    width: width / 4,
    borderWidth: 0.5,
    borderColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
