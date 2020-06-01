import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)
import { withAuthenticator } from 'aws-amplify-react-native';

import React, { Component } from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import WelcomeScreen from './src/components/WelcomeScreen';
import LoginScreen from './src/components/LoginScreen';
import ForgotPassword from './src/components/ForgotPassword';
import SignUp from './src/components/SignUp';
import Authentication from './src/components/Authentication';
const Stack = createStackNavigator();

function App() {
  return (
    
    
    <NavigationContainer>

      <Stack.Navigator>
      
        <Stack.Screen name="Welcome :) " component={WelcomeScreen} />
        
        <Stack.Screen name="Login" component={LoginScreen} />

        <Stack.Screen name="Authentication" component={Authentication} />

        <Stack.Screen name="Forgot Password" component={ForgotPassword} />

      </Stack.Navigator>

    </NavigationContainer>
    
    
    
  );
}

export default App;