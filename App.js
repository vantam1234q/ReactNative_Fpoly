/* eslint-disable prettier/prettier */
import React from 'react';
import {Text} from 'react-native';
import ViewComponent from './src/screens/Lab3React';
import Lab4 from './src/screens/lab4';
import Splash from './src/screens/auth/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './src/screens/auth/SignIn';
import SignUp from './src/screens/auth/SignUp';
import SigIn from './src/screens/auth/SignUp';
import SigUp from './src/screens/auth/SignIn';
import Lab5 from './src/screens/Lab5';
import flexBox from './src/screens/auth/Flex';
import Flex from './src/screens/auth/Flex';
import Lab6 from './src/screens/Lab6';
const Stack = createNativeStackNavigator();

const App = () => {
  return(
    // <ViewComponent/>
    
    // <Lab4 />

      // <NavigationContainer >
      //   <Stack.Navigator>
      //     <Stack.Screen name='Home' component={Splash} />
      //     <Stack.Screen name='Sign In' component={SigUp} />
      //     <Stack.Screen name='Sign Up' component={SigIn} />
      //   </Stack.Navigator>
      // </NavigationContainer>

      // <Lab5 />


    // <NavigationContainer>
    //   <Stack.Navigator>
    //    <Stack.Screen name='Lab5' component={Lab5}/>
    //    <Stack.Screen name='Flex' component={Flex}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
         <Lab6></Lab6>
   );
};

export default App;
