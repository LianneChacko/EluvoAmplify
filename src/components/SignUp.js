import React, { Component } from "react";

import 
{
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
} from "react-native";
const { width, height } = Dimensions.get("window");

function SignUp() {
  return (
    <View style={styles.MainContainer}>
      <Image
        style={styles.logoContainer}
        source={require("../../assets/Eluvologo.png")}
      />
      <Text style={styles.text}> Create an account </Text>
      <Image
        style={styles.dotsContainer}
        source={require("../../assets/Dots.png")}
      />

      <Image
        style={styles.bubbleContainer}
        source={require("../../assets/Bubble.png")}
      />

      <View style={{ flexDirection: "row" ,justifyContent:"space-evenly"}}>
       <View style={styles.inputContainer}>
          <Text style={styles.textName}>First name</Text>
          <TextInput
            style={styles.nameInput}
            placeholder={"First name"}
            placeholderTextColor="#ffff"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.textName}>Last name</Text>
          <TextInput
            style={styles.nameInput}
            placeholder={"Last name"}
            placeholderTextColor="#ffff"
          />
          
        </View>
        
      </View>
    <View style ={{ flexDirection: "column" ,justifyContent:"space-evenly"}}>
      <View style = {styles.inputContainer}>
          {/* <Icon name ={"ios-person-outline"} size={28} color={'#517fa4'}
                style ={styles.icon}/> */}
             <Text style={styles.textUser}>Username</Text>
          <TextInput 
             style = {styles.input}
             placeholder = {'Username'}
             placeholderTextColor ='#ffff'/>
         </View>
  
        <View style = {styles.inputContainer}>
          {/* <Icon name ={"ios-lock-outline"} size={28} color={'#517fa4'}
                style ={styles.icon}/> */}
          <Text style={styles.textPassword}>Password</Text>
          <TextInput 
             style = {styles.input}
             placeholder = {'Password'}
             secureTextEntry={true}
             placeholderTextColor ='#ffff'/>
         </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f09874",
  },
  logoContainer: {
    //alignItems:"center",
    position: "absolute",
    top: 50,
    width: 100,
    height: 100,

    resizeMode: "stretch",

    marginBottom: 120, // pushed the image up
  },

  bubbleContainer: {
    position: "absolute",
    right: 0,
    top: 0,
    width: 130,
    height: 180,
    resizeMode: "stretch",
  },

  dotsContainer: {
    position: "absolute",
    left: 0,
    top: 60,
    width: 120,
    height: 110,
    resizeMode: "stretch",
  },
  text: {

    position: "absolute",
    left: 100,
    top: 180,
    paddingBottom:20,
    paddingVertical:-50,
    marginVertical:-90,
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  textUser: {
    //position: "absolute",
    left: 100,
    top:80,
    includeFontPadding:true,
    marginHorizontal:-70,
    // textAlign: 'center',
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  textPassword: {
    position: "absolute",
    left:100,
    top: 90,
    includeFontPadding:true,
    marginHorizontal:-70,
    // textAlign: 'center',
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  textName:
  {
    marginHorizontal:20,
    fontSize: 16,
    fontWeight: "bold",
    top:-10,
    
   
    color: "#fff",
  },
  inputContainer: {
    marginTop: 10, //pushes down expands the space between all the input text
    marginBottom: -20,
    marginLeft:-10,
    marginRight:-10,
    paddingVertical:20,
    //position:'absolute',
    left: 10,
    top: -30,
    justifyContent:"space-around"
  },
  inputUserContainer: {  //This is for username and password textInput
    marginTop: 20, //pushes down expands the space between all the input text
    marginBottom: -20,
    marginLeft:-10,
    marginRight:-10,
    paddingVertical:20,
    //position:'absolute',
    left: 10,
    top: -30,
    justifyContent:"space-around"
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
    marginHorizontal: 25 },

  nameInput: {
    width: 180, //getting width according to the window,written at the top
    height: 45,
    borderRadius:10,
    right:10,
    fontSize: 16,
    includeFontPadding:true,
    paddingLeft:5,
    backgroundColor: "#ffff",
    color: "#000000",
    marginHorizontal: 25,
  },
});

export default SignUp;
