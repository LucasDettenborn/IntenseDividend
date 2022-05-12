import React from 'react';
import { useColorScheme } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from './pages/Signin';
import PreSignin from './pages/PreSignin';
import RegisterAccount from './pages/RegisterAccount';

const Stack = createNativeStackNavigator();

export default function App() {

  const scheme = useColorScheme();

  return (
    <>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack.Navigator initialRouteName="PreSignIn">
          <Stack.Screen options={{headerShown: false}} name="PreSignIn" component={PreSignin} />
          <Stack.Screen name="SignIn" component={Signin} />
          <Stack.Screen name="RegisterAccount" component={RegisterAccount} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
