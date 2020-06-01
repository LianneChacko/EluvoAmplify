import React, { Component } from 'react';

import { StyleSheet, Text, View, Image, Dimensions, TextInput, Button } from 'react-native';
const { width, height } = Dimensions.get('window');
function LoginScreen({ navigation }) {



  navigateToScreen = () => {

    navigation.navigate('Forgot Password');

  }
  return (
    <View style={styles.MainContainer}>

      <Text style={styles.text}> </Text>
      <Image
        style={styles.logoContainer}
        source={require('../../assets/Eluvologo.png')}
      />
      <Image
        style={styles.dotsContainer}
        source={require('../../assets/Dots.png')}
      />

      <Image
        style={styles.bubbleContainer}
        source={require('../../assets/Bubble.png')}
      />



      <View style={styles.inputContainer}>

        <Text style={styles.text}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder={'Username'}
          placeholderTextColor='#ffff' />
      </View>

      <View style={styles.inputContainer}>

        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder={'Password'}
          secureTextEntry={true}
          placeholderTextColor='#ffff' />

        <View style={styles.forgotBtnContainer}>

          <Button
            color={'white'}

            onPress={this.navigateToScreen} title="Forgot Password?"
          />
        </View>

      </View>

      <View style={styles.loginBtnContainer}>
        <Button


          color={'#f09874'}
          //onPress={this.navigateToScreen}
          title="Login"

        />

      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f09874'

  },

  text: {
    color: 'white',
    fontSize: 16,
    paddingLeft: 45,
    top: 80,
    fontWeight: 'bold'
  },

  logoContainer: {

    position: 'absolute',
    width: 200,
    height: 200,
    top: 130,
    resizeMode: "stretch"
  },
  dotsContainer: {

    position: 'absolute',
    left: 0,
    top: 60,
    width: 124,
    height: 154,
    resizeMode: "stretch"
  },

  bubbleContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 180,
    height: 230,
    resizeMode: "stretch"
  },

  input://TextInput settings for username and password
  {
    width: width - 55, //getting width according to the window,written at the top
    height: 45,
    borderRadius: 10,
    color: '#000000',
    top: 90,
    backgroundColor: 'white',
    fontWeight: "bold",
    includeFontPadding: true,
    fontSize: 16,
    paddingVertical: 5,
    paddingLeft: 45,
    marginHorizontal: 25,


  },
  inputContainer:
  {
    marginTop: 10,//pushes down expands the space between all the input text 
    marginBottom: 10
  },
  loginBtnContainer: {

    position: 'absolute',
    width: 150,
    height: 45,
    borderRadius: 10,
    top: 550,
    right: 30,
    backgroundColor: 'white',
    fontWeight: "bold",
    includeFontPadding: true,
    fontSize: 30,
    paddingVertical: 5

  },
  forgotBtnContainer: {

    position: 'absolute',
    width: 150,
    height: 45,
    borderRadius: 10,
    top: 140,
    left: 20,
    fontWeight: "bold",
    includeFontPadding: true,
    fontSize: 10,
    textDecorationLine: 'underline',
    paddingVertical: 5

  }






});

export default LoginScreen;