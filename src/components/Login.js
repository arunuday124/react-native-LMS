import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View ,ScrollView, Image, TextInput, TouchableOpacity,Alert } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Login = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }
    Alert.alert('Login successful!');
    
    navigation.navigate('Dashboard');
  };
  
  return (
    <ScrollView style={ styles.container } >
        
        {/* this for the image */}
        <Image

            style={{ height:hp('45%'), width: wp('100%')  }}      
            source={require('../assets/login.png')}
            
        />

        {/* this for the text */}
        <View style={ styles.container_text }>

            <Text style={styles.title}> Welcome Again</Text>


            {/* this the login section */}

            <Text style={styles.title_text}> Email </Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            {/* this the password section */}

            <Text style={styles.title_text}> Password </Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            {/* login button */}
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            {/* this is the signup button */}
            <TouchableOpacity  onPress={() => navigation.navigate('Signup')}>
              <Text style = {styles.signup}>Don't have an account? <Text style ={styles.b} >Sign Up</Text> </Text>
            </TouchableOpacity>
        </View>


    </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: '#ffefdd', 
  },
  container_text:{
    alignItems: 'center',
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  title_text:{
    fontSize: 15,
    color: '#000',
    marginBottom: 20,
    fontWeight: 'bold',
    width: wp('80%'),
  },
  input: {
    width: wp('80%'),
    height: wp('14%'),
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button:{
    width: wp('80%'),
    height: hp('7%'),
    backgroundColor: '#FFC100',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  buttonText:{
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  signup:{
    marginTop:20,
    fontSize: 15,
    color: '#000',
  },
  b:
  {
    color: '#AA7F06',
    fontWeight: 'bold',
  }

})