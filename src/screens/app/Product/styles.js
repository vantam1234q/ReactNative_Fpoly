/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet} from 'react-native';

const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor : 'white',
  },
  footer: {
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {},
  image: {
    margin : 5,
    width: '100%',
   height : 450,
  },
  content: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 24,
  },
  title: {
    color : 'black',
    fontWeight : 'bold',
    marginTop: 20,
    fontSize: 25,
  },
  price: {
    color : 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  description: {
    marginVertical: 8,
    lineHeight: 24,
    fontSize : 15,
  },
  bookmarkContainer: {
    backgroundColor : 'gray',
    padding: 18,
    borderRadius: 8,
    marginRight: 16,
  },
  bookmarkIcon: {
    width: 25,
    height: 30,
  },
  backContainer: {
    padding: 10,
    margin: 24,
    borderRadius: 8,
    marginRight: 16,
    position: 'absolute',
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  btnSpace: {
    marginRight: 16,
  },
});