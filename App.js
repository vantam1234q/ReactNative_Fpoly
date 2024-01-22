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

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    // <ViewComponent/>
    
    // <Lab4 />
      <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Splash} />
          <Stack.Screen name='Sign In' component={SigUp} />
          <Stack.Screen name='Sign Up' component={SigIn} />
        </Stack.Navigator>

      </NavigationContainer>
   );
};

export default App;
