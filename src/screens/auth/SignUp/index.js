/* eslint-disable prettier/prettier */
import React from "react";
import {styles } from './style';
import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import Input from "../../../components/input1";
import Button1 from "../../../components/Button1";

const SigUp = () => {
    return(
        <View style={styles.container}>
           <Text style={[styles.title1, styles.innerTittle]}>Creat your account</Text>
           <Input placeholder={"Nguyen Van A"}/>
           <Input placeholder={"abc@gmail.com"}/>
           <Input placeholder={"******"}/>
           <Button1 title={"Sign Up"} ></Button1>
           
        
        </View>
    );
};

export default SigUp;