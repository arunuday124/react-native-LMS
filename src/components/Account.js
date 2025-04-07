import React, { useState } from 'react';
import { View, Image, Button, StyleSheet, Alert, TouchableOpacity, Text,ScrollView, Touchable  } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const ProfileImagePicker = () => {
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

  return (
    <ScrollView>
          <View style={styles.container}>
      <TouchableOpacity onPress={handleChoosePhoto}>
        <Image
          source={photo ? photo : require('../assets/user.png')} // add a default placeholder image
          style={styles.profilePic}
        />
        <Text style={styles.text}>Edit</Text>
      </TouchableOpacity>
      
      {/* Uncomment the following lines if you want to add a button to remove the photo
      {photo && (
        <Button
          title="Remove Photo"
          onPress={() => {
            setPhoto(null);
          }}
        />
      )} */}


      <Text style = {styles.text_1}>Arunuday Debnath</Text>
      <Text style = {styles.text2}>Overall Stats </Text>

      {/* overall stats info */}
      <View style = {styles.stats_container}>

        <TouchableOpacity>
          <View style = {styles.stats}>
            <Text style = {styles.top_text}>5</Text>
            <Text style = {styles.buttom_text}>Completed</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style = {styles.stats}>
            <Text style = {styles.top_text}>2</Text>
            <Text style = {styles.buttom_text}>On Going</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style = {styles.stats}>
            <Text style = {styles.top_text}>4</Text>
            <Text style = {styles.buttom_text}>Certificate</Text>
          </View>
        </TouchableOpacity>

      </View>


      {/* these are the content after overall stats */}
      <Text style = {styles.text2}>General</Text>

      <TouchableOpacity style = {styles.prof_container}>
        <Image
          source={require('../assets/pen.png')}
          style={{ width: 40, height: 40 }}
        />
        <Text style = {styles.main_text}>Update Profile</Text>
        <Image
          source={require('../assets/angle.png')}
          style={{ width: 30, height: 30, marginLeft: 160 }}
        />
      </TouchableOpacity>


      <TouchableOpacity style = {styles.prof_container}>
        <Image
          source={require('../assets/bell.png')}
          style={{ width: 40, height: 40 }}
        />
        <Text style = {styles.main_text}>Notification</Text>
        <Image
          source={require('../assets/angle.png')}
          style={{ width: 30, height: 30, marginLeft: 180 }}
        />
      </TouchableOpacity>


      <TouchableOpacity style = {styles.prof_container}>
        <Image
          source={require('../assets/lock.png')}
          style={{ width: 40, height: 40 }}
        />
        <Text style = {styles.main_text}>Change Password</Text>
        <Image
          source={require('../assets/angle.png')}
          style={{ width: 30, height: 30, marginLeft: 130 }}
        />
      </TouchableOpacity>




      {/* this the support part */}

      <Text style = {styles.text2}>Support</Text>

      <TouchableOpacity style = {styles.prof_container}>
        <Image
          source={require('../assets/bugs.png')}
          style={{ width: 40, height: 40 }}
        />
        <Text style = {styles.main_text}>Report A Bug</Text>
        <Image
          source={require('../assets/angle.png')}
          style={{ width: 30, height: 30, marginLeft: 165 }}
        />
      </TouchableOpacity>


      <TouchableOpacity style = {styles.prof_container}>
        <Image
          source={require('../assets/send.png')}
          style={{ width: 40, height: 40 }}
        />
        <Text style = {styles.main_text}>Send Feedback</Text>
        <Image
          source={require('../assets/angle.png')}
          style={{ width: 30, height: 30, marginLeft: 150 }}
        />
      </TouchableOpacity>


      <TouchableOpacity style = {styles.prof_container}>
        <Image
          source={require('../assets/question.png')}
          style={{ width: 40, height: 40 }}
        />
        <Text style = {styles.main_text}>FAQ's</Text>
        <Image
          source={require('../assets/angle.png')}
          style={{ width: 30, height: 30, marginLeft: 230 }}
        />
      </TouchableOpacity>
      
    </View>
    </ScrollView>
  );
};

export default ProfileImagePicker;

const styles = StyleSheet.create({
  container: {
    //alignItems: 'center',
    marginTop: 50,
    marginBottom: hp('15%'), 
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#ccc',
    alignSelf: 'center',
  },
  text: {
    marginTop: 15,
    color: '#555',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text_1: {
    marginTop: 15,
    color: '#183B4E',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text2:{
    fontSize: 22,
    color: '#183B4E',
    marginTop: 35,
    marginLeft: 26,
    fontWeight: 'bold',
  },
  stats_container:{
    flexDirection: 'row',
    //justifyContent: 'space-between',

  },
  stats:{
    
    color: '#183B4E',
    width: 110,
    height: 90,
    backgroundColor: '#48A6A7',  // Green color
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 20,
    elevation: 5, // shadow for Android
    shadowColor: '#000', // shadow for iOS
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  top_text:{
    fontSize: 30,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
  buttom_text:{
    fontSize: 15,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 5,
  },
  prof_container:{
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 20,
  },
  main_text:{
    fontSize: 18,
    color: '#183B4E',
    marginLeft: 20,
    marginTop: 5,
    fontWeight: 'bold',
  },
});