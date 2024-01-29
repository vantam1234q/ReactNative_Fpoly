/* eslint-disable prettier/prettier */
import React from 'react';
import { styles } from "./styles";
import { View, Text, Image, ImageBackground} from 'react-native';
import Button6 from '../../../components/button6';


const Flex = ({navigation}) => {
  return (
    <View style={styles.container}>
    
      <View style={styles.header}>
      <ImageBackground
              source={require('../../../assets/image/hoian.png')}
                style={styles.image}>
                <View style={styles.details}>
                    <Text style={styles.text}>PHỐ CỔ HỘI AN</Text>
                </View>         
            </ImageBackground>
      </View>

      <View style={styles.body}>
      <View style={styles.body1}>
        <Image source={require('../../../assets/image/map.jpg')} style={styles.icon} />
        <Text style={styles.body1text}>Quảng Nam</Text>
      </View>
        <Text style={styles.body2}>  Thông tin chuyến đi</Text>
        <Text style={styles.body3}>  Hội An là một trong thành phố trực thuôc tỉnh Quảng Nam,
        Việt Nam, phố cô Hội An từng là một thương cảng quốc tế sầm uất, gồm những di sản kiến 
        trúc đã có từng hàng trăm năm trước, được UNESCO công nhận là di sản văn hóa thế giới
        từ năm 1999, Hôi An là một trong thành phố trực thuôc tỉnh ...
        </Text>
        <View style={styles.circleBackground}>
          <Text style={styles.likeIcon}>❤</Text>
      </View>
      </View>
      <View style={styles.footer}>
      <Text style={styles.footer1}>$100/ Ngày</Text>
      <Button6 onPress={() => navigation.navigate('Lab5')}></Button6>
        
      </View>
    </View>
  );
};
export default Flex;