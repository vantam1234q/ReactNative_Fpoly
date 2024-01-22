/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from "react";
import { styles} from "./styles";

import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Button1 from "../../../components/Button1";

const Splash = ({navigation}) => {
    return(
        <View style={styles.container}>
        <Image 
        resizeMode="contain"
        style = {styles.img}
        source={require('../../../assets/image/Splash_Image.png')}
        />
        <Text style={styles.tittle}>You'll find</Text>
        <Text style={[styles.tittle, styles.innerTittle]}>All you need</Text>
        <Text style={styles.tittle}>Here!</Text>

        <Button1
        onPress={ () =>navigation.navigate('Sign Up')}
        title={"Sign Up"} ></Button1>
        <Pressable  onPress={ () =>navigation.navigate('Sign In')}>
            <Text style={styles.footerText}>Sign In</Text>
        </Pressable>
        </View>
    );
};

export default Splash;