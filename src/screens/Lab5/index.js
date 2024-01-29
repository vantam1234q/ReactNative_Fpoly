/* eslint-disable prettier/prettier */
import React from "react";
import {styles} from './styles';
import { ImageBackground, Pressable, StatusBar, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import Button1 from "../../components/Button1";
import Button5 from "../../components/button5";
const Lab5 = ({navigation}) => {
return(
    <View style = {styles.container}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0"/>
        <ImageBackground
        style={styles.image}
        source={require('../../assets/image/back1.png')}>
            <View style={styles.details}>
                <Text style={styles.text}>
                    <Text style={styles.firstLine}>Discover {' \n'}</Text>
                    <Text style={styles.secondLine}>World with us </Text>
                </Text>
                <Text style={styles.textstyle}>Discover World with us</Text>
                <Button5 onPress={() => navigation.navigate('Flex')}>Get start</Button5>
            </View>
        </ImageBackground>
    </View>
);
};
export default Lab5;