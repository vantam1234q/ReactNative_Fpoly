/* eslint-disable prettier/prettier */

import React from "react";
import { styles } from "./styles";
import { FlatList, Image, Text } from "react-native";

const { View } = require("react-native");

/* eslint-disable prettier/prettier */
const Data = [
  {
    id: '1',
    tittle: 'Data Structures',
    imageSource: require('../../assets/image/john.png'),
  },
  {
    id: '2',
    tittle: 'STL',
    imageSource: require('../../assets/image/mary.jpg'),
  },
  {
    id: '3',
    tittle: 'C++',
    imageSource: require('../../assets/image/john.png'),
  },
  {
    id: '4',
    tittle: 'Java',
    imageSource: require('../../assets/image/mary.jpg'),
  },
  {
    id: '5',
    tittle: 'SQL',
    imageSource: require('../../assets/image/john.png'),
  },
  {
    id: '6',
    tittle: 'Java',
    imageSource: require('../../assets/image/john.png'),
  },
];

const Item = ({tittle , imageSource}) => {
    return(
        <View style={styles.item}>
            <Image source={imageSource} style={styles.avatar}></Image>
            <Text style={styles.Text}>{tittle}</Text>
        </View>
    );
};

const renderItem = ({item}) => (
    <Item imageSource={item.imageSource} tittle={item.tittle}></Item>
);

const ListCourse = () => {
    return(
        <View style={styles.container}>
        <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item =>item.id}
        />
        </View>
    );
};

export default React.memo(ListCourse);