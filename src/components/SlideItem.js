import { StyleSheet, Text, useWindowDimensions, View, Image } from 'react-native'
import React from 'react'

const SlideItem = ({item}) => {
    const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.containerText}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.title}</Text>
      </View>
    </View>
  )
}

export default SlideItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    alignItems: 'center',
  },
  image: {
    flex: 0.7,
    height: 500,
    width: '98%',
    borderRadius: 24,
  },
  title: {
    fontWeight: 'bold',
    color: '#181D2D',
    lineHeight: 40,
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    color: '#AAAAAA',
    fontWeight: '300',
    textAlign: 'center',
    paddingHorizontal: 64,
    fontSize: 16,
  },
  containerText: {
    width: '90%',
    paddingVertical: 24,
  }
})