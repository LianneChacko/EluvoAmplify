import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  Image,
  TextInput,
  Modal,
  Input,
} from "react-native";
const { width, height } = Dimensions.get("window");
import { Auth } from "aws-amplify";
export default class Authentication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      given_name: "",   //*******changed firstName to given_name ********
      family_name: "",
      //email: '',
      username: "",
      password: "",
      confirmPassword:" ",
      confirmationCode: "",
      modalVisible: false,
      // confirmPassword: '',
    };
  }

  //   handleSignUp = () => {
  //     // Show the current state object //commented it out after putting the step below that was to show the JSON string alert box
  //     alert(JSON.stringify(this.state));
  //   }

  handleSignUp = () => 
  {
    // alert(JSON.stringify(this.state));
    const { given_name,family_name,username,email, password, confirmPassword,birthdate} = this.state;
    // Make sure passwords match
    if (password === confirmPassword) 
    {
      Auth.signUp({username: username,password,email,given_name,family_name,birthdate,attributes: {email,family_name,given_name,birthdate},})
        // On success, show Confirmation Code Modal
        .then(() => this.setState({ modalVisible: true }))
        // On failure, display error in console
        .catch((err) => console.log(err));
    } 
    else 
    {   
      alert("Passwords do not match.");
    }
  };

  handleConfirmationCode = () => {
    const { email, confirmationCode } = this.state;
    Auth.confirmSignUp(email, confirmationCode, {})
      .then(() => {
        this.setState({ modalVisible: false });
        this.props.navigation.navigate("Login");
      })
      .catch((error) => console.log(error));
  };

  render() {
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

      
          <View style={styles.inputContainer}>
            <Text style={styles.textName}>First name</Text>
            <TextInput
              style={styles.nameInput}
              placeholder={"First name"}
              onChangeText={
                // Set this.state.email to the value in this Input box
                (value) => this.setState({ given_name: value })
              }
              placeholderTextColor="#ffff"
            />
          </View>

            
          <View style={styles.inputContainer}>
            <Text style={styles.textName}>Last name</Text>
            <TextInput
              style={styles.nameInput}
              placeholder={"Last name"}
              onChangeText={
                // Set this.state.email to the value in this Input box
                (value) => this.setState({ family_name: value })
              }
              placeholderTextColor="#ffff"
            />
          </View>
       
          <View style={styles.inputContainer}>
            <Text style={styles.textName}>Username</Text>
            <TextInput
              style={styles.nameInput}
              placeholder={"Username"}
              onChangeText=
              {
                // Set this.state.email to the value in this Input box
                (value) => this.setState({ username: value })
              }
              placeholderTextColor="#ffff"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.textName}>email</Text>
            <TextInput
              style={styles.nameInput}
              placeholder={"email"}
              onChangeText=
              {
                // Set this.state.email to the value in this Input box
                (value) => this.setState({ email: value })
              }
              placeholderTextColor="#ffff"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.textName}>Password</Text>
            <TextInput
              style={styles.nameInput}
              placeholder={"password"}
              onChangeText=
              {
                // Set this.state.email to the value in this Input box
                (value) => this.setState({ password: value })
              }
              placeholderTextColor="#ffff"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.textName}>birth_date</Text>
            <TextInput
              style={styles.nameInput}
              placeholder={"Birth date"}
              onChangeText={
                // Set this.state.email to the value in this Input box
                (value) => this.setState({ birthdate: value })
              }
              placeholderTextColor="#ffff"
            />
          </View>
       
       
          {/* <View style={styles.inputUserContainer}>
            <Icon name ={"ios-person-outline"} size={28} color={'#517fa4'}
                  style ={styles.icon}/>
            <Text style={styles.textUser}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder={"Username"}
              onChangeText=
              {
                // Set this.state.email to the value in this Input box
                (value) => this.setState({ username: value })
              }
              placeholderTextColor="#ffff"
            />
          </View> */}

          {/* <View style={styles.inputUserContainer}>
           
            <Text style={styles.textPassword}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder={"Password"}
              secureTextEntry={true}
              onChangeText=
              {
                // Set this.state.email to the value in this Input box
                (value) => this.setState({ password: value })
              }
              placeholderTextColor="#ffff"
            />
          </View> */}

          <View style={styles.inputContainer}>
            {/* <Icon name ={"ios-lock-outline"} size={28} color={'#517fa4'}
                  style ={styles.icon}/> */}
            <Text style={styles.textPassword}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              placeholder={"Confirm Password"}
              secureTextEntry={true}
              onChangeText=
              {
                // Set this.state.email to the value in this Input box
                (value) => this.setState({ confirmPassword: value })
              }
              placeholderTextColor="#ffff"
            />
          </View>

          
        
        <Button title="Submit" onPress={this.handleSignUp} />
        <Modal visible={this.state.modalVisible}>
          <View style={styles.container}>
            <TextInput
              placeholder={"Confirmation code"}
              onChangeText=
              {
                // Set this.state.confirmationCode to the value in this Input box
                (value) => this.setState({ confirmationCode: value })
              }
            />
            <Button title="Submit" onPress={this.handleConfirmationCode} />
          </View>
        </Modal>
      </View>
    );
  }
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
    paddingBottom: 20,
    paddingVertical: -50,
    marginVertical: -90,
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  textUser: {
    //position: "absolute",
    left: 100,
    top: 80,
    includeFontPadding: true,
    marginHorizontal: -70,
    // textAlign: 'center',
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  textPassword: {
    position: "absolute",
    left: 100,
    top: 90,
    includeFontPadding: true,
    marginHorizontal: -70,
    // textAlign: 'center',
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  textName: {
    marginHorizontal: 20,
    fontSize: 16,
    fontWeight: "bold",
    top: -10,

    color: "#fff",
  },
  inputContainer: {
    marginTop: 10, //pushes down expands the space between all the input text
    marginBottom: -20,
    marginLeft: -10,
    marginRight: -10,
    paddingVertical: 20,
    //position:'absolute',
    left: 10,
    top: -30,
    justifyContent: "space-around",
  },
  inputUserContainer: {
    //This is for username and password textInput
    marginTop: 20, //pushes down expands the space between all the input text
    marginBottom: -20,
    marginLeft: -10,
    marginRight: -10,
    paddingVertical: 20,
    //position:'absolute',
    left: 10,
    top: -30,
    justifyContent: "space-around",
  },
  //TextInput settings for username and password
  input: {
    width: width - 55, //getting width according to the window,written at the top
    height: 45,
    borderRadius: 10,
    color: "#000000",
    top: 90,
    backgroundColor: "#ffff",
   
    includeFontPadding: true,
    fontSize: 16,
    paddingVertical: 5,
    paddingLeft: 5,
    marginHorizontal: 25,
  },

  nameInput: {
    width: 180, //getting width according to the window,written at the top
    height: 45,
    borderRadius: 10,
    right: 10,
    fontSize: 16,
    includeFontPadding: true,
    paddingLeft: 5,
    backgroundColor: "#ffff",
    color: "#000000",
    marginHorizontal: 25,
  },
});
