import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    marginLeft: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // Màu của nền button
    padding: 10,
    height:55,
    width: 300,
    borderColor: '#2D4990',
    borderWidth: 2,
    borderRadius: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 15,
    marginLeft:10,
  },
  buttonText: {
    color: '#2D4990',
    fontSize: 15,
  },
});

export default styles;
