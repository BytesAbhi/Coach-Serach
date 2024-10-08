import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/auth/LoginScreen';
import Loginotpverify from './src/screens/auth/LoginOTPverify';
import LoginWithEmail from './src/screens/auth/LoginWithEmail';
import Home from './src/screens/auth/Home';
import User from './src/screens/profile/User';
import OurCoaches from './src/screens/auth/OurCoaches';
import Message from './src/screens/Message/Message';
import Navigation from './src/components/Navigation';


const Stack = createStackNavigator();

const App = () => {
  return (
    
  //    <Navigation/> 
  //  <Home/> 
  //  <OurCoaches/> 


    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OurCoaches"
          component={OurCoaches}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chat"
          component={Message}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Loginotpverify"
          component={Loginotpverify}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginWithEmail"
          component={LoginWithEmail}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
      <Navigation/>
    </NavigationContainer>
  );
};

export default App;
