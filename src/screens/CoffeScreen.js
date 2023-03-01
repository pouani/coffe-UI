import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CoffeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CoffeScreen</Text>
    </View>
  )
}

export default CoffeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})