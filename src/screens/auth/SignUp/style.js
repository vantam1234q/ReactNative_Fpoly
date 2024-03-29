/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  title1: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
    color : 'black',
  },
  title2: {
    fontSize: 15,
    textAlign: 'center',
    color : 'black',
  },
  innerTitle: {
    marginTop: 10,
    fontSize: 18,
    marginRight: 120,
  },
  footerText: {
    color: '#4F63AC',
    marginBottom: 56,
    textAlign: 'center',
  },
  footerLink: {
    fontWeight: 'bold',
  },
  checkRow : {
    padding : 10,
    flexDirection : 'row',
    alignItems :'center',
  },
  checkText : {
    paddingLeft : 10
  },
});
