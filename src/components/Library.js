import React from 'react'
import { View, Text, ScrollView ,StyleSheet, TextInput, TouchableOpacity, Image  } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Library = () => {
  return (
    
    <ScrollView style = {styles.container}>
      <View style = {styles.topbar}>  
         
      </View>

      <Text style = {styles.head_text} > All Courses</Text>

      {/* text after the topbar */}
      <View>
        <TouchableOpacity >
          <View style={styles.card}>
                <Image
                  source={require('../assets/webdev.png')}
                  style={styles.image}
                />
                <View style={styles.content}>
                  <Text style={styles.title}>Web Development</Text>
                  
                  <Text style={styles.footer}>April 2025 • by Jone Doe</Text>
                  <Text style={styles.money}>price : 400 ₹</Text>
                </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity >
          <View style={styles.card}>
                <Image
                  source={require('../assets/data.jpeg')}
                  style={styles.image}
                />
                <View style={styles.content}>
                  <Text style={styles.title}>Data Science</Text>
                  
                  <Text style={styles.footer}>March 2024 • by Jone Doe</Text>
                  <Text style={styles.money}>price : 300 ₹</Text>
                </View>
          </View>
        </TouchableOpacity>


        <TouchableOpacity >
          <View style={styles.card}>
                <Image
                  source={require('../assets/reactjs.png')}
                  style={styles.image}
                />
                <View style={styles.content}>
                  <Text style={styles.title}>React Js</Text>
                  
                  <Text style={styles.footer}>March 2024 • by Jone Doe</Text>
                  <Text style={styles.money}>price : 300 ₹</Text>
                </View>
          </View>
        </TouchableOpacity>



        <TouchableOpacity >
          <View style={styles.card}>
                <Image
                  source={require('../assets/flutter.jpeg')}
                  style={styles.image}
                />
                <View style={styles.content}>
                  <Text style={styles.title}>Flutter Development</Text>
                  
                  <Text style={styles.footer}>March 2024 • by Jone Doe</Text>
                  <Text style={styles.money}>price : 300 ₹</Text>
                </View>
          </View>
        </TouchableOpacity>



        <TouchableOpacity >
          <View style={styles.card}>
                <Image
                  source={require('../assets/iosdev.jpeg')}
                  style={styles.image}
                />
                <View style={styles.content}>
                  <Text style={styles.title}>Swift Development</Text>
                  
                  <Text style={styles.footer}>March 2024 • by Jone Doe</Text>
                  <Text style={styles.money}>price : 300 ₹</Text>
                </View>
          </View>
        </TouchableOpacity>


        <TouchableOpacity >
          <View style={styles.card}>
                <Image
                  source={require('../assets/reactnative.png')}
                  style={styles.image}
                />
                <View style={styles.content}>
                  <Text style={styles.title}>React Native</Text>
                  
                  <Text style={styles.footer}>March 2024 • by Jone Doe</Text>
                  <Text style={styles.money}>price : 300 ₹</Text>
                </View>
          </View>
        </TouchableOpacity>
        

      </View>
      
    </ScrollView>
  )
}

export default Library

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginBottom: hp('13%'), 

  },
  topbar:{
    height: hp('13%'),
    width: wp('100%'),
    backgroundColor: '#B17F59',
    position: 'static'
  },
  head_text:{
    fontSize: 35,
    fontWeight: 'bold',
    color: '#27548A',
    marginLeft: 10,
},

  // this the card for every courses

  card: {
    borderRadius: 15,
    backgroundColor: '#FBFBFB',
    overflow: 'hidden',
    elevation: 3, // shadow for Android
    shadowColor: '#000', // shadow for iOS
    shadowOpacity: 0.2,
    shadowRadius: 4,
    margin: 17,
    
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 16,
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  message: {
    fontSize: 16,
    marginBottom: 12,
  },
  footer: {
    fontSize: 14,
    color: 'gray',
  },
  money: {
    fontSize: 15,
    marginTop: 5,
    fontWeight: 'bold',
  },

 
})