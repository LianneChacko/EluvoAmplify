import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions,Button } from 'react-native';
const { width, height } = Dimensions.get('window');


function WelcomeScreen({ navigation }) {

  return (
    <View style={styles.MainContainer}>

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

      <Image
        style={styles.squiggleContainer}
        source={require('../../assets/squiggle.png')}
      />
      <View>
        <Button style={styles.loginBtnContainer}
          color={'white'}

          onPress={()=>navigation.navigate('Login')} title="Create an account"
        />
      </View>

      <View>
        <Button style={styles.signBtnContainer}
          color={'white'}

          onPress={()=>navigation.navigate('Authentication')} title="Sign Up"
        />
      </View>
    </View>








  );
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f09874'

  },

  logoContainer: {
    flex: 1,
    position: 'absolute',
    width: 200,
    height: 200,
    top: 160,
    resizeMode: "contain"

  },



  dotsContainer: {

    position: 'absolute',
    left: 0,
    top: 60,
    width: 124,
    height: 154,
    resizeMode: "contain"
  },

  bubbleContainer: {

    position: 'absolute',
    right: 0,
    top: 0,
    width: 180,
    height: 230,
    resizeMode: "contain"
  },

  squiggleContainer: {
    position: 'absolute',
    left: 0,
    top: 350,
    width: 130,
    height: 140,
    resizeMode: "contain"
  },

  loginBtnContainer: {

    position: 'absolute',
    width: width - 55,
    height: 50,
    borderRadius: 10,
    top: -20,
    backgroundColor: 'white',
    includeFontPadding: true,
    paddingVertical: 5,



  },
  signBtnContainer:
  {

    position: 'absolute',
    width: width - 55,
    height: 50,
    borderRadius: 10,
    top: 540,
    backgroundColor: '#fff',
    includeFontPadding: true,
    paddingVertical: 5,

  },
  textContainer:
  {
    // fontFamily: "Circular Std",
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: -0.41,
    lineHeight: 22,
    textAlign: 'center',
    color: '#f09874',

  }


});
export default WelcomeScreen;