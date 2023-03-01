import { StyleSheet, Text, View, FlatList, Animated, Button, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { AntDesign } from '@expo/vector-icons'; 

import slides from '../DbSlide';

import SlideItem from './SlideItem';
import Paginator from './Paginator';
import { useNavigation } from '@react-navigation/native';

const Slide = ({navigation}) => {

    //hook to hide header
    React.useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null);

  //methode to scroll to next slide
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  //methode to scroll to next slide
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList data={slides} 
          renderItem={({item}) => <SlideItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { 
            useNativeDriver: false //to avoid warning
          })}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={slideRef}
        />
      </View>
      <Paginator data={slides} scrollX={scrollX} />
        <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.navigate('Login')} >
            <AntDesign name="arrowright" size={32} color="white"  />
        </TouchableOpacity>
    </View>
  )
}

export default Slide

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  ViewContain:{
    width: 'contain',
  },
  btnStyle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#324A59',
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.25)',
    color: 'black',
    position: 'absolute',
    bottom: 30,
    right: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }
})