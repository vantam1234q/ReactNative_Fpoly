/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import InputPass from '../InputPass';
import { styles } from './styles';

const Header = ({ title, onBackPress, onLogout, showLogout, showSearch, onSearch, keyword, showBack }) => {
    const [showSearchInput, setShowSearchInput] = useState(false);

    const onSearchClick = () => {
        setShowSearchInput(s => !s)
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                {showBack ? (
                    <Pressable hitSlop={20} onPress={onBackPress}>
                        <Image style={styles.icon} source={require('../../assets/image/back.png')} />
                    </Pressable>
                ) : showSearch ? (
                    <Pressable hitSlop={20} onPress={onSearchClick}>
                        <Image style={styles.icon} source={require('../../assets/image/search.png')} />
                    </Pressable>
                ) : <View style={styles.space} />}

                <Text style={styles.title}>{title}</Text>

                {showLogout ? (
                    <Pressable hitSlop={20} onPress={onLogout}>
                        <Image style={styles.icon} source={require('../../assets/image/logout.png')} />
                    </Pressable>
                ) : <View style={styles.space} />}
            </View>

            {showSearchInput ? (
                <InputPass onChangeText={onSearch} value={keyword} placeholder="Type your keyword..." />
            ) : null}
        </View>
    )
}

export default React.memo(Header);