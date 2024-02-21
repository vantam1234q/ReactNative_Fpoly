/* eslint-disable prettier/prettier */
import React from 'react';
import {Pressable, Text, View, Image} from 'react-native';
import {styles} from './styles';

const ProductHomeItem = ({title, price, image, onPress,navigation}) => {
  return (
    <Pressable onPress={() =>navigation.navigate('Product')} style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </Pressable>
  );
};

export default React.memo(ProductHomeItem);