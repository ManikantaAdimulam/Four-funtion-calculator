import React, { Component } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

const Display = ({ values, result }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>{values}</Text>
      <Text style={styles.textStyles}>{result}</Text>
    </View>
  )
}
export default Display
const styles = StyleSheet.create({
  container: {
    height: '20%',
    width: '100%',
    backgroundColor: 'black',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  textStyles: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500'
  }
})
