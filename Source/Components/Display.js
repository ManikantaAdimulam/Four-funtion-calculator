import React, { Component } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

const Dispaly = ({ values }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>{values}</Text>
    </View>
  )
}
export default Dispaly
const styles = StyleSheet.create({
  container: {
    height: '20%',
    width: '100%',
    backgroundColor: 'black',
    alignItems:'flex-end',
    justifyContent: 'flex-end'
  },
  textStyles:{
      color: '#fff',
      fontSize: 18,
      fontWeight: '500'
  }
})
