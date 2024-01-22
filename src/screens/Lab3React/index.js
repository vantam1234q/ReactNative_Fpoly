/* eslint-disable react/self-closing-comp */
/* eslint-disable no-sequences */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import {useState} from 'react';

const ViewComponent = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setName}
        placeholder="Nhập họ tên "
        style={styles.tipStyle}></TextInput>

      <TextInput
        onChangeText={setPhone}
        placeholder="Nhập số điện thoại "
        keyboardType="phone-pad"
        secureTextEntry={true}
        style={styles.tipStyle}></TextInput>

      <TextInput
        onChangeText={setPassword}
        placeholder="Nhập mật khẩu "
        style={styles.tipStyle}></TextInput>
      {/* Line 1 */}
      <Text style={styles.baseText}>
        Em vào đời bằng{' '}
        <Text style={[styles.boldText, colorText('red')]}>vang đỏ</Text> anh vào
        đời bằng{' '}
        <Text style={[styles.boldText, colorText('yellow')]}>nước trà</Text>
      </Text>
      {/* Line 2 */}
      <Text style={styles.baseText}>
        Bằng cơn mưa thơm{' '}
        <Text style={[styles.boldText, styles.italicText]}>mùi đất </Text>
        {''}
        và <Text style={styles.italicText}>bằng hoa dại mọc trưỚc nhà</Text>
      </Text>

      {/* Line 3 */}
      <Text
        style={[
          styles.baseText,
          styles.italicText,
          styles.boldText,
          colorText('gray'),
        ]}>
        Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ
      </Text>

      {/* Line 4 */}
      <Text style={[styleText.baseText]}>
        Lý trí em là{' '}
        <Text
          style={styleText({
            textDecorationLine: 'underline',
            letterSpacing: 20,
            fontWeight: 'bold',
          })}>
          {' '}
          công cụ {''}
        </Text>
        còn trái tim anh là{' '}
        <Text
          style={styleText({
            textDecorationLine: 'underline',
            letterSpacing: 20,
            fontWeight: 'bold',
          })}>
          {' '}
          động cơ {''}
        </Text>
      </Text>
      {/* Line 5 */}
      <Text style={[styles.baseText, styleText({textAlign: 'right'})]}>
        Em vào đời nhiều đồng nghiệp anh vào đời nhiều tình thân
      </Text>
      {/* Line 6 */}
      <Text
        style={[
          styles.baseText,
          styleText({
            textAlign: 'center',
            color: 'orange',
            fontWeight: 'bold',
          }),
        ]}>
        Anh chỉ muốn chân mình đạp đất không muốn đạp ai dưới chân mình
      </Text>

      {/* Line 7 */}

      <Text
        style={[
          styles.baseText,
          styleText({
            color: 'back',
            fontWeight: 'bold',
          }),
        ]}>
        Em vào đời bằng <Text style={colorText('white')}>mây trắng</Text> em vào
        đời bằng <Text style={colorText('yellow')}>nắng xanh</Text>
      </Text>

      {/* Line 8 */}
      <Text
        style={[
          styles.baseText,
          styleText({
            color: 'back',
            fontWeight: 'bold',
          }),
        ]}>
        Em vào đời bằng <Text style={colorText('yellow')}>đại lộ</Text> và con
        đường đó giờ <Text style={colorText('white')}>vắng anh</Text>
      </Text>
    </View>
  );
};
export default ViewComponent;

const colorText = color => ({
  color,
});

const sizeText = (size: number) => ({
  fontSize: size,
});

const styleText = (props: TextStyle) => ({
  ...props,
});
