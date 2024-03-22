/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {Image, Text, View} from 'react-native';
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
import Lab7 from './src/screens/Lab7';
import TopTab from './src/screens/Lab7/topmenu';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Home from './src/screens/app/Home';
import Lab6 from './src/screens/Lab6';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorite from './src/screens/app/Favorite';
import Crud from './src/screens/Lab8/CRUD';
import Product from './src/screens/app/Product';
import BottomTabs from './src/screens/Lab7';
import ProductDetailScreen from './src/screens/app/Product';
import Profile from './src/screens/app/Profile';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const WEB_CLIENT_ID =
    '356032109327-0eka9phlma63uoi7sgenobcgpum7i77n.apps.googleusercontent.com';
  const IOS_CLIENT_ID =
    '356032109327-91jiecs7rjmuuupojnjkqspfbcfpq9c9.apps.googleusercontent.com';
    const isSignedIn = true;
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      iosClientId: IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, []);
  
  return(
    // <ViewComponent/>
    
    // <Lab4 />

      <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen name='Splash' component={Splash}  options={{headerShown: false}} />
          <Stack.Screen name='Sign In' component={SigUp}  />
          <Stack.Screen name='Sign Up' component={SigIn}  />
          <Stack.Screen name='Home' component={Home} options={{ title: 'Danh sách sản phẩm' } }  />
          <Stack.Screen name="DetailProduct" component={ProductDetailScreen} options={{ title: 'Chi tiết sản phẩm' }} />
        </Stack.Navigator>
      </NavigationContainer>

      // <Lab5 />


    // <NavigationContainer>
    //   <Stack.Navigator>
    //    <Stack.Screen name='Lab5' component={Lab5}/>
    //    <Stack.Screen name='Flex' component={Flex}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <Lab6></Lab6>
        // <Lab7/>
      // <TopTab></TopTab>
      // <Home></Home>
    // <Crud></Crud>
      //  <Product></Product>
//  <NavigationContainer>
//   <BottomTabs />
//  </NavigationContainer>
   );
};

export default App;
