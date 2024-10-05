import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import LoginScreen from './src/screens/auth/LoginScreen';
// import Loginotpverify from './src/screens/auth/LoginOTPverify';
// import LoginWithEmail from './src/screens/auth/LoginWithEmail';
import Home from './src/screens/auth/Home';
import OurCoaches from './src/screens/auth/OurCoaches';
import Navigation from './src/components/Navigation';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
    {/* <Navigation/> */}
  {/* <Home/> */}
  <OurCoaches/>

    </>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="LoginScreen"
    //       component={LoginScreen}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="Loginotpverify"
    //       component={Loginotpverify}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="LoginWithEmail"
    //       component={LoginWithEmail}
    //       options={{ headerShown: false }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;
