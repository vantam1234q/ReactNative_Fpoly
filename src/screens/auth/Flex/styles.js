/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 580,
  },
  text: {
      color: 'white',
      fontSize: 30,
      marginTop: 450,
      fontWeight: 'bold',
      paddingLeft : 30,
  },
  body: {
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    flex: 3,
    padding: 20,
    flexDirection: 'column',
  },
  body1: {
    fontSize: 20,
    flexDirection: 'row',
  },
  body1text: {
    fontWeight: 'bold',
    color: 'blue',
    fontSize: 19,
    marginLeft: 10,
  },
  icon:{
    width: 30,
    height: 30,
  },
  body2: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5,
  },
  body3: {
    fontSize: 17,
  },
  footer: {
    height: 60,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#000099',
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 0,
    paddingRight: 20,
    position: 'relative',
  },
  footer1:{
    color: 'white',
    marginLeft: 20,
    fontSize: 17,
  },
  circleBackground: {
    top: '5%',
    position: 'absolute',
    marginTop: -40,
    backgroundColor: '#EEEEEE', 
    borderRadius: 50,
    width: 60, 
    height: 60,
    marginLeft: 280,
    justifyContent: 'center',
    alignItems: 'center',
  },
  likeIcon: {
    fontSize: 24,
    color: 'red',
  },

});