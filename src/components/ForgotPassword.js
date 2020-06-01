import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, Dimensions, Alert } from 'react-native';

const { width: WIDTH } = Dimensions.get('window')
function ForgotPassword() {
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

            <Text style={styles.text}> Forgot your password? No worries! </Text>

            <Text style={styles.emailText}> Please enter your email address </Text>

            <TextInput
                style={styles.input}

                placeholderTextColor='#ffff' />
            <View style={styles.submitButton}>
                <Button title="Submit"
                    color="#f09874"
                    onPress={() => Alert.alert('Please check your email')}


                />
            </View>


        </View>


    );
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f09874',
        alignItems: 'center'
    },

    text: {
        position: 'absolute',
        left: 50,
        top: 380,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: "bold",
        color:'white'
    },

    emailText: {
        position: 'absolute',
        left: 100,
        top: 425,
        textAlign: 'center',
        fontWeight: "bold",
        color:'white'


    }
    ,
    input: {
        position: 'absolute',
        left: 10,
        top: 450,
        width: WIDTH - 55, //getting width according to the window,written at the top
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: '#ffff',
        color: '#000000',
        marginHorizontal: 25

    },

    submitButton: {

        position: 'absolute',
        left: 270,
        top: 455,
        backgroundColor: '#ffff',
        paddingLeft: 0


    },
    logoContainer: {

        position: 'absolute',
        left: 90,
        top: 150,
        width: 200,
        height: 200,
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

    squiggleContainer: {

        position: 'absolute',
        left: 0,
        top: 500,
        width: 180,
        height: 230,
        resizeMode: "stretch"
    },

    bubbleContainer: {
        position: 'absolute',
        right: 0,
        top: 0,
        width: 130,
        height: 140,
        resizeMode: "stretch"
    },




});



export default ForgotPassword;