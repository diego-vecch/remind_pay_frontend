
import React from 'react'
import HomePage from '../pages/HomePage'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from '../pages/Profile';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const Stack = createNativeStackNavigator()

function MainStack () {
  return (
    
        <NavigationContainer  >
            <Stack.Navigator >
                <Stack.Screen
                    name='RemindPay - Home'
                    component = {HomePage}
                /> 
                <Stack.Screen
                    name='Profile'
                    component = {Profile}
                />
                <Stack.Screen
                    name='Login'
                    component = {LoginPage}
                />
                <Stack.Screen
                    name='Register'
                    component = {RegisterPage}
                />
            </Stack.Navigator>
        </NavigationContainer>
      
    
  )
}

export default MainStack