import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from './pages/Signin';
import Home from './pages/Home';
import NewAnalysis from './pages/NewAnalysis';
import AnalysisResultPage from './pages/AnalysisResultPage';
import PreSignin from './pages/PreSignin';
import RegisterAccount from './pages/RegisterAccount';
import DatabaseInit from './database/database-init';

const Stack = createNativeStackNavigator();

export default function App() {
    useEffect(() => {
        new DatabaseInit();
    });

    const scheme = useColorScheme();

    return (
        <>
            <NavigationContainer
                theme={scheme === 'dark' ? DarkTheme : DefaultTheme}
            >
                <Stack.Navigator initialRouteName="NewAnalysis">
                    <Stack.Screen
                        options={{
                            headerShown: false,
                        }}
                        name="PreSignIn"
                        component={PreSignin}
                    />
                    <Stack.Screen
                        options={{
                            headerShown: true,
                            title: 'Login',
                            headerTintColor: 'white',
                        }}
                        name="SignIn"
                        component={Signin}
                    />
                    <Stack.Screen
                        options={{
                            headerShown: true,
                            title: 'Home',
                            headerTintColor: 'white',
                        }}
                        name="Home"
                        component={Home}
                    />
                    <Stack.Screen
                        options={{
                            headerShown: true,
                            title: 'Nova análise',
                            headerTintColor: 'white',
                        }}
                        name="NewAnalysis"
                        component={NewAnalysis}
                    />
                    <Stack.Screen
                        options={{
                            headerShown: true,
                            title: 'Resultado',
                            headerTintColor: 'white',
                        }}
                        name="AnalysisResultPage"
                        component={AnalysisResultPage}
                    />
                    <Stack.Screen
                        options={{
                            headerShown: true,
                            title: 'Criar conta',
                            headerTintColor: 'white',
                        }}
                        name="RegisterAccount"
                        component={RegisterAccount}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
