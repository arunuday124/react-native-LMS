import React, { useState } from 'react';
import { View, Image, Button, StyleSheet, Alert, TouchableOpacity, Text,ScrollView, Touchable , TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


const Prof_update = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [aadhaar, setAadhaar] = useState('');
  
    //camara part 

    const [photo, setPhoto] = useState(null);
    
      const handleChoosePhoto = () => {
        Alert.alert(
          'Upload Photo',
          'Choose an option',
          [
            {
              text: 'Camera',
              onPress: () => openCamera(),
            },
            {
              text: 'Gallery',
              onPress: () => openGallery(),
            },
            {
              text: 'Cancel',
              style: 'cancel',
            },
          ],
          { cancelable: true }
        );
      };
    
      const openCamera = () => {
        launchCamera(
          {
            mediaType: 'photo',
            quality: 1,
          },
          (response) => {
            if (response.didCancel) {
              console.log('User cancelled camera');
            } else if (response.errorCode) {
              console.log('Camera Error: ', response.errorMessage);
            } else {
              const source = { uri: response.assets[0].uri };
              setPhoto(source);
            }
          }
        );
      };
    
      const openGallery = () => {
        launchImageLibrary(
          {
            mediaType: 'photo',
            quality: 1,
          },
          (response) => {
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.errorCode) {
              console.log('Gallery Error: ', response.errorMessage);
            } else {
              const source = { uri: response.assets[0].uri };
              setPhoto(source);
            }
          }
        );
      };

    //camara part end  
  return (
  <View>

        

    <ScrollView style={ styles.container }>
            <View style={{ flex: 1, backgroundColor: '#479AEF', padding: 20 , height: hp('12%')}}>
    
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: hp('3%')}}>
                  {/* <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                    <Image 
                      source={require('../assets/arrow.png')} 
                      style={{ width: wp('9%'), height: hp('4%') }} 
                      />
                  </TouchableOpacity> */}

                  <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Edit Profile</Text>
    
                </View>
            </View>
            

        {/* theis the profile pic part */}
        
              <Image
                  source={photo ? photo : require('../assets/user.png')} // add a default placeholder image
                  style={styles.profilePic}
              />
              
          <TouchableOpacity onPress={handleChoosePhoto}>
           <Image
                  source={require('../assets/edit.png')} // add a default placeholder image
                  style={styles.add}
            />
          </TouchableOpacity>
        


            {/* there are the input fields for the profile update   */}
        <ScrollView style = {styles.input_container}>
          <Text style={styles.title_text}>Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Your Name"
                value={name}
                onChangeText={setName}
                />
            
          <Text style={styles.title_text}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Your Email"
                value={email}
                onChangeText={setEmail}
            />

          <Text style={styles.title_text}>Phone</Text>
            <TextInput
                style={styles.input}
                placeholder="Phone"
                keyboardType="phone-pad"
                value={phone} 
                onChangeText={setPhone}
                maxLength={10}
                />
            
          <Text style={styles.title_text}>Aadhaar No</Text>
            <TextInput
                style={styles.input}
                placeholder="Aadhaar No"
                keyboardType="phone-pad"
                value={aadhaar} 
                onChangeText={setAadhaar}
                maxLength={12}
                />
          
          <Text style={styles.title_text}>Address</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Your Address"
                value={address}
                onChangeText={setAddress}
                />
        </ScrollView>

        <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>

    </ScrollView>
  </View>
  )
}

export default Prof_update

const styles = StyleSheet.create({
 input_container:{
  textAlign: 'center',
  //justifyContent: 'center',
 },
 profilePic: {
  width: wp('30%'),
  height: hp('14%'),
  borderRadius: hp('7%'),
  backgroundColor: '#ccc',
  alignSelf: 'center',
  marginTop: hp('3%'),
  
},
add:{
  width: wp('7.5%'),
  height: hp('3.5%'),
  alignSelf: 'center',
  marginTop: hp('-4%'),
  marginLeft: wp('20%'),
  borderRadius: hp('10%'),
  backgroundColor: '#9DC08B',  
},
 title_text:{
  fontSize: 20,
  color: '#000',
  marginBottom: hp('2%'),
  //marginTop: hp('2%'),
  marginLeft: wp('5%'),
  fontWeight: 'bold',
  width: wp('80%'),
},
input: {
  width: wp('90%'),
  height: wp('14%'),
  borderColor: '#ccc',
  borderWidth: 1,
  borderRadius: 15,
  paddingHorizontal: 10,
  marginBottom: 15,
  backgroundColor: '#fff',
  marginLeft: wp('5%'),
},
button:{
  width: wp('80%'),
  height: hp('7%'),
  backgroundColor: '#FFC100',
  borderRadius: 15,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 15,
  marginLeft: wp('10%'),
  marginBottom: hp('5%'),
},
buttonText:{
  color: '#000',
  fontSize: 20,
  fontWeight: 'bold',
},
})